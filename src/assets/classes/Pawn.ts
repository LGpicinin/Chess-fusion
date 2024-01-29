import { Piece } from "./Piece";
import whitePawn from "../images/WhitePawn.png"
import blackPawn from "../images/BlackPawn.png"
import { Square } from "./Square";

export class Pawn extends Piece{

    colorChange: number;

    constructor(color:number, line: number, column: number){
        var img;

        if(color==2){
            img = whitePawn;
            color = 1;
        }
        else{
            img = blackPawn;
            color = 2;
        }

        super(img, line, column, color);

        if(color == 1){
            this.colorChange = 1;
        }
        else{
            this.colorChange = -1
        }
    }

    calculateControledSquares(squares: Square[]){
        this.controledSquares = squares.filter((square) => (square.column == this.column + 1 || square.column == this.column - 1) && square.line == this.line + (1)*this.colorChange);
    }

    move(line:number, column:number,squares:Square[], pieceOrSquare: string){
        var alcance = 0;
        var square;

        console.log("estou em pawn");

        if(pieceOrSquare == "square")
        {
            console.log("clicou em um square");
            if(this.line == 2 || this.line == 7) { alcance = 2;}
            else { alcance = 1; }

            if(this.column!=column || (line - this.line)*this.colorChange < 0 || (line - this.line)*this.colorChange > alcance){
                console.log("column ou line errada");
                return false;
            }

        
            if(alcance == 2){
                square = squares.filter((square) => square.column==this.column && square.line==this.line + (1)*this.colorChange);
                if(square[0].piece){
                    console.log("piece no caminho");
                    return false;
                }
            }
        }
        else{
            console.log("clicou em um piece");
            if(line!=this.line + (1)*this.colorChange || (column!=this.column-1 && column!=this.column+1)){
                console.log("tomada line errada");
                return false;
            }
        }
        return true;
    }
}