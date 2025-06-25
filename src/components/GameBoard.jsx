const createEmptyBoard = () => Array.from({ length: 3 }, () => Array(3).fill(null));


const GameBoard = ({ onSelectSquare, turns }) => {
    let gameBoard = createEmptyBoard()
    turns.forEach((turn) => {
        gameBoard[turn.square.row][turn.square.col] = turn.player
    })    

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((squareContent, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{squareContent}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default GameBoard