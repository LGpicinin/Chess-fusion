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
    blackKing: King;
    whiteKing: King;
    promotion: boolean;
    numberOfPlays: number;
    //whatColorPlays = 1 eh branco e whatColorPlays = 2 eh preto

    constructor(){

        this.pieces = [];
        this.squares = [];
        this.pieceClick = false;
        this.whatColorPlays = 1;
        this.whiteKing = new King(1, 5, 1);
        this.blackKing = new King(8, 5, 2);
        this.pieces.push(this.blackKing);
        this.pieces.push(this.whiteKing);
        this.promotion = false;
        this.numberOfPlays = 0;

        var color = 1;
        var piece;
        var l = 1;
        var c = 1;
        var id = 3;
        var i = 0;
        var j = 0;


        for(l=1; l<=8; l++){ //inicializa peças do tabuleiro
            for(c=1; c<=8; c++){
                if(l==2 || l==7){
                    this.pieces.push(new Pawn(l, c, id));
                }
                else{
                    if(c==2 || c==7)
                        this.pieces.push(new Horse(l, c, id));
                    else if(c==3 || c==6)
                        this.pieces.push(new Bishop(l, c, id));
                    else if(c==1 || c==8){

                        var tower = new Tower(l, c, id);

                        if(l == 1){
                            if(c == 1){
                                this.whiteKing.setTowerBigRook(tower);
                            }
                            else{
                                this.whiteKing.setTowerSmallRook(tower);
                            }
                        }
                        else{
                            if(c == 1){
                                this.blackKing.setTowerBigRook(tower);
                            }
                            else{
                                this.blackKing.setTowerSmallRook(tower);
                            }
                        }
    
                        this.pieces.push(tower);
                    }
                    else if(c==4)
                        this.pieces.push(new Queen(l, c, id));
                }
                id++;
            }
            if(l==2) { l=6;}
        }


        for(i=1; i<=8; i++){ //inicializa casas do tabuleiro
            for(j=1; j<=8; j++){
                piece = this.pieces.filter((piece) => piece.column == j && piece.line == i);
                this.squares.push(new Square(false, color, i, j, piece[0]))
                color = color*(-1);
            }
            color = color*-1;
        }
    }
}