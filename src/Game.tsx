import { useState } from 'react';
import './Game.css'
import { Board } from './assets/classes/Board';
import { Piece } from './assets/classes/Piece';
import { Square } from './assets/classes/Square';
import Promotion from './assets/components/Promotion/Promotion';


function createBoard(){

    const board = new Board();

    return board;
}

function movingPiece(newPiece: Piece, oldSquare: Square, board: Board, line: number, column: number, oldPiece?: Piece, newSquare?: Square){

        var pieceDelete;
        var sq;

        oldSquare.piece = undefined;
        if(oldPiece!=undefined){
            pieceDelete = board.pieces.filter((piece)=>piece.column == oldPiece.column && piece.line == oldPiece.line);
            delete pieceDelete[0];

            sq = board.squares.filter((square) => square.column == column && square.line == line);
            sq[0].piece = newPiece;
            sq[0].piece.line = line;
            sq[0].piece.column = column;
        }
        else if(newSquare!=undefined){
            newSquare.piece = newPiece;
            newSquare.piece.column = column;
            newSquare.piece.line = line;
        }

}


export function Game(){
    
    const [board, setBoard] = useState(createBoard);
    const [whitePromotion, setWhitePromotion] = useState('hidden');
    const [blackPromotion, setBlackPromotion] = useState('hidden');

    function promotionPiece(piece:Piece){
        if(board.pieceClicked){
            piece.column = board.pieceClicked.column;
            piece.line = board.pieceClicked.line;

            delete(board.pieceClicked);

            var square = board.squares.filter((square) => square.column == piece.column && square.line == piece.line);
            square[0].piece = piece;

        }


        if(piece.color == 1){
            setWhitePromotion('hidden');
        }
        else{
            setBlackPromotion('hidden');
        }
        setBoard({...board, promotion: false});
    }

    function click(piece?:Piece, square?:Square){
        if(board.pieceClick == false && piece!=undefined){
            if(piece.color != board.whatColorPlays || board.promotion == true){
                return;
            }
            var squares = board.squares.filter((square) => square.column == piece.column && square.line == piece.line);
            squares[0].setColorToYellow();


            setBoard({...board, pieceClick: true, pieceClicked: piece,});
        }
        else if(board.pieceClick == true && board.pieceClicked){
            var line = 0;
            var column = 0;
            var oldSquare = square;
            var pieceOrSquare = "";
            var possibleMove = 0;
            var initialSq;

            initialSq = board.squares.filter((square) => square.piece == board.pieceClicked);
            oldSquare = initialSq[0];
            oldSquare.setOriginalColor();

            if(square!=undefined){
                column = square.column;
                line = square.line;
                pieceOrSquare = "square";
            }
            else if (piece!=undefined){
                if(board.pieceClicked.color == piece.color){
                    
                    setBoard({...board, pieceClick: false,});
                    return;
                }
                line = piece.line;
                column = piece.column;
                pieceOrSquare = "piece"
            }
            if(board.pieceClicked){

                possibleMove = board.pieceClicked.move(line, column, board.squares, pieceOrSquare, board.numberOfPlays);

                if (possibleMove == 0){
                    setBoard({...board, pieceClick: false});
                    return;
                }
                
                else{
                    var color;
                    var promotion = false;
                    var numberOfPlays = board.numberOfPlays + 1;

                    if (board.whatColorPlays == 1){
                        color = 2;
                    }
                    else{
                        color = 1;
                    }

                    movingPiece(board.pieceClicked, oldSquare, board, line, column, piece, square);

                    if(possibleMove == 2){

                        var king = board.whiteKing;
                        
                        if(board.blackKing.line == line){
                            king = board.blackKing;
                        }
                        
                        if(king.doSmallRook == true){
                            if(king.towerSmallRook){
                                var tower = king.towerSmallRook
                                var oldSquareTower = board.squares.filter(
                                    (square) => square.line == tower.line && square.column == tower.column
                                );
                                var newSquareTower = board.squares.filter((square) => square.line == tower.line && square.column == 6);
                                movingPiece(king.towerSmallRook, oldSquareTower[0], board, line, 6, piece, newSquareTower[0]);
                            }
                        }
                        else{
                            if(king.towerBigRook){
                                var tower = king.towerBigRook;
                                var oldSquareTower = board.squares.filter(
                                    (square) => square.line == tower.line && square.column == tower.column
                                );
                                var newSquareTower = board.squares.filter((square) => square.line == tower.line && square.column == 4);
                                movingPiece(king.towerBigRook, oldSquareTower[0], board, line, 4, piece, newSquareTower[0]);
                            }
                        }
                    }

                    else if(possibleMove == 3){
                        promotion = true;
                        if(line == 1){
                            setBlackPromotion('visible');
                        }
                        else{
                            setWhitePromotion('visible');
                        }
                    }

                    else if(possibleMove == 4){
                        var pieceDelete = board.pieces.filter((piece) => piece.whenAvanceTwoSquares == board.numberOfPlays);
                        var sq = board.squares.filter(
                            (square) => square.line == pieceDelete[0].line && square.column == pieceDelete[0].column
                        );

                        sq[0].piece = undefined;
                        delete(pieceDelete[0]);
                    }
                    
                    setBoard(
                        {   
                            ...board, 
                            pieceClick: false, 
                            whatColorPlays: color, 
                            promotion: promotion,
                            numberOfPlays: numberOfPlays,
                        });
                }
            }
        }
    }
    


    return(
        <>
            <Promotion
                selectPiece={promotionPiece}
                color={1}
                visible={whitePromotion}
            />
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
            <Promotion
                selectPiece={promotionPiece}
                color={8}
                visible={blackPromotion}
            />
            
            
        </>
    )
}
