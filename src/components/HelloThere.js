import React from 'react'
import PropTypes from 'prop-types' //eslint-disable-line
import styled from 'styled-components'


//styled components
const HelloThereWrapper = styled.div`
    p{
        color: black;
        font-weight: 400;
        font-size: 16px;
    }
`

export default function HelloThere(props) {
    return (
        <HelloThereWrapper>
            <p className="mb-0" >Hello {props.name} 😄</p>
        </HelloThereWrapper>
    )
}

HelloThere.defaultProps = {
    name: "there"
}