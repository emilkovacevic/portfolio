import React from 'react'
import styled from 'styled-components'

const FlashWrapper = styled.div`
    position:absolute;
    z-index:999;
    height:100vh;
    width:100vw;
    background:var(--errorBg__flash);
    top:0;
    left:0;
`

function ErrorFlash() {
    return (
        <FlashWrapper />
    )
}

export default ErrorFlash
