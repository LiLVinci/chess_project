// TODO: When creating the black pawns, make sure they can only move negative y

export class King {
    constructor(color) {
        this.kind = "King";
        this.color = color;
        if (color == "white") {
            this.starting_field = "E1"
            this.img = "../pieces_images/Chess_klt60.png"
        } else {
            this.starting_field = "D8"
            this.img = "../pieces_images/Chess_kdt60.png"
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
        this.kind = "Queen";
        this.color = color;
        if (color == "white") {
            this.starting_field = "D1"
            this.img = "../pieces_images/Chess_qlt60.png"
        } else {
            this.starting_field = "E8"
            this.img = "../pieces_images/Chess_qdt60.png"
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
            if (number == 1) {
                this.starting_field = "C1"
            } else {
                this.starting_field = "F1"
            }
        } else {
            this.starting_field = "E8"
            this.img = "../pieces_images/Chess_bdt60.png"
            if (number == 2) {
                this.starting_field = "C8"
            } else {
                this.starting_field = "F8"
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
            this.img = "../pieces_images/Chess_nlt60.png"
            if (number == 1) {
                this.starting_field = "B1"
            } else {
                this.starting_field = "G1"
            }
        } else {
            this.starting_field = "E8"
            this.img = "../pieces_images/Chess_ndt60.png"
            if (number == 2) {
                this.starting_field = "B8"
            } else {
                this.starting_field = "G8"
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
            if (number == 1) {
                this.starting_field = "A1"
            } else {
                this.starting_field = "H1"
            }
        } else {
            this.starting_field = "E8"
            this.img = "../pieces_images/Chess_rdt60.png"
            if (number == 2) {
                this.starting_field = "A8"
            } else {
                this.starting_field = "H8"
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
            this.img = "../pieces_images/Chess_plt60.png"
            if (number == 1) {
                this.starting_field = "A2"
            } else if (number == 2) {
                this.starting_field = "B2"
            } else if (number == 3) {
                this.starting_field = "C2"
            } else if (number == 4) {
                this.starting_field = "D2"
            } else if (number == 5) {
                this.starting_field = "E2"
            } else if (number == 6) {
                this.starting_field = "F2"
            } else if (number == 7) {
                this.starting_field = "G2"
            } else if (number == 8) {
                this.starting_field = "H2"
            }
        } else {
            this.img = "../pieces_images/Chess_pdt60.png"
            if (number == 1) {
                this.starting_field = "A7"
            } else if (number == 2) {
                this.starting_field = "B7"
            } else if (number == 3) {
                this.starting_field = "C7"
            } else if (number == 4) {
                this.starting_field = "D7"
            } else if (number == 5) {
                this.starting_field = "E7"
            } else if (number == 6) {
                this.starting_field = "F7"
            } else if (number == 7) {
                this.starting_field = "G7"
            } else if (number == 8) {
                this.starting_field = "H7"
            }
        };

        this.possibleMoves = [
            [0, 1],
        ]
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