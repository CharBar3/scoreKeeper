import './App.css';
import PlayerCards from './components/PlayerCards';
import { useState } from "react"

function App() {

  const [playerCount, setPlayerCount] = useState(2)
    const [players, setPlayers] = useState(
        [
            {
                playerName: "Player 1",
                playerScore: 0,
                notes: "notes"
            },
            {
                playerName: "Player 2",
                playerScore: 0,
                notes: "notes"
            }
        ]
    )

    const updatePlayer = (e, index) => {
        setPlayers(prevState => {
            let newState = prevState
            newState[index][e.target.name] = e.target.value
            return (
            [...newState]
            )
        })
    }
    const addPlayer = () => {
        setPlayers(prevState => {
            prevState.push({
                playerName: `Player ${playerCount + 1}`,
                playerScore: 0,
                notes: "notes"
            })
            return prevState
        })
        setPlayerCount(playerCount + 1)
    }
    const removePlayer = () => {
        setPlayers(prevState => {
            prevState.pop()
            return prevState
        })
        if (playerCount > 0) {
            setPlayerCount(playerCount - 1)
        }
    }
    const removeSpecificPlayer = (e) => {

        let message = window.confirm("are you sure?")

        if (message === true) {
            console.log("delete player")
        } else {
            console.log("don't delete player")
        }
    }  

  return (
    <div className="App">
      <h1>Score Keeper</h1>
      <div id='button-div'>
        <button onClick={() => addPlayer()}>Add Player</button>
        <button onClick={() => removePlayer()}>Remove Player</button>
      </div>
      <div id='show-players-div'>
        <PlayerCards players={players} updatePlayer={updatePlayer} removeSpecificPlayer={removeSpecificPlayer} addPlayer={addPlayer} removePlayer={removePlayer}/>
      </div>
    </div>
  );
}

export default App;
