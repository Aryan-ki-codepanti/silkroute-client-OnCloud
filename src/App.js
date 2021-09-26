
import  PaymentSettingsCollapse  from "./components/PaymentSettingsCollapse";
import "./css/SignUp.css";
import "./css/utils.css";


function App() {
    return (
        <>
            {/* <OrderListing /> */}
            <div className="container px-4 border border-2 py-5 " style={{width: "500px"}}>
                <PaymentSettingsCollapse />
                {/* <OrderSummaryListItem
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

            </div>
            {/* <Landing name="Aryan" /> */}

            {/* <PaymentSuccessful/> */}
            {/* <OrderListing /> */}
            {/* <SignUp /> */}
            {/* <OTP phone="8700740353" /> */}
        </>
    );
}

export default App;
