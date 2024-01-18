import { Piece } from "./Piece";
import whiteKing from "../images/WhiteKing.png"
import blackKing from "../images/BlackKing.png"

export class King extends Piece{

    color: number;

    constructor(color:number, line: number, column: number){
        var img;

        if(color==1)
            img = whiteKing;
        else
            img = blackKing;

        super(img, line, column);

        this.color = color;
    }
}