import { useState } from "react";
import TicTacToe from "./Tic-Tac-Toe/tic-tac-toe";
import Snake from "./Snake/snake";
import "./App.css"; // Make sure to create this CSS file

export default function App() {
  const [game, setGame] = useState({
    snake: 'selected',
    tictactoe: ''
  })

  function handleNavClick(gameName: string) {
    setGame({
      snake: gameName === 'snake' ? 'selected' : '',
      tictactoe: gameName === 'tictactoe' ? 'selected' : ''
    });
  }

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-brand">Game Center</div>
        <ul className="navbar-nav">
          <li className={`nav-item ${game.snake === 'selected' ? 'active' : ''}`}>
            <a href="#" onClick={() => handleNavClick('snake')}>Snake</a>
          </li>
          <li className={`nav-item ${game.tictactoe === 'selected' ? 'active' : ''}`}>
            <a href="#" onClick={() => handleNavClick('tictactoe')}>Tic-Tac-Toe</a>
          </li>
        </ul>
      </nav>
      <main className="content">
        {game.snake === 'selected' && <Snake />}
        {game.tictactoe === 'selected' && <TicTacToe />}
      </main>
    </div>
  )
}