import React from 'react'
import styled from 'styled-components';

import GallerySVG from '../img/svg/gallery.svg'; 
import ShareSVG from '../img/svg/share.svg'; 
import WhatsappSVG from '../img/svg/whatsapp.svg'; 
import CameraSVG from '../img/svg/camera.svg'; 
import NoteSVG from '../img/svg/note.svg'; 

// styled components

const Wrapper = styled.div`
    background: rgba(42, 96, 89, 0.12);
`;

const IconBox = styled.div`
`;
const LeftIcons = styled.div`
`;

const MidSeparator = styled.div`
    
    padding:1px;
    background: rgba(42, 96, 89, 0.2);

`;
const RightIcons = styled.div`
    button{
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        background: #2A6059;
        border-radius: 4px;
        color: #fff;
    }
`;

const OrderBottomBar = () => {
    return (
        <Wrapper className="d-flex p-3  ">

            <LeftIcons className="d-flex align-items-center gap-4 flex-grow-1" >
                <IconBox>
                    <img src={GallerySVG} alt="gallery-svg" />
                </IconBox>
                <IconBox>
                    <img src={CameraSVG} alt="camera-svg" />
                </IconBox>
                <IconBox>
                    <img src={NoteSVG} alt="note-svg" />
                </IconBox>
            </LeftIcons>
            <MidSeparator className="ms-2 me-2">
            </MidSeparator>
            <RightIcons className="d-flex align-items-center gap-4">
                <IconBox> <img src={WhatsappSVG} alt="whatsapp-svg" /> </IconBox>
                <IconBox>
                    <button className="btn d-flex justify-content-center align-items-center gap-2">
                        <img src={ShareSVG} alt="share-svg" />
                        Share
                    </button>
                </IconBox>
            </RightIcons>


        </Wrapper>
    )
};

export default OrderBottomBar;
