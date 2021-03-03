import React from 'react'
import styled from 'styled-components'

import Slide1 from './sections/Slide1'

const SliderWrapper = styled.div`
    background: var(--background);
    height:100vh;
    display:flex;
    flex-flow:column;
    justify-content:center;
`

function SlideControler() {
    return (
        <SliderWrapper>
            <Slide1></Slide1>
        </SliderWrapper>
    )
}

export default SlideControler
