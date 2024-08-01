// Prevent default behavior for arrow keys and WASD
if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(event.key.toLowerCase())) {
    event.preventDefault();
}

switch (event.key) {
    // Snake 1 controls (Arrow keys)
    case 'ArrowUp':
        setGameState(prev => ({ ...prev, direction1: 'UP' }));
        break;
    case 'ArrowDown':
        setGameState(prev => ({ ...prev, direction1: 'DOWN' }));
        break;
    case 'ArrowLeft':
        setGameState(prev => ({ ...prev, direction1: 'LEFT' }));
        break;
    case 'ArrowRight':
        setGameState(prev => ({ ...prev, direction1: 'RIGHT' }));
        break;
    // Snake 2 controls (W, A, S, D)
    case 'w':
    case 'W':
        setGameState(prev => ({ ...prev, direction2: 'UP' }));
        break;
    case 's':
    case 'S':
        setGameState(prev => ({ ...prev, direction2: 'DOWN' }));
        break;
    case 'a':
    case 'A':
        setGameState(prev => ({ ...prev, direction2: 'LEFT' }));
        break;
    case 'd':
    case 'D':
        setGameState(prev => ({ ...prev, direction2: 'RIGHT' }));
        break;
}