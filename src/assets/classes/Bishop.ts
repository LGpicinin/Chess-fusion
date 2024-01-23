import { Piece } from "./Piece";
import { Board } from "./Board";
import whiteBishop from "../images/WhiteBishop.png"
import blackBishop from "../images/BlackBishop.png"

export class Bishop extends Piece{

    columnMove: number;
    lineMove: number;

    constructor(color:number, line: number, column: number){
        var img;

        if(color==1)
            img = whiteBishop;
        else
        {
            img = blackBishop;
            color = 2;
        }

        super(img, line, column, color);

        this.columnMove = 1;
        this.lineMove = 1;

    }

    move(line:number, column:number, board:Board,){
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
            var column2 = this.column + this.columnMove;
            var line2 = this.line + this.lineMove;

            while(line2!=line){
                var square = board.squares.filter((square) => square.column == column2 && square.line == line2);
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