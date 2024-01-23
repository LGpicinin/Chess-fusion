import { Piece } from "./Piece";
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

    move(line:number, column:number){
        if(Math.abs(this.line - line) == 2){
            if(Math.abs(this.column - column) == 1){
                return true;
            }
            else{
                return false;
            }
        }
        else if(Math.abs(this.column - column) == 2){
            if(Math.abs(this.line - line) == 1){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
}