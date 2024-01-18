import GreenSquare from '../images/greenSquare.png'
import WhiteSquare from '../images/whiteSquare.png'
import { Piece } from './Piece';

export class Square{
    filled: boolean;
    location: number[]
    img: string;
    line: number;
    column: number;
    piece?: Piece;
    constructor(filled:boolean, location:number[], color:number, line:number, column:number, piece: Piece){
        this.filled = filled;
        this.location = location;
        this.line = line;
        this.column = column;
        this.piece = piece;

        if(color==1)
            this.img = GreenSquare;
        else
            this.img = WhiteSquare;
    }
}