import { useEffect, useState } from "react";
import GameBoard from "./board";
import GameOverScreen from "./GameOverScreen";

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

//CHECK COLLISION 
function checkCollision(snake: Snake): boolean {
    const head = snake[0];
    return snake.slice(1).some(bodyPart => bodyPart.x === head.x && bodyPart.y === head.y);
}

//GENERATE NEW FOOD - This is probably shit code and an unneccessary while expression 
function generateNewFood(snake1: Snake, snake2: Snake, gridSize: number): Position {
    let newFood: Position;
    do {
        newFood = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };
    } while (
        snake1.some(bodyPart => bodyPart.x === newFood.x && bodyPart.y === newFood.y) ||
        snake2.some(bodyPart => bodyPart.x === newFood.x && bodyPart.y === newFood.y)
    );
    return newFood;
}

//CHECK SNAKE COLLISION
function checkSnakeCollision(snake: Snake, otherSnake: Snake): boolean {
    const head = snake[0];
    return otherSnake.some(bodyPart => bodyPart.x === head.x && bodyPart.y === head.y)
}

//MOVEMENT FUNCTION
const movementFunction = (snake: Snake, direction: Direction, gridSize: number): Snake => {
    const head = snake[0]; //head of the snake is the first x,y value (position object) in the array and the movement comes from changing the head every X miliseconds or on user input 
    const newHead = { ...head }; //new head starts with the old head (hence the spread operation) and is then manipulated based on current direction (the following switch case)

    // we only care about the relevant axis of the direction fo the head, 
    //when the snake grows in size we will check if the head position values conflict with existing values in the snake array of positions
    switch (direction) {
        case 'UP':
            newHead.y = (newHead.y - 1 + gridSize) % gridSize
            break;
        case 'DOWN':
            newHead.y = (newHead.y + 1) % gridSize
            break;
        case 'LEFT':
            newHead.x = (newHead.x - 1 + gridSize) % gridSize
            break;
        case 'RIGHT':
            newHead.x = (newHead.x + 1) % gridSize
            break;
    }

    return [newHead, ...snake.slice(0, -1)]; //adds to the new head value to a copy of the prev snake position array but with the last index value sliced off
}

const getNewGameState = (prev: GameState, gridSize: number): GameState => {
    const newSnake1 = movementFunction(prev.snake1, prev.direction1, gridSize);
    const newSnake2 = movementFunction(prev.snake2, prev.direction2, gridSize);

    const biggerSnake1 = [...newSnake1, prev.snake1[prev.snake1.length - 1]];
    const biggerSnake2 = [...newSnake2, prev.snake2[prev.snake2.length - 1]];

    const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    array[4 - 1]
    array[3]

    const newFood = generateNewFood(newSnake1, newSnake2, gridSize);

    console.log(prev.snake1, prev.snake2, prev.food)

    switch (true) {
        // snake 1 ate food
        case newSnake1[0].x === prev.food?.x && newSnake1[0].y === prev.food?.y:
            const score1 = prev.score1 + 1;


            return {
                ...prev,
                snake1: biggerSnake1,
                snake2: newSnake2,
                food: newFood,
                score1: score1,
                score2: prev.score2
            }

        // snake 2 ate food
        case newSnake2[0].x === prev.food?.x && newSnake2[0].y === prev.food?.y:
            const score2 = prev.score2 + 1;

            return {
                ...prev,
                snake1: newSnake1,
                snake2: biggerSnake2,
                food: newFood,
                score1: prev.score1,
                score2: score2

            }

        // nobody ate food, just move
        default:
            return {
                ...prev,
                snake1: newSnake1,
                snake2: newSnake2
            }

    }
}





