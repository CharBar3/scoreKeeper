

const PlayerCardsOLD = ({ players, setPlayers, updatePlayer, removeSpecificPlayer }) => {

    const updateScore = (e, index) => {
        e.preventDefault()

        setPlayers(prevState => {
            
            let newState = prevState
            console.log(newState[index].playerScore)
            const updatedScore = newState[index].playerScore[newState[index].playerScore.length-1] + Number(e.target.playerScore.value)
            newState[index].playerScore.push(updatedScore)
            return ([...newState])
        })
    }

    const flipCard = (e, index) => {
        setPlayers(prevState => {
            
            let newState = prevState
            
            if (newState[index].showBack === false) {
                newState[index].showBack = true
            } else {
                newState[index].showBack = false
            }

            

            return (
                [...prevState]
            )
        })
    }
 
    

    let showPlayers = players.map((element, index) => {

        if (element.showBack === true) {
            return (
                <div key={index} className="player-div">
                    <h1>flipCard</h1>
                    <button onClick={(e) => flipCard(e, index)}>flip</button>
                </div>
            )
        } else {
            return (
                <div key={index} className="player-div">
                    <input className="player-title-input" type="text" name="playerName" value={element.playerName} onChange={(e) => updatePlayer(e, index)}/>   
                    <h2>{`Current Score: ${element.playerScore[element.playerScore.length-1]}`}</h2>
                    <form onSubmit={(e) => updateScore(e, index)} className="score-input-div">
                        <input className="player-score-input" type="number" name="playerScore" placeholder="score"/>
                        <button type="submit">Update</button>
                    </form>
                    <textarea className="player-notes-input" type="textarea" name="notes" value={element.notes} onChange={(e) => updatePlayer(e, index)}/>
                    {/* <button name={index} onClick={(e) => removeSpecificPlayer(e)}>Remove Player</button> */}
                    <button name={index} onClick={(e) => flipCard(e, index)}>Show Scores</button>
                </div>
            )
        }
    })

    return (
        <>
        {showPlayers}
        </>
    )
}

export default PlayerCardsOLD