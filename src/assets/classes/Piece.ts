import { Board } from "./Board";
import { Square } from "./Square";


export class Piece{

    
    image: string;
    line: number;
    column: number;
    color: number;
    controledSquares?: Square[];
    iAmKing: boolean;
    //colo = 1 eh branco e color = 2 eh preto

    constructor(image:string, line: number, column: number, color: number){
        this.image = image;
        this.line = line;
        this.column = column;
        this.color = color;
        this.controledSquares = [];
        this.iAmKing = false;
    }

    calculateControledSquares(squares: Square[]){
        console.log("estou em piece");
    }

    move(line:undefined | number, column: undefined | number, squares:Square[], pieceOrSquare: string | undefined){
        console.log("estou em piece");
        return false;
    };
}