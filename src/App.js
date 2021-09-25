import OrderListing from "./components/OrderListing";
import "./css/SignUp.css";
import "./css/utils.css";

function App() {
    return (
        <>
            {/* <div className="container px-4 border border-2 py-5 d-flex justify-content-center flex-row  align-items-center gap-4" style={{width: "500px"}}> */}
                {/* <OrderSummaryListItem />
                <OrderSummaryListItem
                    title="Aditya's Order"
                    amount="670"
                    itemNumber="3"
                    status="Paid"
                />
                <OrderSummaryListItem
                    title="Shanti Niketan , Model Town"
                    amount="1220"
                    status="Billed"
                    itemNumber="12"
                /> */}
                {/* <SideMenu /> */}

                {/* <PaymentCard 
                    status="sale"
                    amount="1500"
                    message="Today's sale"
                />

                <PaymentCard 
                    status="pending"
                    amount="2000"
                    message="Pending payment"
                /> */}

            {/* </div> */}
            <OrderListing />

            {/* <PaymentSuccessful/> */}
            {/* <OrderListing /> */}
            {/* <SignUp /> */}
            {/* <OTP phone="8700740353" /> */}
        </>
    );
}

export default App;
