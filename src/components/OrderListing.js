import React, { useState , useEffect } from "react";
import styled from "styled-components";

import ArrowLeft from "../img/svg/arrow-left.svg";
import OrderListItem from "./OrderListItem";

const BackButton = styled.div``;

const TitleBox = styled.div`
    input , input:focus{
        border: none !important;
        outline-width: 0;
        color: #0F0F0F;
        font-weight: 400;
        font-size: 28px;
        line-height: 31px;
    }

`;

const Container = styled.div`
    max-width: 500px;
    width: 95%;
    margin: auto;
    border: 2px solid #EAEAEA;
    padding: 0.6em 0.8em;
`;

const InputRowBox = styled.div`

    border: 2px solid grey;
    min-height: 3vh;
`;

const ListingBox = styled.div`

    border: 2px solid grey;
    min-height: 3vh;
`;

export default function OrderListing() {
    // to store whole as object
    /* {
        title: "Aryan's Order",
        items: [ {
            name : "Snickers" ,
            quantity : 3 ,
            price: 20
        } ,
        {
            name : "Namkeen" ,
            quantity : 2 ,
            price: 10

        } 
        ]
    }*/

    const [orderSummary, setOrderSummary] = useState({
        title: "",
        items: [{
            name : "Snickers" ,
            quantity : 3 ,
            price: 20
        } ,
        {
            name : "Namkeen" ,
            quantity : 2 ,
            price: 10

        }],
    });

    const [itemNumber , setItemNumber] = useState(0);

    
   
    useEffect(()=>{
        document.getElementById("title").focus();
    } , []);
    

    const handleOnChangeTitle = (event)=>{
        setOrderSummary({
            ...orderSummary , 
            [event.target.name]: event.target.value
        })
    };

    return (
        <Container>
            <BackButton className="my-3">
                <img src={ArrowLeft} alt="arrow-left" />
            </BackButton>

            <TitleBox>
                <input type="text" id="title" className="px-2 py-1" placeholder="Order Title" name="title" value={orderSummary.title} onChange={handleOnChangeTitle} />
            </TitleBox>

            <InputRowBox >

            </InputRowBox>

            <ListingBox className="my-5">
                { orderSummary.items.map((item , idx)=>{
                    return (
                        <OrderListItem key={`item${idx}`} sno={idx + 1} name={item.name} quantity={item.quantity} price={item.price}  />
                    );
                }) }
            </ListingBox>

        </Container>
    );
}
