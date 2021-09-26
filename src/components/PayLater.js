import React from 'react'
import styled from 'styled-components';

// styled components
const Wrapper = styled.div`

    `;


const PayLater = (props) => {
    const {name} = props;
    return (
        <Wrapper className="ms-1 mt-4">
            <span>Note: the amount will be added to {name}'s account</span>
        </Wrapper>
    )
}

export default PayLater;

PayLater.defaultProps = {
    name: "Aryan"
}