

const PlayerCards = ({ players, updatePlayer, removeSpecificPlayer }) => {

    let showPlayers = players.map((element, index) => {
        return (
            <div key={index} className="player-div">
                <div>
                    <input className="player-title-input" type="text" name="playerName" value={element.playerName} onChange={(e) => updatePlayer(e, index)}/>   
                </div>
                <label htmlFor="playerScore">{`Current Score ${element.playerScore}`}</label>
                <input className="player-score-input" type="number" name="playerScore" value={element.playerScore} onChange={(e) => updatePlayer(e, index)}/>
                <textarea className="player-notes-input" type="textarea" name="notes" value={element.notes} onChange={(e) => updatePlayer(e, index)}/>
                <button name={index} onClick={(e) => removeSpecificPlayer(e)}>Remove Player</button>
            </div>
        )
    })

    return (
        <>
        {showPlayers}
        </>
    )
}

export default PlayerCards