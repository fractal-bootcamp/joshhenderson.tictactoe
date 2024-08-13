import React, { useState } from 'react';
import BoardSizeInput from '../Components/BoardSizeInput';
import PlayPauseButton from '../Components/PlayPause';
import GameSpeedInput from '../Components/GameSpeedInput';

interface ControlPanelProps {
    gridSize: number;
    onBoardSizeChange: (newSize: number) => void;
    paused: boolean;
    onPauseToggle: () => void;
    gameSpeed: number;
    onGameSpeedChange: (newSpeed: number) => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
    gridSize,
    onBoardSizeChange,
    paused,
    onPauseToggle,
    gameSpeed,
    onGameSpeedChange
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="absolute top-4 left-4">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-white font-bold text-black p-2 rounded shadow-md "
            >
                {isExpanded ? '▲' : '▼'} Controls
            </button>
            {isExpanded && (
                <div className="bg-white p-4 rounded shadow-md">
                    <div className="flex flex-col space-y-4">
                        <BoardSizeInput
                            value={gridSize}
                            onChange={onBoardSizeChange}
                        />
                        <PlayPauseButton paused={paused} onClick={onPauseToggle} />
                        <GameSpeedInput
                            value={gameSpeed}
                            onChange={onGameSpeedChange}
                            min={50}
                            max={150}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ControlPanel;