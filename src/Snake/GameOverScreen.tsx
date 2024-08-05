import React from 'react';

interface GameOverScreenProps {
    score1: number;
    score2: number;
    onRestart: () => void;
}

const GameOverScreen: React.FC<GameOverScreenProps> = ({ score1, score2, onRestart }) => {
    const winner = score1 > score2 ? 'Player 1' : score1 < score2 ? 'Player 2' : 'It\'s a tie, no one';

    return (
        <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Game Over</h2>
            <p className="text-xl mb-2">{winner} wins!</p>
            <p className="mb-4">
                Player 1: {score1} | Player 2: {score2}
            </p>
            <button
                onClick={onRestart}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
                Play Again
            </button>
        </div>
    );
};

export default GameOverScreen;
