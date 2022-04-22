// TODO: When creating the black pawns, make sure they can only move negative y

export class King {
    constructor(color) {
        
        this.number = 1
        this.kind = "King";
        this.color = color;
        if (color == "white") {
            this.starting_field = 4
            this.img = "../pieces_images/Chess_klt60.png"
            this.notation = "K"
        } else {
            this.starting_field = 60
            this.img = "../pieces_images/Chess_kdt60.png"
            this.notation = "k"
        };
        
        this.possibleMoves = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ]
    }
};

export class Queen {
    constructor(color) {
        this.number = 1
        this.kind = "Queen";
        this.color = color;
        if (color == "white") {
            this.starting_field = 3
            this.img = "../pieces_images/Chess_qlt60.png"
            this.notation = "Q"
        } else {
            this.starting_field = 59
            this.img = "../pieces_images/Chess_qdt60.png"
            this.notation = "q"
        };
        this.possibleMoves = [
            [0, "n"],
            [0, "-n"],
            ["n", 0],
            ["-n", 0],
            ["n", "n"],
            ["-n", "n"],
            ["n", "-n"],
            ["-n", "-n"]
        ]
    }
};

export class Bishop {
    constructor(color, number) {
        this.number = number;
        this.kind = "Bishop";
        this.color = color;
        if (color == "white") {
            this.img = "../pieces_images/Chess_blt60.png"
            this.notation = "B"
            if (number == 1) {
                this.starting_field = 2
            } else {
                this.starting_field = 5
            }
        } else {
            this.starting_field = "E8"
            this.img = "../pieces_images/Chess_bdt60.png"
            this.notation = "b"
            if (number == 2) {
                this.starting_field = 58
            } else {
                this.starting_field = 61
            }
        };

        this.possibleMoves = [
            ["n", "n"],
            ["-n", "n"],
            ["n", "-n"],
            ["-n", "-n"]
        ]
    }
};

export class Knight {
    constructor(color, number) {
        this.number = number;
        this.kind = "Knight";
        this.color = color;
        if (color == "white") {
            this.notation = "N";
            this.img = "../pieces_images/Chess_nlt60.png"
            if (number == 1) {
                this.starting_field = 1
            } else {
                this.starting_field = 6
            }
        } else {
            this.starting_field = "E8"
            this.img = "../pieces_images/Chess_ndt60.png"
            this.notation = "n";
            if (number == 2) {
                this.starting_field = 57
            } else {
                this.starting_field = 62
            }
        };

        this.possibleMoves = [
            [1, 2],
            [-1, 2],
            [1, -2],
            [-1, -2],
            [2, 1],
            [-2, 1],
            [2, -1],
            [-2, -1]
        ]
    }
};

export class Rook {
    constructor(color, number) {
        this.number = number;
        this.kind = "Rook";
        this.color = color;
        if (color == "white") {
            this.img = "../pieces_images/Chess_rlt60.png"
            this.notation = "R";
            if (number == 1) {
                this.starting_field = 0
            } else {
                this.starting_field = 7
            }
        } else {
            this.starting_field = "E8"
            this.img = "../pieces_images/Chess_rdt60.png"
            this.notation = "r";
            if (number == 2) {
                this.starting_field = 56
            } else {
                this.starting_field = 63
            }
        };

        this.possibleMoves = [
            [0, "n"],
            [0, "-n"],
            ["n", 0],
            ["-n", 0],
        ]
    }
};

export class Pawn {
    constructor(color, number) {
        this.number = number;
        this.kind = "Pawn";
        this.color = color;
        if (color == "white") {
            this.notation = "P";
            this.img = "../pieces_images/Chess_plt60.png"
            this.possibleMoves = 8;
            if (number == 1) {
                this.starting_field = 8
            } else if (number == 2) {
                this.starting_field = 9
            } else if (number == 3) {
                this.starting_field = 10
            } else if (number == 4) {
                this.starting_field = 11
            } else if (number == 5) {
                this.starting_field = 12
            } else if (number == 6) {
                this.starting_field = 13
            } else if (number == 7) {
                this.starting_field = 14
            } else if (number == 8) {
                this.starting_field = 15
            }
        } else {
            this.img = "../pieces_images/Chess_pdt60.png"
            this.notation = "p";
            this.possibleMoves = -8;
            if (number == 1) {
                this.starting_field = 48
            } else if (number == 2) {
                this.starting_field = 49
            } else if (number == 3) {
                this.starting_field = 50
            } else if (number == 4) {
                this.starting_field = 51
            } else if (number == 5) {
                this.starting_field = 52
            } else if (number == 6) {
                this.starting_field = 53
            } else if (number == 7) {
                this.starting_field = 54
            } else if (number == 8) {
                this.starting_field = 55
            }
        };


    }
};


// const Pawn  = {
//     name: 'Pawn',
    
//     //it's tricky, I'll think of something when I have time
//     possibleMoves: [
//         [0, 1]
//         // V: I think we can implement a conditional that replaces the possiblemove when a figure is beatable by a pawn
//     ]
// };

// console.log(King.possibleMoves[0]);