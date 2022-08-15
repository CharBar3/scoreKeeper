import { Typography, Card, CardHeader, CardContent, TextField, Button, CardActions, ButtonGroup } from "@mui/material"
import { Box } from "@mui/system"

const PlayerCards = ({players}) => {

    const generateRandomColors = () => {
        const colorNumber = () => {
            return Math.floor(Math.random() * 255)
        }
        return {red: colorNumber(), green: colorNumber(), blue: colorNumber()}
    }

    
    const showPlayerCards = players.map(({playerName, playerScore, notes}, index) => {
        const RGB = generateRandomColors()

        return (
            <Card sx={{
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
                    <Typography variant="h5">{`Current Score: ${playerScore}`}</Typography>
                    <Box sx={{
                        // backgroundColor: 'blue',
                        marginTop: '8px',
                        marginBottom: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        minWidth: '100%'
                    }}>
                        <TextField
                        id="outlined-score-input"
                        label="Update Score"
                        type="number"
                        sx={{
                            minWidth: '75%'
                        }}
                        />
                        <ButtonGroup 
                        sx={{
                            minWidth: '25%'
                        }}
                        >
                            <Button> + </Button>
                            <Button> - </Button>
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
                        <Button>Show Scores</Button>
                        <Button>Update Player</Button>
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