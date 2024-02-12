import { Piece } from "./Piece";
import { Square } from "./Square";
import whiteBishop from "../images/WhiteBishop.png"
import blackBishop from "../images/BlackBishop.png"

export class Bishop extends Piece{

    columnMove: number;
    lineMove: number;

    constructor(line: number, column: number, id:number){
        var img;
        var color;

        if(line==1){
            img = whiteBishop;
            color = 1;
        }
        else
        {
            img = blackBishop;
            color = 2;
        }

        super(img, line, column, color, id, 'bishop');

        this.columnMove = 1;
        this.lineMove = 1;

    }

    move(line:number, column:number, squares:Square[]){
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
                var square = squares.filter((square) => square.column == column2 && square.line == line2);
                if(square[0].piece){
                    return 0;
                }
                column2 = column2 + this.columnMove;
                line2 = line2 + this.lineMove;
            }
            return 1;
        }
        else{
            return 0;
        }
    }
}