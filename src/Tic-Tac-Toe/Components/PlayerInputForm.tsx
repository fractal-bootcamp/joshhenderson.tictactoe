import React from 'react';

interface PlayerInputFormProps {
    input1: string;
    input2: string;
    handleFirstInput: (value: string) => void;
    handleSecondInput: (value: string) => void;
    handleSubmit: (input1: string, input2: string) => void;
}

export default function PlayerInputForm({
    input1,
    input2,
    handleFirstInput,
    handleSecondInput,
    handleSubmit
}: PlayerInputFormProps) {
    return (
        <>
            <div>
                <label htmlFor="player1">Player 1 (X): </label>
                <input
                    type="text"
                    id="player1"
                    value={input1}
                    onChange={(e) => handleFirstInput(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="player2">Player 2 (O): </label>
                <input
                    type="text"
                    id="player2"
                    value={input2}
                    onChange={(e) => handleSecondInput(e.target.value)}
                />
            </div>
            <button onClick={() => handleSubmit(input1, input2)}>Submit</button>
        </>
    );
}