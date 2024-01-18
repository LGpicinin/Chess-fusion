import { Piece } from "./Piece";
import whiteQueen from "../images/WhiteQueen.png"
import blackQueen from "../images/BlackQueen.png"

export class Queen extends Piece{

    color: number;

    constructor(color:number, line: number, column: number){
        var img;

        if(color==1)
            img = whiteQueen;
        else
            img = blackQueen;

        super(img, line, column);

        this.color = color;
    }
}