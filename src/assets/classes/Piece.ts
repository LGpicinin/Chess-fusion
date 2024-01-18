


export class Piece{

    
    image: string;
    line: number;
    column: number;

    constructor(image:string, line: number, column: number){
        this.image = image;
        this.line = line;
        this.column = column;
    }

    move(){};
}