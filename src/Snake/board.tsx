
type Position = {
    x: number;
    y: number;
};

type Snake = Position[];

type GameBoardProps = {
    gridSize: number;
    cellSize: number;
    snake1: Snake;
    snake2: Snake;
    food: Position;
};


const GameBoard: React.FC<GameBoardProps> = ({ gridSize, cellSize, snake1, snake2, food }) => {

    const renderCell = (index: number) => {
        const x = index % gridSize;
        const y = Math.floor(index / gridSize);
        const isSnake1 = snake1.some(segment => segment.x === x && segment.y === y);
        const isSnake2 = snake2.some(segment => segment.x === x && segment.y === y);
        const isFood = food.x === x && food.y === y;

        return (
            <div
                key={index}
                className={`w-5 h-5 ${isSnake1 ? 'bg-blue-500' : isSnake2 ? 'bg-red-500' : isFood ? 'bg-green-500' : ''
                    }`}
            />
        )
    }


    return (
        <div
            className="grid bg-white border border-gray-300"
            style={{
                gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`
            }}
        >
            {Array.from({ length: gridSize * gridSize }).map((_, index) => renderCell(index))}
        </div>
    )
}

export default GameBoard