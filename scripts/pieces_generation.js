import {Bishop, King, Queen, Knight, Rook, Pawn} from "./chesspieces.js";


export function pieces_generation() {

    let whiteKing = new King("white");
    let blackKing = new King("black");
    let whiteQueen = new Queen("white");
    let blackQueen = new Queen("black");
    let whiteBishop1 = new Bishop("white", 1);
    let whiteBishop2 = new Bishop("white", 2);
    let blackBishop1 = new Bishop("black", 1);
    let blackBishop2 = new Bishop("black", 2);
    let whiteKnight1 = new Knight("white", 1);
    let whiteKnight2 = new Knight("white", 2);
    let blackKnight1 = new Knight("black", 1);
    let blackKnight2 = new Knight("black", 2);
    let whiteRook1 = new Rook("white", 1);
    let whiteRook2 = new Rook("white", 2);
    let blackRook1 = new Rook("black", 1);
    let blackRook2 = new Rook("black", 2);
    for (var i = 1; i < 9; i++) {
        this["whitePawn"+[i]] = new Pawn("white", i);
    }
    for (var i = 1; i < 9; i++) {
        this["blackPawn"+[i]] = new Pawn("black", i);
    }



    let pieces = [
        whiteKing,
        blackKing,
        whiteQueen,
        blackQueen,
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
        $( `.field${piece.starting_field}` ).append( `<img src=${piece.img}>`);
    } 

    
}