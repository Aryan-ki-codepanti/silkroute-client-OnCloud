import React from "react";
import styled from "styled-components";
import BillImg from "../img/bill-1.png";
import WalletImg from "../img/wallet-1.png";

const Card = styled.div`
    width: 100%;
    /* max-width: 165px; */
    box-shadow: 0px 6px 10px rgba(112, 144, 176, 0.8);
    border-radius: 8px;
    background-repeat: no-repeat;
    background-position: top right;

    h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
    }

    p {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 12px;
        line-height: 13px;
        letter-spacing: 0.05em;
    }

    .status-pending-h3{
        color: #3F414E;
    }
    .status-pending-p{
        color: #524F53;
    }
    
    .status-sale-h3{
        color: #FFECCC;
    }
    .status-sale-p{
        color: #F7E8D0;
    }
    
`;

const PaymentCard = (props) => {
    const { amount, message, status } = props;
    return (
        <Card
            className="pt-5 px-3"
            style={{
                backgroundColor: status === "pending" ? "#FFC97E" : "#2A6059" , backgroundImage: status === "pending" ? `url(${BillImg})` : `url(${WalletImg})`  
            }}
        >
            <h3 className={`status-${status}-h3`}> &#8377; {amount} </h3>
            <p className={`status-${status}-p`}> {message} </p>
        </Card>
    );
};

export default PaymentCard;
