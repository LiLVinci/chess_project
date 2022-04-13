const King  = {
    name: 'King',
    possibleMoves: [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
};

const Queen  = {
    name: 'Queen',
    possibleMoves: [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1]
    ]
};

const Bishop  = {
    name: 'Bishop',
    possibleMoves: [
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1]
    ]
};

const Knight  = {
    name: 'Knight',
    possibleMoves: [
        [1, 2],
        [-1, 2],
        [1, -2],
        [-1, -2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1]
    ]
};

const Rook  = {
    name: 'Rook',
    possibleMoves: [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
};

const Pawn  = {
    name: 'Pawn',
    //it's tricky, I'll think of something when I have time
};

console.log(King.possibleMoves[0]);