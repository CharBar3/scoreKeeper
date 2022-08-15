import './App.css';
// import PlayerCards from './components/PlayerCards';
import { useState } from "react"

// MUI

import { Container } from '@mui/system';
import { Typography, Box, ButtonGroup, Button } from '@mui/material';
import PlayerCard from './components/PlayerCards';

function App() {

  const [playerCount, setPlayerCount] = useState(2)
    const [players, setPlayers] = useState(
        [
            {
                showBack: false,
                playerName: "Player 1",
                playerScore: [0],
                notes: "notes"
            },
            {
                showBack: true,
                playerName: "Player 2",
                playerScore: [0],
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
                showBack: false,
                playerName: `Player ${playerCount + 1}`,
                playerScore: [0],
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
    <>
    <Container>
        <Typography variant='h1'>Score Keeper</Typography>
        <Box>
            {/* <button onClick={() => addPlayer()}>Add Player</button>
            <button onClick={() => removePlayer()}>Remove Player</button> */}
            <ButtonGroup variant='outlined'>
                <Button>Add Player</Button>
                <Button>Remove Player</Button>
            </ButtonGroup>
        </Box>
        <Box>
            <PlayerCard players={players}/>
        </Box>
    </Container>
    </>
  );
}

export default App;
