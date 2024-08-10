import BoardSizeInput from '../Components/BoardSizeInput';
import PlayPauseButton from '../Components/PlayPause';

interface ControlPanelProps {
    gridSize: number;
    onBoardSizeChange: (newSize: number) => void;
    paused: boolean;
    onPauseToggle: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
    gridSize,
    onBoardSizeChange,
    paused,
    onPauseToggle
}) => {
    return (
        <div className="absolute top-4 left-4 bg-white p-4 rounded shadow-md">
            <div className="flex flex-col space-y-4">
                <BoardSizeInput
                    value={gridSize}
                    onChange={onBoardSizeChange}
                />
                <PlayPauseButton paused={paused} onClick={onPauseToggle} />
                {/* Add more controls here as needed */}
            </div>
        </div>
    );
};

export default ControlPanel;
