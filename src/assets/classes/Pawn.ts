import { Piece } from "./Piece";
import whitePawn from "../images/WhitePawn.png"
import blackPawn from "../images/BlackPawn.png"
import { Square } from "./Square";

export class Pawn extends Piece{
    
    colorChange: number;
    promotionLine: number;

    constructor(line: number, column: number, id:number){
        var img;
        var color;

        if(line==2){
            img = whitePawn;
            color = 1;
        }
        else{
            img = blackPawn;
            color = 2;
        }

        super(img, line, column, color, id, 'pawn');

        if(color == 1){
            this.colorChange = 1;
            this.promotionLine = 8;
        }
        else{
            this.colorChange = -1;
            this.promotionLine = 1;
        }
    }

    calculateControledSquares(squares: Square[]){
        this.controledSquares = squares.filter((square) => (square.column == this.column + 1 || square.column == this.column - 1) && square.line == this.line + (1)*this.colorChange);
    }

    move(line:number, column:number,squares:Square[], pieceOrSquare: string, numberOfPlays: number){
        var alcance = 0;
        var square;


        if(pieceOrSquare == "square")
        {
            console.log('to em square');
            if(this.line == 2 || this.line == 7) { alcance = 2;}
            else { alcance = 1; }

            if((line - this.line)*this.colorChange < 0 || (line - this.line)*this.colorChange > alcance){
                console.log('linha invalida');
                return 0;
            }
            else if(this.column==column){
            
                if(alcance == 2){
                    square = squares.filter((square) => square.column==this.column && square.line==this.line + (1)*this.colorChange);
                    if(square[0].piece){
                        return 0;
                    }
                    else if(Math.abs(this.line - line) == 2){
                        this.whenAvanceTwoSquares = numberOfPlays+1;
                    }
                }
            }
            else if(Math.abs(this.promotionLine - this.line) == 3 && Math.abs(column - this.column) == 1){

                var piece;
                var houses = squares.filter((square) => square.line == this.line && square.column == column);

                if(houses[0] && houses[0].piece){
                    piece = houses[0].piece;
                    
                    if(piece.whenAvanceTwoSquares == numberOfPlays){
                        return 4;
                    }
                }
                return 0;
            }
            else{
                return 0;
            }
        }
        else{
            if(line!=this.line + (1)*this.colorChange || (column!=this.column-1 && column!=this.column+1)){
                return 0;
            }
        }
        if(line == this.promotionLine){
            return 3;
        }
        return 1;
    }
}