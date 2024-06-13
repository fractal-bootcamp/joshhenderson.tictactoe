function winStatus(boardState: string[]) { //if any of these conditions are met then there is a winner
    if (boardState[0] === "X" || "O" && boardState[1] === "X" || "O" && boardState[2] === "X" || "O") {
        return "winner"
    }
    if (boardState[3] === "X" || "O" && boardState[4] === "X" || "O" && boardState[5] === "X" || "O") {
        return "winner"
    }
    if (boardState[6] === "X" || "O" && boardState[7] === "X" || "O" && boardState[8] === "X" || "O") {
        return "winner"
    }
    if (boardState[0] === "" && boardState[1] === "" && boardState[2] === "" && boardState[3] === "" && boardState[4] === "" && boardState[5] === "" && boardState[6] === ""
        && boardState[7] === "" && boardState[8] === "" && boardState[9] === "") {
        return "Begin the Game"
    }
    else {
        return "No one has won yet!"
    }
}

function winStatus2(boardState: string[]) {
    boardState.map(b, i) {
        if (i === i + 1 === i + 2) {
            return "{i} is the winner"
        }
        if ( )
    }
}