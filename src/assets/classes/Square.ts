import GreenSquare from '../images/greenSquare.png'
import WhiteSquare from '../images/whiteSquare.png'
import YellowSquare from '../images/yellowSquare.png'
import { Piece } from './Piece';

export class Square{
    filled: boolean;
    img: string;
    line: number;
    column: number;
    piece?: Piece;
    kingIsOnMe: boolean;
    piecesControlingMe?: Piece[];
    color:number;
    
    constructor(filled:boolean, color:number, line:number, column:number, piece: Piece){
        this.filled = filled;
        this.line = line;
        this.column = column;
        this.piece = piece;
        this.kingIsOnMe = false;
        this.piecesControlingMe = [];
        this.color = color;

        if(color==1)
            this.img = GreenSquare;
        else
            this.img = WhiteSquare;
    }

    setColorToYellow(){
        this.img = YellowSquare;
    }

    setOriginalColor(){
        if(this.color==1)
            this.img = GreenSquare;
        else
            this.img = WhiteSquare;
    }
}