import { Piece } from "./Piece";
import { Board } from "./Board";
import whiteTower from "../images/WhiteTower.png"
import blackTower from "../images/BlackTower.png"

export class Tower extends Piece{

    columnMove: number;
    lineMove: number;

    constructor(color:number, line: number, column: number){
        var img;

        if(color==1){
            img = whiteTower;
        }
        else{
            img = blackTower;
            color = 2;
        }

        super(img, line, column, color);

        this.columnMove = 1;
        this.lineMove = 1;

    }

    move(line:number, column:number, board:Board){
        if(this.column == column || this.line == line){
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

            var line2 = this.line + this.lineMove;
            var column2 = this.column + this.columnMove;

            while(line2!=line || column2!=column){
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