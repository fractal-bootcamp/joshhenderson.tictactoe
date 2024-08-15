type NavBarProps = {
    onClick: (game: string) => void;
}

export default function NavBar({ onClick }: NavBarProps) {
    return (
        <nav className="navbar">
            <button onClick={() => onClick('snake')}>Snake</button>
            <button onClick={() => onClick('tictactoe')}>Tic-Tac-Toe</button>
        </nav>
    )
}