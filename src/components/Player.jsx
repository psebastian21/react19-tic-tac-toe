import { useState } from "react"

const Player = ({ initialName, symbol, isActive }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(initialName)
    const handleEditClick = () => {
        setIsEditing((prevIsEditing) => !prevIsEditing)
    }
    const handleInputChange = (event) => {
        setPlayerName(event.target.value)
    }
    let playerNameField, buttonText
    if (isEditing) {
        playerNameField = <input type="text" required value={playerName} onChange={handleInputChange} />
        buttonText = "Save"
    }
    else {
        playerNameField = <span className="player-name">{playerName}</span>
        buttonText = "Edit"
    }
    return <li className={isActive ? "active" : undefined}>
        <span className="player">
            {playerNameField}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{buttonText}</button>
    </li>
}

export default Player