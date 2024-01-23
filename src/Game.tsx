import { useState } from 'react';
import './Game.css'
import { Board } from './assets/classes/Board';
import { Piece } from './assets/classes/Piece';
import { Square } from './assets/classes/Square';


function createBoard(){

    const board = new Board();

    return board;
}


export function Game(){
    
    const [board, setBoard] = useState(createBoard);

    function click(piece?:Piece, square?:Square){
        if(board.pieceClick == false && piece!=undefined){
            if(piece.color != board.whatColorPlays){
                console.log("Nao eh sua vez");
                return;
            }
            console.log("piece foi clicada");
            setBoard({...board, pieceClick: true, pieceClicked: piece});
        }
        else if(board.pieceClick == true && board.pieceClicked){
            var line = 0;
            var column = 0;
            var oldLine = 0;
            var oldColumn = 0;
            var oldSquare = square;
            var pieceOrSquare = "";
            var possibleMove = false;
            var pieceDelete;
            var sq;
            var initialSq;
            var finalSquares;

            if(square!=undefined){
                column = square.column;
                line = square.line;
                pieceOrSquare = "square";
            }
            else if (piece!=undefined){
                if(board.pieceClicked.color == piece.color){
                    setBoard({...board, pieceClick: false});
                    return;
                }
                line = piece.line;
                column = piece.column;
                pieceOrSquare = "piece"
            }
            if(board.pieceClicked){
                possibleMove = board.pieceClicked.move(line, column, board, pieceOrSquare);
                if (possibleMove == false){
                    setBoard({...board, pieceClick: false});
                    return;
                }
                else{
                    if(pieceOrSquare == "piece"){
                        pieceDelete = board.pieces.filter((piece)=>piece.column == column && piece.line == line);
                        delete pieceDelete[0];
                    }

                    initialSq = board.squares.filter((square) => square.piece == board.pieceClicked)
                    initialSq[0].piece = undefined;
                    oldColumn = initialSq[0].column;
                    oldLine = initialSq[0].line;
                    oldSquare = initialSq[0];

                    if(square){
                        square.piece = board.pieceClicked;
                        square.piece.column = column;
                        square.piece.line = line;
                    }
                    else{
                        sq = board.squares.filter((square) => square.column == column && square.line == line);
                        sq[0].piece = board.pieceClicked;
                        sq[0].piece.line = line;
                        sq[0].piece.column = column;
                        square = sq[0];
                    }
                    finalSquares = board.squares.filter(s => {
                        if(s.column == column && s.line == line){
                            return square;
                        }
                        else if(s.column == oldColumn && s.line == oldLine){
                            return oldSquare;
                        }
                        else{
                            return s;
                        }
                    });

                    var color;

                    if (board.whatColorPlays == 1){
                        color = 2;
                    }
                    else{
                        color = 1;
                    }
                    setBoard({...board, squares: finalSquares, pieceClick: false, whatColorPlays: color});
                }
            }
        }
    }
    


    return(
        <>
            <div>
                <div className='line'>
                    {board.squares.map(square => square.line==8 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" onClick={() => click(undefined ,square)} /> 
                            {board.squares.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" onClick={() => click(square2.piece, undefined)}/>
                            )) }
                        </div>
                    ))}
                    
                </div>
                <div className='line'>
                    {board.squares.map(square => square.line==7 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" onClick={() => click(undefined ,square)}/> 
                            {board.squares.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" onClick={() => click(square2.piece, undefined)}/>
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.squares.map(square => square.line==6 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" onClick={() => click(undefined ,square)}/> 
                            {board.squares.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" onClick={() => click(square2.piece, undefined)}/>
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.squares.map(square => square.line==5 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" onClick={() => click(undefined ,square)}/> 
                            {board.squares.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" onClick={() => click(square2.piece, undefined)}/>
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.squares.map(square => square.line==4 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" onClick={() => click(undefined ,square)}/> 
                            {board.squares.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" onClick={() => click(square2.piece, undefined)}/>
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.squares.map(square => square.line==3 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" onClick={() => click(undefined ,square)}/> 
                            {board.squares.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" onClick={() => click(square2.piece, undefined)}/>
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.squares.map(square => square.line==2 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" onClick={() => click(undefined ,square)}/> 
                            {board.squares.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" onClick={() => click(square2.piece, undefined)} />
                            )) }
                        </div>
                    ))}
                </div>
                <div className='line'>
                    {board.squares.map(square => square.line==1 && ( 
                        <div className='square'>
                            <img src={square.img} alt="Square" onClick={() => click(undefined ,square)}/> 
                            {board.squares.map(square2 => square2.piece && square2.column == square.column && square2.line == square.line &&(
                            <img className='piece' src={square2.piece.image} alt="Piece" onClick={() => click(square2.piece, undefined)}/>
                            )) }
                        </div>
                    ))}
                </div>
            </div>
            
            
        </>
    )
}
