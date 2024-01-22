import { Piece } from "./Piece";
import whiteQueen from "../images/WhiteQueen.png"
import blackQueen from "../images/BlackQueen.png"

export class Queen extends Piece{


    constructor(color:number, line: number, column: number){
        var img;

        if(color==1)
            img = whiteQueen;
        else{
            img = blackQueen;
            color = 2;
        }

        super(img, line, column, color);

    }
}