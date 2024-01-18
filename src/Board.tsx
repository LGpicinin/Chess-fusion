import { useState } from 'react';
import './Board.css'
import { Square } from './assets/classes/Square';
import { Horse } from './assets/classes/Horse';
import { Bishop } from './assets/classes/Bishop';
import { Pawn } from './assets/classes/Pawn';
import { Tower } from './assets/classes/Tower';
import { Queen } from './assets/classes/Queen';
import { King } from './assets/classes/King';

function createBoard(){

    const pieces = [];
    const board = [];

    var color = 1;
    var p;
    var l = 1;
    var c = 1;

    for(l=1; l<=8; l++){
        for(c=1; c<=8; c++){
            if(l==2 || l==7){
                pieces.push(new Pawn(l, l, c));
            }
            else{
                if(c==1 || c==8)
                    pieces.push(new Tower(l, l, c));
                else if(c==2 || c==7)
                    pieces.push(new Horse(l, l, c));
                else if(c==3 || c==6)
                    pieces.push(new Bishop(l, l, c));
                else if(c==4)
                    pieces.push(new Queen(l, l, c));
                else
                    pieces.push(new King(l, l, c));
            }
        }
        if(l==2) { l=6;}
    }
    



    for(var i=1; i<=8; i++){
        for(var j=1; j<=8; j++){
            p = pieces.filter((piece) => piece.column == j && piece.line == i);
            board.push(new Square(false, [0,0], color, i, j, p[0]))
            color = color*(-1);
        }
        color = color*-1;
    }
    return board;
}


export function Board(){
    
    const [board, setBoard] = useState(createBoard);


    return(
        <>
            <div>
                <div className='line'>
                    {board.map(square => square.line==8 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" /> 
                            {board.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" />
                            )) }
                        </div>
                    ))}
                    
                </div>
                <div className='line'>
                    {board.map(square => square.line==7 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" /> 
                            {board.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" />
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.map(square => square.line==6 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" /> 
                            {board.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" />
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.map(square => square.line==5 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" /> 
                            {board.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" />
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.map(square => square.line==4 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" /> 
                            {board.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" />
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.map(square => square.line==3 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" /> 
                            {board.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" />
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.map(square => square.line==2 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" /> 
                            {board.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" />
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.map(square => square.line==1 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" /> 
                            {board.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" />
                            )) }
                        </div>
                    ))}
                </div>
            </div>
            
            
        </>
    )
}
