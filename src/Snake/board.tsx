export default function Board(board: number[],) {

    const boardMap = board.map((index: number) => { return <div></div> })

    return
    <div>{boardMap}</div>
}
