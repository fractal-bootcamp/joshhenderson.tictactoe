import { useState } from "react";
import TicTacToe from "./Tic-Tac-Toe/tic-tac-toe";
import Snake from "./Snake/snake";


export default function App() {
  const [game, setGame] = useState({
    snake: 'selected',
    tictactoe: ''
  })

  function handleButtonClick(gameName: string) {
    setGame({
      snake: gameName === 'snake' ? 'selected' : '',
      tictactoe: gameName === 'tictactoe' ? 'selected' : ''
    });
  }

  return (
    <>
      <button onClick={() => { handleButtonClick('snake') }}>Snake</button>
      <button onClick={() => { handleButtonClick('tictactoe') }}>Tic-Tac-Toe</button>
      {game.snake === 'selected' && <Snake />}
      {game.tictactoe === 'selected' && <TicTacToe />}
    </>
  )
}