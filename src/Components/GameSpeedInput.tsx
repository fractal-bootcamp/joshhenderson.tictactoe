import React from 'react';

interface GameSpeedInputProps {
    value: number;
    onChange: (newSpeed: number) => void;
    min?: number;
    max?: number;
}

const GameSpeedInput: React.FC<GameSpeedInputProps> = ({ value, onChange, min = 50, max = 150 }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value));
    };

    const getSpeedLabel = (speed: number) => {
        if (speed < 75) return "Fast As Fuck";
        else if (speed < 125) return "Fast";
        return "Normal";
    };

    return (
        <div className="flex items-center">
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={handleChange}
                className="w-64 mr-4"
            />
            <span className="px-4 py-1 bg-black font-bold text-white text-lg rounded-lg">
                Speed: {value} ({getSpeedLabel(value)})
            </span>
        </div>
    );
};

export default GameSpeedInput;