import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ({ onSelectSquare }) => {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)
    // const handleSquareClick = (rowIndex, colIndex) => {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = prevGameBoard.map(row => [...row]);
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol
    //         return updatedBoard
    //     })
    //     onSelectSquare()
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((squareContent, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSquareClick(rowIndex, colIndex)}>{squareContent}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}

export default GameBoard