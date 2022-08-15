import { Typography, Card, CardHeader, CardContent, TextField, Button, CardActions, ButtonGroup, Modal } from "@mui/material"
import { Box } from "@mui/system"

import { useState } from "react"

const PlayerCards = ({players, setPlayers}) => {

    const [scoreChange, setScoreChange] = useState()

    const updateScore = (e, playerIndex, addOrSubtract, scoreChange) => {
        e.preventDefault()

        const parsedScoreChange = Number.parseInt(scoreChange)
        if (parsedScoreChange !== 0 && Number.isNaN(parsedScoreChange) === false) {
            if (addOrSubtract === 'add') {
                setPlayers(prevState => {
                    let newState = prevState
                    const currentScore = newState[playerIndex].playerScore[newState[playerIndex].playerScore.length - 1]
                    newState[playerIndex].playerScore.push(currentScore + parsedScoreChange)
                    return [...newState]
                })
            } else {
                setPlayers(prevState => {
                    let newState = prevState
                    const currentScore = newState[playerIndex].playerScore[newState[playerIndex].playerScore.length - 1]
                    newState[playerIndex].playerScore.push(currentScore - parsedScoreChange)
                    return [...newState]
                })
                setScoreChange()
            }
        } else {
            alert('no change')
        }
    }

    const ScoresModal = ({playerIndex, players}) => {
        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false); 

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            // bgcolor: 'background.paper',
            bgcolor: 'White',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };

        const showPlayerScores = players[playerIndex].playerScore.map((score, index) => {
            return (
                <Typography key={index}>{score}</Typography>    
            )
        })

        return (
            <Box>
                <Button onClick={handleOpen}>Show Scores</Button>
                <Modal
                 open={open}
                 onClose={handleClose}
                 aria-labelledby="modal-ScoresModal-title"
                 aria-describedby="modal-modal-description"
                 >
                    <Box sx={style}>
                        <Typography>{showPlayerScores}</Typography>
                    </Box>
                </Modal>
            </Box>
        )
    }

    

    const UpdatePlayerModal = ({playerIndex, players}) => {

        const updateName = (e) => {
            e.preventDefault()
            setPlayers(prevState => {
                let newState = prevState
                newState[playerIndex].playerName = e.target.nameInput.value
                return [...newState]
            })    
        }

        const deletePlayer = (e) => {
            e.preventDefault()
            setPlayers(prevState => {
                let newState = prevState
                newState.splice(playerIndex, 1)
                return [...newState]
            })   
        }

        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false); 

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            // bgcolor: 'background.paper',
            bgcolor: 'White',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };

        return (
            <Box>
                <Button onClick={handleOpen}>Update Player</Button>
                <Modal
                 open={open}
                 onClose={handleClose}
                 aria-labelledby="modal-PlayerNameModal-title"
                 aria-describedby="modal-modal-description"
                 >
                    <Box sx={style} component='form' onSubmit={(e) => updateName(e) }>
                        <TextField
                        name='nameInput'
                        id="update-name-input"
                        label="Update Name"
                        type="text"
                        defaultValue={players[playerIndex].playerName}
                        />
                        <Button variant="outlined" type="submit">Update</Button>
                        <Button variant="outlined" onClick={(e) => deletePlayer(e)}>Delete Player</Button>
                    </Box>
                </Modal>
            </Box>
        )
    }

    
    const showPlayerCards = players.map(({playerName, playerScore, notes, RGB}, index) => {

        return (
            <Card key={index} sx={{
                maxWidth: '420px', 
                margin: '16px'
            }}>
                <CardHeader
                    title={playerName}
                    sx={{
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        backgroundColor: `rgb(${RGB.red}, ${RGB.green}, ${RGB.blue})`,
                        color: 'white'
                    }}
                />
                <CardContent>
                    <Typography variant="h5">{`Current Score: ${playerScore[playerScore.length - 1]}`}</Typography>
                    <Box 
                        sx={{
                            // backgroundColor: 'blue',
                            marginTop: '8px',
                            marginBottom: '16px',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexWrap: 'wrap',
                            minWidth: '100%'
                        }}>
                        <TextField
                        name='scoreChange'
                        id="outlined-score-input"
                        label="Update Score"
                        type="number"
                        sx={{
                            // minWidth: '75%'
                        }}
                        onChange={(e) => setScoreChange(e.target.value)}
                        />
                        <ButtonGroup 
                        sx={{
                            // minWidth: '25%'
                        }}
                        >
                            <Button type="submit" onClick={(e) => updateScore(e, index, 'add', scoreChange)}>+ Add</Button>
                            <Button type="submit" onClick={(e) => updateScore(e, index, 'subtract', scoreChange)}>- Subtract</Button>
                        </ButtonGroup>
                    </Box>
                    <TextField
                    id="outlined-multiline-static"
                    label="Notes"
                    multiline
                    rows={6}
                    defaultValue={notes}
                    sx={{
                        minWidth: '100%',
                    }}
                    />
                </CardContent>
                <CardActions sx={{
                    display: 'flex', 
                    justifyContent: 'center'
                }}>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <ScoresModal playerIndex={index} players={players} />
                        <UpdatePlayerModal playerIndex={index} players={players} setPlayers={setPlayers} />
                    </ButtonGroup>
                </CardActions>
            </Card>
        )
    })


    return (
        <>
            {showPlayerCards}
        </>
    )
}

export default PlayerCards