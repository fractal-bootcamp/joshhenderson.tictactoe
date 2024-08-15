import { useState } from "react";
import TicTacToe from "./Tic-Tac-Toe/tic-tac-toe";
import Snake from "./Snake/snake";
import NavBar from "./Components/navBar";


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
    <div className="flex flex-colitems-center justify-center min-h-screen w-screen">
      <NavBar onClick={handleButtonClick} />
      <div className="flex-grow w-full bg-black shadow-lg rounded-lg p-8 flex flex-col items-center justify-center" style={{ paddingTop: '60px' }}>
        {game.snake === 'selected' && <Snake />}
        {game.tictactoe === 'selected' && <TicTacToe />}
      </div>
    </div>
  )
}