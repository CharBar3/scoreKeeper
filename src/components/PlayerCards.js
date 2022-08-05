

const PlayerCards = ({ players, updatePlayer, removeSpecificPlayer }) => {

    const updateScore = (e, index) => {
        console.log("update score pressed")
    }

    let showPlayers = players.map((element, index) => {
        return (
            <div key={index} className="player-div">
                <input className="player-title-input" type="text" name="playerName" value={element.playerName} onChange={(e) => updatePlayer(e, index)}/>   
                <label htmlFor="playerScore">{`Current Score ${element.playerScore}`}</label>
                <div className="score-input-div">
                    <input className="player-score-input" type="number" name="playerScore" value={element.playerScore} onChange={(e) => updatePlayer(e, index)}/>
                    <button onClick={(e) => updateScore(e, index) }>Update</button>
                </div>
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