import React from 'react'
import styled from 'styled-components';


// styled sub components
const Container = styled.div`
`;  

const ListItem = styled.div`

    .sno , .name , .price{
        font-weight: 300;
        color: #1C2A32;
        font-size: 14px;
        line-height: 22px;
    }
    
    .quantity{
        font-weight: 400;
        line-height: 22px;
        font-family: Helvetica, 'Lato' ,sans-serif;
        color: #2A6059;
        background: rgba(110, 171, 163, 0.2);
        border-radius: 2px;
        font-size: 14px;
    }
`;  



export default function OrderListItem(props) {
    // destructuring them
    const {sno , name , quantity , price} = props;
    return (
        <Container className="container-fluid py-2">
            <ListItem className="d-flex justify-content-between align-items-center gap-5">

                <div className="d-flex align-items-center flex-grow-1  gap-3">
                    <div className="sno">
                        {sno}. 
                    </div>
                    <div className="name">
                        {name }
                    </div>
                </div>

                <div className="quantity py-1 px-2">
                   X {quantity}
                </div>
                 
                 <div className="price">
                    &#8377;{price}
                 </div>

            </ListItem>
        </Container>
    )
}
