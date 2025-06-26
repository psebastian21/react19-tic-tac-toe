import {useState} from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import {WINNING_COMBINATIONS} from "./winning-combinations";
import GameOver from "./components/GameOver.jsx";

const createEmptyBoard = () => Array.from({length: 3}, () => Array(3).fill(null));

const App = () => {
    const [players, setPlayers] = useState({
        X: "Player 1",
        O: "Player 2"
    })
    const [gameState, setGameState] = useState({gameTurns: [], activePlayer: "X"})
    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameState((prevGameState) => {
            return {
                gameTurns: [
                    {square: {row: rowIndex, col: colIndex}, player: prevGameState.activePlayer},
                    ...prevGameState.gameTurns
                ],
                activePlayer: prevGameState.activePlayer === "X" ? "O" : "X"
            }
        })
    }
    const handleRematch = () => {
        setGameState({gameTurns: [], activePlayer: "X"})
    }
    const {gameTurns, activePlayer} = gameState
    const gameBoard = createEmptyBoard()
    gameTurns.forEach((turn) => {
        gameBoard[turn.square.row][turn.square.col] = turn.player
    })
    let winner = null;

    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        const combination = WINNING_COMBINATIONS[i];
        const firstSquare = gameBoard[combination[0].row][combination[0].column];
        const secondSquare = gameBoard[combination[1].row][combination[1].column];
        const thirdSquare = gameBoard[combination[2].row][combination[2].column];

        if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
            winner = firstSquare;
            break;
        }
    }
    const hasDraw = gameTurns.length === 9 && !winner;

    return (
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
                    <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onClick={handleRematch}/>}
                <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}

export default App
