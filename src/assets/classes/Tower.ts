import { Piece } from "./Piece";
import { Square } from "./Square";
import whiteTower from "../images/WhiteTower.png"
import blackTower from "../images/BlackTower.png"

export class Tower extends Piece{

    columnMove: number;
    lineMove: number;
    firstMove: boolean;

    constructor(line: number, column: number, id:number){
        var img;
        var color;

        if(line==1){
            img = whiteTower;
            color = 1;
        }
        else{
            img = blackTower;
            color = 2;
        }

        super(img, line, column, color, id);

        this.columnMove = 1;
        this.lineMove = 1;
        this.firstMove = false;

    }

    move(line:number, column:number, squares:Square[]){
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
                var square = squares.filter((square) => square.column == column2 && square.line == line2);
                if(square[0].piece){
                    return 0;
                }
                column2 = column2 + this.columnMove;
                line2 = line2 + this.lineMove;
            }
            this.firstMove = true;
            return 1;
        }
        else{
            return 0;
        }
    }
}