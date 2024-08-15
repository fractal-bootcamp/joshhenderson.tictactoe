import React from 'react';

interface BoardSizeInputProps {
    value: number;
    onChange: (newSize: number) => void;
    min?: number;
    max?: number;
}

const BoardSizeInput: React.FC<BoardSizeInputProps> = ({ value, onChange, min = 10, max = 30 }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value));
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
                Board Size: {value}
            </span>
        </div>
    );
};

export default BoardSizeInput;