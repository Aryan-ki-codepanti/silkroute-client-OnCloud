
import Home from "./components/Home";
import Landing from "./components/Landing";
// import OTP from "./components/OTP";
import OrderListing from "./components/OrderListing";
// import SignUp from "./components/SignUp";
import "./css/SignUp.css";
import "./css/utils.css";
import { BrowserRouter , Route , Switch } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
    return (
        <div style={{minHeight: "100vh"}} className="d-flex">
            {/* <OrderListing /> */}
            {/* <div className="container px-4 border border-2 py-5 " style={{width: "500px"}}> */}
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

            {/* </div> */}
            {/* <Landing name="Aryan" /> */}
            {/* <OTP></OTP> */}
            {/* <Home /> */}
            {/* <SignUp /> */}
            {/* <PaymentSuccessful/> */}
            {/* <OrderListing /> */}
            {/* <SignUp /> */}
            {/* <OTP phone="8700740353" /> */}
            
            {/* Router setup */}
            <BrowserRouter>
                <Switch>
                    <Route  path="/" exact component={SignUp} />
                    <Route  path="/landing" exact component={Landing} />
                    <Route  path="/home" exact component={Home} />
                    <Route  path="/orderlisting" exact component={OrderListing} />
                </Switch>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
