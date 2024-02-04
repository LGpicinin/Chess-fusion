import { Piece } from "./Piece";
import { Square } from "./Square";
import whiteHorse from "../images/WhiteHorse.png"
import blackHorse from "../images/BlackHorse.png"

export class Horse extends Piece{

    constructor(color:number, line: number, column: number){
        var img;

        if(color==1)
            img = whiteHorse;
        else{
            color = 2;
            img = blackHorse;
        }

        super(img, line, column, color);
    }

    calculateControledSquares(squares: Square[]){
        this.controledSquares = squares.filter((square) => (Math.abs(this.line - square.line) == 2 && Math.abs(this.column - square.column) == 1) || (Math.abs(this.line - square.line) == 1 && Math.abs(this.column - square.column) == 2));
    }

    move(line:number, column:number){
        if(Math.abs(this.line - line) == 2){
            if(Math.abs(this.column - column) == 1){
                return 1;
            }
            else{
                return 0;
            }
        }
        else if(Math.abs(this.column - column) == 2){
            if(Math.abs(this.line - line) == 1){
                return 1;
            }
            else{
                return 0;
            }
        }
        else{
            return 0;
        }
    }
}