import React from 'react'
import styled from 'styled-components'


const Image = styled.div`
display:flex;
flex-direction:column;
`

function OpenImage(props) {
    return (
        <Image>
            <button onClick={props.handleClick}>close</button>
            <img src={props.mage} alt="netflix"></img> 
        </Image>
    )
}

export default OpenImage
