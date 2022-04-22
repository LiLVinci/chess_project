import {Bishop, King, Queen, Knight, Rook, Pawn} from "./chesspieces.js";


export function pieces_generation() {

    var FieldTrackerList = [];
    for(var n = 0; n< 64; n++) {
        FieldTrackerList.push(0)
    }
    console.log(FieldTrackerList);


    // async: false; //<-----this is the solution


    var whiteKing1 = new King("white");
    var blackKing1 = new King("black");
    var whiteQueen1 = new Queen("white");
    var blackQueen1 = new Queen("black");
    var whiteBishop1 = new Bishop("white", 1);
    var whiteBishop2 = new Bishop("white", 2);
    var blackBishop1 = new Bishop("black", 1);
    var blackBishop2 = new Bishop("black", 2);
    var whiteKnight1 = new Knight("white", 1);
    var whiteKnight2 = new Knight("white", 2);
    var blackKnight1 = new Knight("black", 1);
    var blackKnight2 = new Knight("black", 2);
    var whiteRook1 = new Rook("white", 1);
    var whiteRook2 = new Rook("white", 2);
    var blackRook1 = new Rook("black", 1);
    var blackRook2 = new Rook("black", 2);
    for (var i = 1; i < 9; i++) {
        this["whitePawn"+[i]] = new Pawn("white", i);
    }
    for (var i = 1; i < 9; i++) {
        this["blackPawn"+[i]] = new Pawn("black", i);
    }



    pieces = [
        whiteKing1,
        blackKing1,
        whiteQueen1,
        blackQueen1,
        whiteBishop1,
        whiteBishop2,
        blackBishop1,
        blackBishop2,
        whiteKnight1,
        whiteKnight2, 
        blackKnight1,
        blackKnight2,
        whiteRook1,
        whiteRook2, 
        blackRook1,
        blackRook2,
    ]

    for (var i = 1; i < 9; i++) {
        pieces.push(window["whitePawn"+[i]])
    }
    for (var i = 1; i < 9; i++) {
        pieces.push(window["blackPawn"+[i]])
    }
    console.log(pieces);


    for (var piece of pieces) {
        $( `#${piece.starting_field}` ).append( `<img class="piece" id="${piece.color + piece.kind + piece.number}" onClick="possibleMoves('${piece.color + piece.kind + piece.number}')" src=${piece.img}>`);
        FieldTrackerList[piece.starting_field] = piece.notation;
    } 

    console.log(FieldTrackerList);

}