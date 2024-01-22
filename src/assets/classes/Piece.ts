import { Board } from "./Board";


export class Piece{

    
    image: string;
    line: number;
    column: number;
    color: number;
    //colo = 1 eh branco e color = 2 eh preto

    constructor(image:string, line: number, column: number, color: number){
        this.image = image;
        this.line = line;
        this.column = column;
        this.color = color;
    }

    move(board:Board, line:undefined | number, column: undefined | number, pieceOrSquare: string | undefined){
        console.log("estou em piece");
        return false;
    };
}