import { Piece } from "./Piece";
import whiteBishop from "../images/WhiteBishop.png"
import blackBishop from "../images/BlackBishop.png"

export class Bishop extends Piece{

    color: number;

    constructor(color:number, line: number, column: number){
        var img;

        if(color==1)
            img = whiteBishop;
        else
            img = blackBishop;

        super(img, line, column);

        this.color = color;
    }
}