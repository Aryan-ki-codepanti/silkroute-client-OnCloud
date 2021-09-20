import React, { useState, ReactDOM } from "react";
import heroSignUp from "../img/hero-signup.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import OTP from "./OTP";

export default function SignUp(props) {
    // store mobile number
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleOnChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSignClick = (event) => {
        event.preventDefault();
        // click the link to route signup to OTP content
        localStorage.setItem("phone" , phoneNumber);
        document.getElementById("otpLink").click();
    };

    // dont open it please
    const signUpBox = (<div className="SignUpBox m-auto p-3">
    <div className="img-box d-flex align-items-center justify-content-center px-3">
        <img src={heroSignUp} alt="" />
    </div>

    <div className="content-box d-flex justify-content-center flex-column align-items-center">
        <h1 className="mb-0">Silk Route</h1>
        <small>Helping You Sell Better</small>
    </div>

    <form>
        <div className="form-box px-3 mt-3">
            <input
                type="tel"
                className="form-control p-2 px-3"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={handleOnChange}
            />

            <button
                disabled={
                    phoneNumber.length === 10 &&
                    phoneNumber.toString().match(/[0-9]{10}/)
                        ? false
                        : true
                }
                className="btn w-100 my-4"
                type="submit"
                onClick={handleSignClick}
            >
                SignUp
            </button>
        </div>
    </form>

    <div className="text-end px-3 pb-5">
        <input
            type="checkbox"
            className="form-check-input"
            name="rememberMe"
            id="rememberMe"
        />
        <span> Remember me </span>
    </div>
</div>)
;

    return (
        <>
            <Router>
            {/* Hidden Redirect link  */}
            <Link  to="/otp" id="otpLink" className="d-none" >OTP</Link>

                <Switch>

                    <Route exact path="/">
                        {signUpBox}
                    </Route>
                    <Route exact path="/otp">
                        <OTP phone={phoneNumber} />
                    </Route>

                </Switch>

            </Router>
        </>
        );
}
