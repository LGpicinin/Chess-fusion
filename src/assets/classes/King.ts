import { Piece } from "./Piece";
import { Tower } from "./Tower";
import { Square } from "./Square";
import whiteKing from "../images/WhiteKing.png"
import blackKing from "../images/BlackKing.png"

export class King extends Piece{

    towerBigRook?: Piece;
    towerSmallRook?: Piece;
    firstMove: boolean;
    doSmallRook: boolean;


    constructor(line: number, column: number, id:number){
        var img;
        var color;

        if(line==1){
            img = whiteKing;
            color = 1;
        }
        else
        {
            img = blackKing;
            color = 2;
        }

        super(img, line, column, color, id, 'king');

        this.iAmKing = true;
        this.firstMove = false;
        this.doSmallRook = false;

    }

    setTowerBigRook(tower: Tower){
        this.towerBigRook = tower;
    }

    setTowerSmallRook(tower: Tower){
        this.towerSmallRook = tower;
    }



    move(line:number, column:number, squares:Square[]){
        if(Math.abs(this.column - column)<=1 && Math.abs(this.line - line)<=1){
            this.firstMove = true;
            return 1;
        }
        else if(this.firstMove == false && ((column == 3 || column == 7) && (line == 1 || line == 8))){
            var moveDirection;
            
            if(column == 3){
                moveDirection = -1;
            }
            else{
                moveDirection = 1;
            }

            var column2 = this.column + moveDirection;
            while(column2!=8 && column2!=1){
                var square = squares.filter((square) => square.column == column2 && square.line == this.line);
                if(square[0].piece){
                    return 0;
                }
                column2 = column2 + moveDirection;
            }

            if(moveDirection == -1){
                this.doSmallRook = false;
            }
            else{
                this.doSmallRook = true;
            }

            this.firstMove = true;

            return 2;
        }
        else{
            return 0;
        }
    }
}