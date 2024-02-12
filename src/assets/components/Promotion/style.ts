import styled from 'styled-components'


export const Div = styled.div`
    visibility: ${props =>
        props.content === 'hidden' ? 'hidden'
        :'visible'
    };
    display: inline;
`


export const PromotionPiece = styled.img`
    width: 56px;
`