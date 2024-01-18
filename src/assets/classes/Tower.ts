import { Piece } from "./Piece";
import whiteTower from "../images/WhiteTower.png"
import blackTower from "../images/BlackTower.png"

export class Tower extends Piece{

    color: number;

    constructor(color:number, line: number, column: number){
        var img;

        if(color==1)
            img = whiteTower;
        else
            img = blackTower;

        super(img, line, column);

        this.color = color;
    }
}