import React from 'react'
import styled from 'styled-components'


const Image = styled.div`
display:flex;
flex-direction:column;
margin:auto;
button{padding:1em; margin:1em 0; cursor:pointer;}
img{width:100%;}
`

function OpenImage({imgUrl, handleClick}) {
    return (
        <Image>
            <button onClick={handleClick}>close</button>
            <img src={imgUrl} alt="netflix"></img> 
        </Image>
    )
}

export default OpenImage
