import React from 'react'
import styled from 'styled-components'
import {personal} from '../../data/data'
import ReadName from '../../components/ReadName'
const Wrapper = styled.div`
align-items: center;
text-align:left;
max-width: 800px;
margin: 0 auto;
max-width:600px;
`

function Slide1() {
    return (
        <Wrapper>
            <h2>Hello,</h2>
            <h1>My name is {personal.name} <ReadName></ReadName></h1>
            <p>Scroll down slowly</p>
        </Wrapper>
    )
}

export default Slide1
