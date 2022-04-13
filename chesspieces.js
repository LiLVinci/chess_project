// TODO: When creating the black pawns, make sure they can only move negative y

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
        [0, n],
        [0, -n],
        [n, 0],
        [-n, 0],
        [n, n],
        [-n, n],
        [n, -n],
        [-n, -n]
    ]
};

const Bishop  = {
    name: 'Bishop',
    possibleMoves: [
        [n, n],
        [-n, n],
        [n, -n],
        [-n, -n]
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
        [0, n],
        [0, -n],
        [n, 0],
        [-n, 0]
    ]
};

const Pawn  = {
    name: 'Pawn',
    
    //it's tricky, I'll think of something when I have time
    possibleMoves: [
        [0, 1]
        // V: I think we can implement a conditional that replaces the possiblemove when a figure is beatable by a pawn
    ]
};

console.log(King.possibleMoves[0]);