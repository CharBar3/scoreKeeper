import './App.css';
// import PlayerCards from './components/PlayerCards';
import { useState, useEffect } from "react"

// MUI

import { Container } from '@mui/system';
import { Typography, Box, ButtonGroup, Button } from '@mui/material';
import PlayerCard from './components/PlayerCards';

function App() {

    const generateRandomColor = () => {
        const colorNumber = () => {
            return Math.floor(Math.random() * 255)
        }
        return {red: colorNumber(), green: colorNumber(), blue: colorNumber()}
    }

  const [playerCount, setPlayerCount] = useState(2)
    const [players, setPlayers] = useState(
        [
            {
                showBack: false,
                playerName: "Player 1",
                playerScore: [0],
                notes: "notes",
                RGB: generateRandomColor()
            },
            {
                showBack: true,
                playerName: "Player 2",
                playerScore: [0],
                notes: "notes",
                RGB: generateRandomColor()
            }
        ]
    )
    
    // const updatePlayer = (e, index) => {
    //     setPlayers(prevState => {
    //         let newState = prevState
    //         newState[index][e.target.name] = e.target.value
    //         return (
    //         [...newState]
    //         )
    //     })
    // }

    const addPlayer = () => {
        setPlayers(prevState => {
            prevState.push({
                showBack: false,
                playerName: `Player ${playerCount + 1}`,
                playerScore: [0],
                notes: "notes",
                RGB: generateRandomColor()
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

    useEffect(() => {
        setPlayerCount(players.length)
        return () => {
            setPlayerCount(players.length)
        };
    }, [players]);

  return (
    <>
    <Container sx={{maxWidth: '1400px'}}>
        <Typography 
        variant='h1' 
        sx={{display: 'flex', justifyContent: 'center'}}>
            Score Keeper
        </Typography>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <ButtonGroup variant='outlined'>
                <Button onClick={() => addPlayer()}>Add Player</Button>
                <Button onClick={() => removePlayer()}>Remove Player</Button>
            </ButtonGroup>
        </Box>
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            maxWidth: '1400px'
        }}>
            <PlayerCard players={players} setPlayers={setPlayers}/>
        </Box>
    </Container>
    </>
  );
}

export default App;
