import React , {useEffect} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    
    .form-check-input:checked {
        background-color: #2A6059;
        border-color: #2A6059;
        accent-color: #2A6059 !important; 
    }
`;


const PayNow = (props) => {
    const {name} = props; 

    useEffect( () => { 
        document.getElementById("paymentAll").checked = true;
    } , []);

    return (
        <Wrapper className="ms-1 mt-4">
            <div className="d-flex mb-4 gap-3 gap-md-4 gap-lg-5 mb-3">

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMode"
                        id="paymentAll"
                    />
                    <label className="form-check-label" htmlFor="paymentAll">
                        All
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMode"
                        id="paymentUPI"
                        
                    />
                    <label className="form-check-label" htmlFor="paymentUPI">
                        UPI
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMode"
                        id="paymentCash"
                        
                    />
                    <label className="form-check-label" htmlFor="paymentCash">
                        Cash
                    </label>
                </div>
    
            </div>
            
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember the settings for {name}
                </label>
            </div>
        </Wrapper>

    );
};

export default PayNow;

PayNow.defaultProps = {
    name: "Aryan"
}