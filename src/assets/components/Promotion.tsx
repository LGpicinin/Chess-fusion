import { useState } from "react";
import React from "react";
import { Horse } from "../classes/Horse";
import { Bishop } from "../classes/Bishop";
import { Tower } from "../classes/Tower";
import { Queen } from "../classes/Queen";
import { Piece } from "../classes/Piece";
import '../../Game.css'




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
    visible: boolean;
}


const Promotion: React.FC<PromotionProps> = ({
    selectPiece,
    color,
    visible,
}) => {

    const [line, setLine] = useState(constructLine(color));
    const [visibility, setVisibility] = useState(true);

    /*if(visibility!=visible){
        setVisibility(visible);
    }*/

    return(
        <>
            <div className="promotionLine">
                    {line.map( piece => piece.column == -1 && (
                        <img key={piece.id} className="promotionPiece" src={piece.image} onClick={() => {
                            selectPiece(piece);
                            setVisibility(false);
                        }}/>
                    ))}
                </div>
        </>
    )


}

export default Promotion;