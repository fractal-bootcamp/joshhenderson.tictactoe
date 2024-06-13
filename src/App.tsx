import { useState } from 'react'
import './App.css'
import { MouseEventHandler } from 'react'
import Snake from './snake_components/snake'

type buttonValue = {
  "X": string,
  "O": string,
  "": string
}

type boardState = string[]

type winStatus = (boardState: string[]) => string

export default function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]) //initialize state of board as empty strings
  const [player, setPlayer] = useState("X")
  const [playerName1, setPlayerName1] = useState("player 1")
  const [playerName2, setPlayerName2] = useState("player 2")
  const [submit, setSubmit] = useState(false)
  const [input1, setInput1] = useState("player 1")
  const [input2, setInput2] = useState("player 2")

  console.log(board)

  const togglePlayer = () => {
    setPlayer(player === "X" ? "O" : "X")
  }

  function boardSquareHandler(index: number) {
    const nextBoard: string[] = board.map((b: string, i) => {
      if (b) { return b }

      if (i === index && board[i] === "") {
        togglePlayer()
        return player // whoever's turn it is
      }
      else return ""
    });
    // function handlePlay 
    setBoard(nextBoard);
  }


  interface BoardSquareProps {
    buttonValue?: string;
    onClick: MouseEventHandler;
  }

  function BoardSquare({ buttonValue, onClick, }: BoardSquareProps) {
    return (
      <>
        <button style={{ color: "red", width: '4em', height: '4em', border: '1px white', backgroundColor: 'white' }} onClick={onClick} value={buttonValue}>{buttonValue}</button>
      </>
    )
  }

  const allAreEqualAndValid = (position: string[]) => {
    // are the values in here and are they all equal to each other
    const validSqare = ["X", "O"]
    return validSqare.includes(position[0]) && position[0] === position[1] && position[1] === position[2]
  }

  function winStatus(board: string[]) { //if any of these conditions are met then there is a winner

    if (allAreEqualAndValid([board[0], board[1], board[2]])) {
      return "winner is " + board[0]
    }
    if (allAreEqualAndValid([board[3], board[4], board[5]])) {
      return "winner is " + board[3]
    }
    if (allAreEqualAndValid([board[6], board[7], board[8]])) {
      return "winner is " + board[6]
    }
    if (allAreEqualAndValid([board[0], board[3], board[6]])) {
      return "winner is " + board[0]
    }
    if (allAreEqualAndValid([board[1], board[4], board[7]])) {
      return "winner is " + board[1]
    }
    if (allAreEqualAndValid([board[2], board[5], board[8]])) {
      return "winner is " + board[2]
    }
    if (allAreEqualAndValid([board[0], board[4], board[8]])) {
      return "winner is " + board[0]
    }
    if (allAreEqualAndValid([board[2], board[4], board[6]])) {
      return "winner is " + board[2]
    }
    else {
      return "No one has won yet!"
    }

  }
  function handleInput() {
    setInput1(input1)
    setInput2(input2)
  }

  function handleSubmit(input1: string, input2: string) {

    setPlayerName1(input1);
    setPlayerName2(input2);
  }

  return (
    <>
      <>
        <div>{winStatus(board)}</div>
        <input type="text" value={input1} onChange={handleInput} />
        <input type="text" value={input2} onChange={handleInput} />
        <button onClick={() => handleSubmit(input1, input2)}>Submit</button>


        <div>
          <BoardSquare buttonValue={board[0]} onClick={() => { boardSquareHandler(0) }} />
          <BoardSquare buttonValue={board[1]} onClick={() => { boardSquareHandler(1) }} />
          <BoardSquare buttonValue={board[2]} onClick={() => { boardSquareHandler(2) }} />
        </div>
        <div>
          <BoardSquare buttonValue={board[3]} onClick={() => { boardSquareHandler(3) }} />
          <BoardSquare buttonValue={board[4]} onClick={() => { boardSquareHandler(4) }} />
          <BoardSquare buttonValue={board[5]} onClick={() => { boardSquareHandler(5) }} />
        </div>
        <div>
          <BoardSquare buttonValue={board[6]} onClick={() => { boardSquareHandler(6) }} />
          <BoardSquare buttonValue={board[7]} onClick={() => { boardSquareHandler(7) }} />
          <BoardSquare buttonValue={board[8]} onClick={() => { boardSquareHandler(8) }} />
        </div>
        <div>
          {playerName1} v {playerName2}
        </div>
      </>
    </>
  )
}

// //function updateBoard(boardState: string[]) {
// const newBoard = boardState.slice()

// }




