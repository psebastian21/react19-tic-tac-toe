import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [activePlayer, setActivePlayer] = useState("X")
  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X")
    setGameTurns((prevTurns) => {
      const player = prevTurns.length > 0 && prevTurns[0].player === "X" ? "O" : "X"
      return [
        { square: { row: rowIndex, col: colIndex }, player },
        ...prevTurns
      ]
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
    </main>
  )
}

export default App
