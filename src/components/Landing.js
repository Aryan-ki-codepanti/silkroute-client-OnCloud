import React from 'react'
import styled from 'styled-components';
import HelloThere from './HelloThere'
import HeroLanding from '../img/hero-signup.png';
import AddOrder from '../img/svg/add.svg';
import SideMenu from './SideMenu';


// styled components
const Container = styled.div`
        max-width: 500px;
        margin: auto;
        padding: 1em 2em;
        
    `;


const ImgBox = styled.div`
    img{
        max-width: 344px;
        user-select: none;
        padding: 0 1.5em;
    }
`;

const HeroText = styled.div`
    h1{
        font-weight: 300;
        font-size: 36px;
        line-height: 56px;
        letter-spacing: .04em;
    }
    span{
        font-weight: 400;
        color: #2A6059;
        text-decoration: underline;
    }

`;

const AddBtnBox = styled.div`
    img{
        cursor: pointer;
        user-select: none;
    }
`;


export default function Landing() {
    return (
        <Container>
            <div className="mt-3 mb-4">
                <SideMenu />
            </div>
            <HelloThere name="Aryan" />

            <ImgBox className="d-flex justify-content-center align-items-center">
                <img src={HeroLanding} alt="hero-landing-png" />
            </ImgBox>

            <HeroText className="mt-1 mb-5">
                <h1 className="text-center">
                    Start Taking <br />
                    <span className="mx-2">Orders</span>    
                     Today
                </h1>
            </HeroText>

            <AddBtnBox className="d-flex justify-content-center align-items-center mb-2">
                <img src={AddOrder} alt="add-order-png" />
            </AddBtnBox>

        </Container>
    )
}
