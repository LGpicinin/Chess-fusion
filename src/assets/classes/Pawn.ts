import { Piece } from "./Piece";
import whitePawn from "../images/WhitePawn.png"
import blackPawn from "../images/BlackPawn.png"

export class Pawn extends Piece{

    color: number;

    constructor(color:number, line: number, column: number){
        var img;

        if(color==2)
            img = whitePawn;
        else
            img = blackPawn;

        super(img, line, column);

        this.color = color;
    }
}