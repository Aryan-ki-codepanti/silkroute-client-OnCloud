import React , {useState} from 'react'
import styled from 'styled-components';

// styled components 

const Wrapper = styled.div`
    h3{
       font-weight : 700;
       font-size: 21px;
       line-height: 31px;
       color: #0F0F0F;
    }
`;

const PillBox = styled.div`

    gap:12px;

    button{
        background-color: #fff;
        border: 1px solid #DEDEDE;
        border-radius: 16px;
        letter-spacing: 0.015em;
        color: #0F0F0F;
        font-weight: 400;
        font-size: 14px;
        line-height: 15px;
        padding: 8.5px 12px;
    }

    .btn-active{
        color: #2A6059;
        background: #EAEFEE;
        border: 1px solid #2A6059;
    }


`;

const PaymentSettingsCollapse = () => {
    return (
        <div style={{borderRadius: "16px 16px 0 0"}}>
            <Wrapper>
                <h3>Payment Settings</h3>

                <PillBox className="d-flex mt-5">
                    <button className="btn-active"> Pay Now </button>
                    <button> Pay Later </button>
                </PillBox>

            </Wrapper>
        </div>
    )
}

export default PaymentSettingsCollapse;