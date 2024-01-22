import { Piece } from "./Piece";
import whiteKing from "../images/WhiteKing.png"
import blackKing from "../images/BlackKing.png"

export class King extends Piece{


    constructor(color:number, line: number, column: number){
        var img;

        if(color==1)
            img = whiteKing;
        else
        {
            img = blackKing;
            color = 2;
        }

        super(img, line, column, color);

    }
}