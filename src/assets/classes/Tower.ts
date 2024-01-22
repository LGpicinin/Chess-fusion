import { Piece } from "./Piece";
import whiteTower from "../images/WhiteTower.png"
import blackTower from "../images/BlackTower.png"

export class Tower extends Piece{


    constructor(color:number, line: number, column: number){
        var img;

        if(color==1){
            img = whiteTower;
        }
        else{
            img = blackTower;
            color = 2;
        }

        super(img, line, column, color);

    }
}