import { useState } from 'react'
import './App.css'
import { MouseEventHandler } from 'react'

type buttonValue = {
  "X": string,
  "O": string,
  "": string
}

type boardState = string[]

type winStatus = (boardState: string[]) => string

function App() {
  const [boardState, setBoardState] = useState(["", "", "", "", "", "", "", "", ""]) //initialize state of board as empty strings
  const [player, setPlayer] = useState("X")
  const [playerName1, setPlayerName1] = useState("")
  const [playerName2, setPlayerName2] = useState("")
  const [conditional, setConditional] = useState(true)

  console.log(boardState)

  const togglePlayer = () => {
    setPlayer(player === "X" ? "O" : "X")
  }

  function boardSquareHandler(index: number) {
    const nextBoard: string[] = boardState.map((b: string, i) => {
      if (b) { return b }

      if (i === index && boardState[i] === "") {
        togglePlayer()
        return player // whoever's turn it is
      }
      else return ""
    });
    // function handlePlay 
    setBoardState(nextBoard);
  }


  interface BoardSquareProps {
    buttonValue?: string;
    onClick: MouseEventHandler<HTMLDivElement>;
  }

  function BoardSquare({ buttonValue, onClick, }: BoardSquareProps) {
    console.log('buttonValue is:', buttonValue)

    return (
      <>
        <button style={{ color: "red", width: '4em', height: '4em', border: '1px white', backgroundColor: 'white' }} onClick={onClick} value={buttonValue}>{buttonValue}</button>
      </>
    )
  }


  const allAreEqualAndValid = (characters: string[]) => {
    // are the values in here and are they all equal to each other
    const validPlayers = ["X", "O"]
    return validPlayers.includes(characters[0]) && characters[0] === characters[1] && characters[1] === characters[2]
  }

  function winStatus(boardState: string[]) { //if any of these conditions are met then there is a winner

    if (allAreEqualAndValid([boardState[0], boardState[1], boardState[2]])) {
      return "winner is " + boardState[0]
    }
    if (allAreEqualAndValid([boardState[3], boardState[4], boardState[5]])) {
      return "winner is " + boardState[3]
    }
    if (allAreEqualAndValid([boardState[6], boardState[7], boardState[8]])) {
      return "winner is " + boardState[6]
    }
    if (allAreEqualAndValid([boardState[0], boardState[3], boardState[6]])) {
      return "winner is " + boardState[0]
    }
    if (allAreEqualAndValid([boardState[1], boardState[4], boardState[7]])) {
      return "winner is " + boardState[1]
    }
    if (allAreEqualAndValid([boardState[2], boardState[5], boardState[8]])) {
      return "winner is " + boardState[2]
    }
    if (allAreEqualAndValid([boardState[0], boardState[4], boardState[8]])) {
      return "winner is " + boardState[0]
    }
    if (allAreEqualAndValid([boardState[2], boardState[4], boardState[6]])) {
      return "winner is " + boardState[2]
    }
    else {
      return "No one has won yet!"
    }

  }

  const day = new Date().getDay()
  console.log("It is this day: ", day)





  return (
    <>
      <div>{winStatus(boardState)}</div>
      {conditional ?
        <>
          <input value={playerName1} onChange={e => setPlayerName1(e.target.value)} />
          <input value={playerName2} onChange={e => setPlayerName2(e.target.value)} />
          <button onClick={() => {
            setConditional(false)
          }}>Get Started</button>

          <div>
            <BoardSquare buttonValue={boardState[0]} onClick={() => { boardSquareHandler(0) }} />
            <BoardSquare buttonValue={boardState[1]} onClick={() => { boardSquareHandler(1) }} />
            <BoardSquare buttonValue={boardState[2]} onClick={() => { boardSquareHandler(2) }} />
          </div>
          <div>
            <BoardSquare buttonValue={boardState[3]} onClick={() => { boardSquareHandler(3) }} />
            <BoardSquare buttonValue={boardState[4]} onClick={() => { boardSquareHandler(4) }} />
            <BoardSquare buttonValue={boardState[5]} onClick={() => { boardSquareHandler(5) }} />
          </div>
          <div>
            <BoardSquare buttonValue={boardState[6]} onClick={() => { boardSquareHandler(6) }} />
            <BoardSquare buttonValue={boardState[7]} onClick={() => { boardSquareHandler(7) }} />
            <BoardSquare buttonValue={boardState[8]} onClick={() => { boardSquareHandler(8) }} />
          </div>
        </> : <div>insert snake here</div>
      }
      <div>
        {playerName1} v {playerName2}
      </div>

    </>
  )
  //change for pull request

}

export default App
