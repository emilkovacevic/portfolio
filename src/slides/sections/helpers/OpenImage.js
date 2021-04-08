import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'


const Image = styled.div`
display:flex;
flex-direction:column;
margin:auto;
button{
    align-self:center;
    padding:1em;
    margin:1em 0;
    cursor:pointer;
    border:none;
    font-size:2rem;
    background:none;
    outline:none;
    }
img{
    margin:auto;
    width:80%;
    height:100%;
}
`

function OpenImage({imgUrl, handleClick}) {
    return (
        <Image>
            <motion.button 
            whileHover={{  scale: [1, 2, 2, 2, 2], rotate: [0, -380], transition:{duration: 2}}}
            onTap={{scale: [1, 2], transition:{duration:2}}}
            onClick={handleClick}><i className="fas fa-undo"></i></motion.button>
            <img src={imgUrl} alt="netflix"></img> 
        </Image>
    )
}

export default OpenImage
