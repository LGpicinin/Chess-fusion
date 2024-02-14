import { Board } from "./Board";
import { Square } from "./Square";


export class Piece{

    id: number;
    image: string;
    line: number;
    column: number;
    color: number;
    controledSquares?: Square[];
    iAmKing: boolean;
    whenAvanceTwoSquares: number; //somente peõs alteram esse atributo
    type: string;
    //colo = 1 eh branco e color = 2 eh preto

    constructor(image:string, line: number, column: number, color: number, id:number, type:string){
        this.image = image;
        this.line = line;
        this.column = column;
        this.color = color;
        this.controledSquares = [];
        this.iAmKing = false;
        this.id = id;
        this.type = type;
        this.whenAvanceTwoSquares = 0;
    }

    calculateControledSquares(squares: Square[]){
        console.log("estou em piece");
    }

    move(line:undefined | number, column: undefined | number, squares:Square[], pieceOrSquare: string | undefined, numberOfPlays:number){
        console.log("estou em piece");
        return 0;
    };
}