import { MouseEventHandler } from "react"


interface BoardSquareProps {
    buttonValue?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function BoardSquare({ buttonValue, onClick, }: BoardSquareProps) {

    return (
        <>
            <button onClick={onClick}>{buttonValue}</button>
        </>
    )
}

