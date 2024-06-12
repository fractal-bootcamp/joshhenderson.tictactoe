import { useState } from 'react'
import './App.css'
import { MouseEventHandler } from 'react'

function App() {

  type buttonValue = {
    "X": string,
    "O": string,
    "": string
  }

  type boardState = string[]

  type winStatus = (boardState: string[]) => string

  const [boardState, setBoardState] = useState(["", "", "", "", "", "", "", "", ""]) //initialize state of board as empty strings
  const [buttonValue, setButtonValue] = useState("")

  console.log(boardState)

  function boardSquareHandler(index: number) {
    const nextBoard: string[] = boardState.map((b: string, i) => {
      if (i === index && boardState[i] === "O") {
        return (b = "X")
      }
      if (i === index && boardState[i] === "X")
        return (b = "O")
      if (i === index && boardState[i] === "")
        return (b = "X")
      else return ""
    });

    setBoardState(nextBoard);
  }

  function updateButtonValue(index: number, buttonValue: string, boardState: string[]) {
    setButtonValue(buttonValue = boardState[index])
  }
}

interface BoardSquareProps {
  value: string;
  buttonValue?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

function BoardSquare({ buttonValue, onClick, }: BoardSquareProps) {

  return (
    <>
      <button onClick={onClick}>{buttonValue}</button>
    </>
  )
}

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

return (
  <>
    <div>{winStatus(boardState)}</div>
    <div>
      <BoardSquare value={buttonValue} onClick={() => { boardSquareHandler(0); updateButtonValue(0) }} />
      <BoardSquare value={buttonValue} onClick={() => { boardSquareHandler(1) }} />
      <BoardSquare value={buttonValue} onClick={() => { boardSquareHandler(2) }} />
    </div>
    <div>
      <BoardSquare value={buttonValue} onClick={() => { boardSquareHandler(3) }} />
      <BoardSquare value={buttonValue} onClick={() => { boardSquareHandler(4) }} />
      <BoardSquare value={buttonValue} onClick={() => { boardSquareHandler(5) }} />
    </div>
    <div>
      <BoardSquare value={buttonValue} onClick={() => { boardSquareHandler(6) }} />
      <BoardSquare value={buttonValue} onClick={() => { boardSquareHandler(7) }} />
      <BoardSquare value={buttonValue} onClick={() => { boardSquareHandler(8) }} />
    </div>

  </>
)
}

export default App
