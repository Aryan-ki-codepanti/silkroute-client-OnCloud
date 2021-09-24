
import OrderSummaryListItem from "./components/OrderSummaryListItem";
import "./css/SignUp.css";
import "./css/utils.css";



function App() {

	

    return (
        <>
            <div className="container py-5 d-flex justify-content-center flex-column  align-items-center gap-4">
                <OrderSummaryListItem />
                <OrderSummaryListItem title="Aditya's Order" amount="670" itemNumber="3" status="Paid" />
                <OrderSummaryListItem title="Shanti Niketan , Model Town" amount="1220" status="Billed" itemNumber="12"/>
            </div>
            {/* <PaymentSuccessful/> */}
            {/* <OrderListing /> */}
            {/* <SignUp /> */}
            {/* <OTP phone="8700740353" /> */}
        </>
    );
}

export default App;
