import { useEffect, useState } from "react";

type Position = {
    x: number;
    y: number;
};

type Snake = Position[];

type GameState = 'RUNNING' | 'PAUSED' | 'GAME_OVER'; // Pause will be space bar 

const Game = () => {
    const [snake, setSnake] = useState<Snake>([{ x: 10, y: 10 }]); //array to add another snake later
    const [food, setFood] = useState<Position>({ x: 5, y: 5 });
    const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('UP');
    const [gameState, setGameState] = useState<GameState>('PAUSED')


    const moveSnake = () => {

    };

    const checkFoodConsumption = () => {

    };

    const checkCollision = () => {

    };

    const handleKeyPress = (e: KeyboardEvent) => {

    };




}



export default Game;