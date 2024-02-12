import { useState } from "react";
import React from "react";
import { Horse } from "../../classes/Horse";
import { Bishop } from "../../classes/Bishop";
import { Tower } from "../../classes/Tower";
import { Queen } from "../../classes/Queen";
import { Piece } from "../../classes/Piece";
import { Div, PromotionPiece } from "./style";




function constructLine(color:number){
    var pieces = [];
    var line = 0;
    const column = -1;
    var id = 100;


    if(color == 1){
        line = 1;
    }
    else{
        line = 8;
    }

    pieces.push(new Queen(line, column, id*color));
    id++;
    pieces.push(new Tower(line, column, id*color));
    id++;
    pieces.push(new Horse(line, column, id*color));
    id++;
    pieces.push(new Bishop(line, column, id*color));

    return pieces;

}


interface PromotionProps{
    selectPiece: (piece: Piece) => void;
    color: number;
    visible: string;
}


const Promotion: React.FC<PromotionProps> = ({
    selectPiece,
    color,
    visible,
}) => {

    const [line, setLine] = useState(constructLine(color));
    const [visibility, setVisibility] = useState('hidden');

    function substitutePiece(oldPiece: Piece){
        var newLine = line.filter((piece) => piece.id!=oldPiece.id);
        var newPiece;

        if(oldPiece.type == 'queen'){
            newPiece = new Queen(oldPiece.line, oldPiece.column, oldPiece.id);
        }

        else if(oldPiece.type == 'horse'){
            newPiece = new Horse(oldPiece.line, oldPiece.column, oldPiece.id);
        }

        else if(oldPiece.type == 'tower'){
            newPiece = new Tower(oldPiece.line, oldPiece.column, oldPiece.id);
        }

        else{
            newPiece = new Bishop(oldPiece.line, oldPiece.column, oldPiece.id);
        }

        newLine.push(newPiece);

        setLine(newLine);
    }


    if(visibility!=visible){
        setVisibility(visible);
    }

    return(
        <>
            <Div content={visibility}>
                {line.map( piece => piece.column == -1 && (
                        <PromotionPiece key={piece.id}  src={piece.image} onClick={() => {
                            substitutePiece(piece);
                            selectPiece(piece);
                            setVisibility('hidden');
                        }}></PromotionPiece>
                        
                ))}
            </Div>
        </>
    )


}

export default Promotion;