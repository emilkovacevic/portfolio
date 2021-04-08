import React from 'react'
import styled from 'styled-components'
import randomCodeImg from './randomCodeImg.jpg'

const FlashWrapper = styled.div`
    position:absolute;
    z-index:999;
    height:100vh;
    width:100vw;
    background:var(--errorBg__flash);
    top:0;
    left:0;
    img{
        height:100%;
        width:100%;
        object-fit:contain;
    }
`

function ErrorFlash() {
    return (
        <FlashWrapper>
            <img src={randomCodeImg} alt='random code'></img>
        </FlashWrapper>
    )
}

export default ErrorFlash
