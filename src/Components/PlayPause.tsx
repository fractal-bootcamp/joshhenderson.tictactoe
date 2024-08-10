import React from 'react';

interface PlayPauseButtonProps {
    paused: boolean;
    onClick: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({ paused, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-black text-white font-bold py-1 px-3 rounded-lg text-lg border-2 border-white"
        >
            {paused ? 'Play' : 'Pause'}
        </button>
    );
};

export default PlayPauseButton;
