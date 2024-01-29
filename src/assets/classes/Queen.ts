import { Piece } from "./Piece";
import whiteQueen from "../images/WhiteQueen.png"
import blackQueen from "../images/BlackQueen.png"
import { Square } from "./Square";

export class Queen extends Piece{

    columnMove: number;
    lineMove: number;


    constructor(color:number, line: number, column: number){
        var img;

        if(color==1)
            img = whiteQueen;
        else{
            img = blackQueen;
            color = 2;
        }

        super(img, line, column, color);

        this.columnMove = 1;
        this.lineMove = 1;
        
    }

    move(line:number, column:number, squares:Square[]){
        if(Math.abs(this.line - line) == Math.abs(this.column - column) || (this.column == column || this.line == line)){
            if(Math.abs(this.line - line) == Math.abs(this.column - column)){
                if(this.line > line){
                    this.lineMove = -1;
                }
                else{
                    this.lineMove = 1;
                }
                if(this.column > column){
                    this.columnMove = -1;
                }
                else{
                    this.columnMove = 1
                }
            }
            else{
                if(this.column!=column){
                    if(this.column > column){
                        this.columnMove = -1;
                    }
                    else{
                        this.columnMove = 1;
                    }
                    this.lineMove = 0;
                }
                else{
                    if(this.line > line){
                        this.lineMove = -1;
                    }
                    else{
                        this.lineMove = 1;
                    }
                    this.columnMove = 0;
                }
            }
            var column2 = this.column + this.columnMove;
            var line2 = this.line + this.lineMove;

            while(line2!=line || column2!=column){
                var square = squares.filter((square) => square.column == column2 && square.line == line2);
                if(square[0].piece){
                    return false;
                }
                column2 = column2 + this.columnMove;
                line2 = line2 + this.lineMove;
            }
            return true;
        }
        else{
            return false;
        }
    }
}