const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

const tictactoe = ["", "", "", "", "", "", "", "", ""]

let games = {
    ["tictactoe"]: {
        id: "tictactoe",
        board: tictactoe,
        currentPlayer: "X",
        player1: { name: "X" },
        player2: { name: "O", }
    }
}

app.get('/', (req, res) => {

    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

