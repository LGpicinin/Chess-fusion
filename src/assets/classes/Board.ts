import { Square } from './Square';
import { Horse } from './Horse';
import { Bishop } from './Bishop';
import { Pawn } from './Pawn';
import { Tower } from './Tower';
import { Queen } from './Queen';
import { King } from './King';
import { Piece } from './Piece';

export class Board{

    squares: Square[];
    pieces: Piece[];
    pieceClick: boolean;
    pieceClicked?: Piece;
    whatColorPlays: number;
    //whatColorPlays = 1 eh branco e = 2 eh preto

    constructor(){
        this.pieces = [];
        this.squares = [];
        this.pieceClick = false;
        this.whatColorPlays = 1;

        var color = 1;
        var p;
        var l = 1;
        var c = 1;

        for(l=1; l<=8; l++){
            for(c=1; c<=8; c++){
                if(l==2 || l==7){
                    this.pieces.push(new Pawn(l, l, c));
                }
                else{
                    if(c==1 || c==8)
                        this.pieces.push(new Tower(l, l, c));
                    else if(c==2 || c==7)
                        this.pieces.push(new Horse(l, l, c));
                    else if(c==3 || c==6)
                        this.pieces.push(new Bishop(l, l, c));
                    else if(c==4)
                        this.pieces.push(new Queen(l, l, c));
                    else
                        this.pieces.push(new King(l, l, c));
                }
            }
            if(l==2) { l=6;}
        }
        

        for(var i=1; i<=8; i++){
            for(var j=1; j<=8; j++){
                p = this.pieces.filter((piece) => piece.column == j && piece.line == i);
                this.squares.push(new Square(false, [0,0], color, i, j, p[0]))
                color = color*(-1);
            }
            color = color*-1;
        }
    }
}