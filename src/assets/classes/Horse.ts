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
}