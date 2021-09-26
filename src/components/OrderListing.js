import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PaymentSettingsSVG from "../img/svg/settings.svg";
import ArrowLeft from "../img/svg/arrow-left.svg";
import OrderBottomBar from "./OrderBottomBar";
import OrderListItem from "./OrderListItem";

const BackButton = styled.div`
    img {
        cursor: pointer;
    }
`;

const TitleBox = styled.div`
    input,
    input:focus {
        border: none !important;
        outline-width: 0;
        color: #0f0f0f;
        font-weight: 400;
        font-size: 28px;
        line-height: 31px;
    }
`;

const Container = styled.div`
    max-width: 500px;
    width: 95%;
    margin: auto;
    border: 2px solid #eaeaea;
    padding: 0.6em 0.8em;
`;

const InputRowBox = styled.div`
    border: 2px solid grey;
    min-height: 5vh;
    --placeholder-color: rgba(15, 15, 15, 0.15);

    * {
        width: 100%;
        border: none !important;
        outline-width: 0;
        height: 40px;
    }

    input::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        color: var(--placeholder-color) !important;
        font-weight: 400 !important;
        font-size: 32px !important;
        line-height: 31px !important;
    }
    input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: var(--placeholder-color) !important;
        font-weight: 400 !important;
        font-size: 32px !important;
        line-height: 31px !important;
    }
    input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: var(--placeholder-color) !important;
        font-weight: 400 !important;
        font-size: 32px !important;
        line-height: 31px !important;
    }
    input:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: var(--placeholder-color) !important;
        font-weight: 400 !important;
        font-size: 32px !important;
        line-height: 31px !important;
    }
    input::-ms-input-placeholder {
        /* Microsoft Edge */
        color: var(--placeholder-color) !important;
        font-weight: 400 !important;
        font-size: 32px !important;
        line-height: 31px !important;
    }

    input::placeholder {
        /* Most modern browsers support this now. */
        color: var(--placeholder-color) !important;
        font-weight: 400 !important;
        font-size: 32px !important;
        line-height: 31px !important;
    }
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

    const [title, setTitle] = useState("");
    const [orderItems, setOrderItems] = useState([]);

    const isQty = (num) => {
        const regQty = /^([0-9]){1,}$/;
        return regQty.test(num);
    }

    const isPrice = (num) => {
        const reg = /^([0-9]){0,}\.{0,1}([0-9]){1,}$/;
        return reg.test(num);
    }

    useEffect(() => {
        document.getElementById("title").focus();

        document.getElementById("item").addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                document.getElementById("quantity").focus();
            }
        });

        document.getElementById("quantity").addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                document.getElementById("pricePerItem").focus();
            }
        });

        document
            .getElementById("pricePerItem")
            .addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    const itemName = document.getElementById("item");
                    const quantity = document.getElementById("quantity");
                    const pricePerItem = document.getElementById("pricePerItem");

                    const name = itemName.value;
                    const qty =  isQty(quantity.value.trim()) ? Number(quantity.value.trim()) : 0;
                    const price = qty * (isPrice(pricePerItem.value.trim()) ? Number(pricePerItem.value.trim()) : 0);
                        
                    itemName.value = "";
                    quantity.value = "";
                    pricePerItem.value = "";
                    itemName.focus();
                    
                    setOrderItems(prev => prev.concat({
                        name: name , 
                        quantity: qty , 
                        price: price
                    }));
                    console.log("I am fired");
                }
            });
        
    }, []);

    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value)
    };

    return (
        <>
        <Container className="">
            <BackButton className="mt-3 mb-4 d-flex align-items-center justify-content-between">
                <img src={ArrowLeft} alt="arrow-left" />
                <img src={PaymentSettingsSVG} alt="payment-settings-svg" />
            </BackButton>

            <TitleBox>
                <input
                    type="text"
                    id="title"
                    className="px-2 py-1"
                    placeholder="Order Title"
                    name="title"
                    value={title}
                    onChange={handleOnChangeTitle}
                />
            </TitleBox>

            <InputRowBox className="d-flex justify-content-between gap-4 py-2 px-2">
                <input type="text" placeholder="Item" name="item" id="item" />
                <input
                    type="text"
                    placeholder="Quantity"
                    name="quantity"
                    id="quantity"
                />
                <input
                    type="text"
                    placeholder="Price"
                    name="pricePerItem"
                    id="pricePerItem"
                />
            </InputRowBox>

            <ListingBox className="my-5">
                {orderItems.map((item, idx) => {
                    return (
                        <OrderListItem
                            key={`item${idx}`}
                            sno={idx + 1}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    );
                })}
            </ListingBox>

            <OrderBottomBar />
        </Container>
        </>
    );
}
