import { useCallback, useState } from "react";
import Board from "./board"

type Position = {
    x: number;
    y: number;
}

type Snake = Position[] // an array of position objects make up the snake 

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

type GameState = {
    snake1: Snake;
    snake2: Snake;
    food: Position;
    direction1: Direction;
    direction2: Direction;
    score1: number;
    score2: number;
}

type GameSettings = {
    gridSize: number;
    cellSize: number;
};


export default function Snake() {

    const [gameSettings, setgameSettings] = useState<GameSettings>({ //initializing the gameboard
        gridSize: 20,
        cellSize: 20,
    });

    //function to initialize the snake's position in the middle of the based on the board size that the user inputs and a given offset  
    const initializeSnake = () => {

    }

    //Movement Function
    const movementFunction = useCallback((snake: Snake, direction: Direction): Snake => {
        const head = snake[0]; //head of the snake is the first x,y value (position object) in the array and the movement comes from changing the head every X miliseconds or on user input 
        const newHead = { ...head }; //new head starts with the old head (hence the spread operation) and is then manipulated based on current direction (the following switch case)

        switch (direction) {
            case 'UP': // if going up then we 
                newHead.y = (newHead.y - 1)
        }
        return
    }, [gameSettings.gridSize]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

        </div>
    )
}
