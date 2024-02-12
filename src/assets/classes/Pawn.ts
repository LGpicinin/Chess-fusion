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

    move(line:number, column:number,squares:Square[], pieceOrSquare: string){
        var alcance = 0;
        var square;


        if(pieceOrSquare == "square")
        {
            if(this.line == 2 || this.line == 7) { alcance = 2;}
            else { alcance = 1; }

            if(this.column!=column || (line - this.line)*this.colorChange < 0 || (line - this.line)*this.colorChange > alcance){
                return 0;
            }

        
            if(alcance == 2){
                square = squares.filter((square) => square.column==this.column && square.line==this.line + (1)*this.colorChange);
                if(square[0].piece){
                    return 0;
                }
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