export default function Snake() {

    const [gameSettings, setGameSettings] = useState<GameSettings>({ //initializing the gameboard
        gridSize: 20,
        cellSize: 20,
    });

    const renderSnake = (offsetX: number, offsetY: number): Snake => {
        //takes a single axis of the board and divides by 2 to set the snake in the middle  
        //the offset is different for play 1 vs player 2 so the snakes dont start in the same position
        const centerX = Math.floor(gameSettings.gridSize / 2) + offsetX;
        const centerY = Math.floor(gameSettings.gridSize / 2) + offsetY;
        return [{ x: centerX, y: centerY }]
    }

    //initialize the game state with each snake traveling in opposite direction and slightly offset from center of board with each player having score 0
    const [gameState, setGameState] = useState<GameState>({
        snake1: renderSnake(-2, 0),
        snake2: renderSnake(2, 0),
        food: { x: 1, y: 2 },
        direction1: 'LEFT',
        direction2: 'RIGHT',
        score1: 0,
        score2: 0,
    })

    const [paused, setPaused] = useState(true)
    const [isGameOver, setIsGameOver] = useState(false);

    //USE EFFECT

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            console.log('Key pressed:', event.key);  // Add this line

            const directionMappings = {
                arrowup: 'UP',
                arrowdown: 'DOWN',
                arrowleft: 'LEFT',
                arrowright: 'RIGHT',
                w: 'UP',
                s: 'DOWN',
                a: 'LEFT',
                d: 'RIGHT',
            };

            const key = event.key.toLocaleLowerCase();

            if (key in directionMappings) {
                event.preventDefault();
                const direction = directionMappings[key as keyof typeof directionMappings]
                const isSnake1 = key.startsWith('arrow');
                setGameState(prev => ({
                    ...prev,
                    [isSnake1 ? 'direction1' : 'direction2']: direction
                }))
            }


        };

        // Prevent scrolling
        const preventDefault = (e: Event) => e.preventDefault();

        window.addEventListener('keydown', handleKeyPress);
        // Prevent scrolling on the window
        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
        };
    }, []);

    useEffect(() => {
        if (!paused) {
            const gameloop = setInterval(() => {
                setGameState(prev => {
                    const { snake1, snake2, food, score1, score2 } = getNewGameState(prev, gameSettings.gridSize);

                    if (checkCollision(snake1) || checkSnakeCollision(snake1, snake2) ||
                        checkCollision(snake2) || checkSnakeCollision(snake2, snake1)) {
                        clearInterval(gameloop);
                        setIsGameOver(true);
                        setPaused(true);
                        return prev;
                    }

                    return {
                        ...prev,
                        snake1,
                        snake2,
                        food,
                        score1,
                        score2
                    };
                });
            }, 500);

            return () => clearInterval(gameloop);
        }
    }, [paused, gameSettings.gridSize]);

    const handlePause = () => {
        setPaused(!paused);

        console.log(gameState)
    }

    const handleBoardSizeChange = (newSize: number) => {
        setGameSettings((prev) => ({ ...prev, gridSize: newSize })); //settings is only board size at the moment 

        setGameState({ //set gameState to rest the game 
            snake1: renderSnake(-2, 0),
            snake2: renderSnake(2, 0),
            food: { x: 1, y: 2 },
            direction1: 'RIGHT',
            direction2: 'LEFT',
            score1: 0,
            score2: 0,
        })
    }

    const handleRestart = () => {
        setGameState({
            snake1: renderSnake(-2, 0),
            snake2: renderSnake(2, 0),
            food: { x: 1, y: 2 },
            direction1: 'LEFT',
            direction2: 'RIGHT',
            score1: 0,
            score2: 0,
        });
        setIsGameOver(false);
        setPaused(false);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-500 overflow-hidden">
            {!isGameOver ? (
                <>
                    <div>
                        <label className='mr-2'>Board Size</label>
                        <input
                            id='boardSize'
                            type="number"
                            min={10}
                            max={100}
                            value={gameSettings.gridSize}
                            onChange={(e) => handleBoardSizeChange(Number(e.target.value))}
                            className="border border-gray-300 px-2 py-1 rounded"
                        />
                        <button onClick={handlePause}>{paused ? 'Play' : 'Pause'}</button>
                    </div>
                    <GameBoard
                        gridSize={gameSettings.gridSize}
                        cellSize={gameSettings.cellSize}
                        snake1={gameState.snake1}
                        snake2={gameState.snake2}
                        food={gameState.food || { x: 0, y: 0 }}
                    />
                </>
            ) : (
                <GameOverScreen
                    score1={gameState.score1}
                    score2={gameState.score2}
                    onRestart={handleRestart}
                />
            )}
        </div>
    )
}