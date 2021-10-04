import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import HelloThere from "./HelloThere";
import PaymentCard from "./PaymentCard";
import OrderSummaryListItem from "./OrderSummaryListItem";
import axios from "axios";

// styled components
const Container = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 1em 2em;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const OrdersBox = styled.div`
    
`;

const OrderListingStatus = styled.div`


    ul li {
        list-style: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        letter-spacing: 0.04em;
        color: rgba(0, 0, 0, 0.4);
        cursor: pointer;
    }

    ul .active {
        font-weight: 700 !important;
        color: #2A6059 !important;
    }


`;

const Home = (props) => {
    const { username } = props;

    
    const [orderListingStatus, setOrderListingStatus] = useState("pending");
    const [orders , setOrders] = useState([]);
    
    useEffect(() => {
        const getOrders = async (phone)=>{
            const data = await axios.post('http://localhost:3001/api/orders/' , {
                phone: phone
            });

            // setting orders
            setOrders(prevOrders => data.data);
            console.log(data.data);
        }
        getOrders("8700740353");
        // handle pending payment
        
    }, []);
    
    const handlePendingPayment = (orderList) => {
        const billedOrders = orderList.filter(order => order.status === "billed");
        const pendingAmt = billedOrders.reduce((x,y) => x.amount + y.amount);
        return pendingAmt;
    }

    
    return (
        <Container>
            <div className="mt-3 mb-4">
                <SideMenu />
            </div>

            <HelloThere name={username} />
            <div className="d-flex gap-4 my-3">
                <PaymentCard status="sale" message="Today's sale" amount="2002"/>
                <PaymentCard status="pending" message="pending payment" amount="500" />
            </div>


            <OrderListingStatus>
                <ul className="p-0 m-0 d-flex gap-5">
                    <li className={orderListingStatus === "pending" ? "active" : ""} onClick={() => setOrderListingStatus(prev => "pending")}> Pending Orders  </li>
                    <li className={orderListingStatus === "all" ? "active" : ""} onClick={() => setOrderListingStatus(prev => "all")}> All Orders  </li>
                    <li className={orderListingStatus === "update" ? "active" : ""} onClick={() => setOrderListingStatus(prev => "update")}> Update Orders  </li>
                </ul>
            </OrderListingStatus>


            {/* render orders acc to listing status all (billed + paid) pending -> "billed" update -> "Paid"  */}
            <OrdersBox className="d-flex flex-column gap-3 my-3">
                {
                    orderListingStatus === "all" ? (
                        
                        orders.map(order => {
                            return (
                                <OrderSummaryListItem />
                            )
                        }) ) 
                    :
                    (orderListingStatus === "pending" ? (
                        "Pending"
                        
                    )
                    :
                    "paid" // paid in update
                    )
                }
            </OrdersBox>

                <h1 className="mt-auto">Hello</h1>

        </Container>
    );
};

export default Home;

Home.defaultProps = {
    username: "Aryan",
};
