import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Button = styled(motion.button)`
background:unset;
box-shadow: 0px 1px 10px 5px var(--text);
border-top:none;
border-radius:0 0 0.5em 0.5em;
cursor:pointer;
outline:none;
position:fixed;
left: 47.5%;
z-index:99;
padding:0;
top:0;
font-size:2em;
i{  
    padding: 1.5rem 1em 0.5em 1em;
    text-aling:center;
    margin:0;
    text-shadow: 0px 2px 2px orange;
    animation-duration: 3s;
}
:hover{
    color:var(--button-hover);
    transform: translateY(5px);
}
`

//FIX THIS FRAMER MOTION!
function ContactBtn() {
    return (
        <Button
            onHover={{top: 20, transition:{duration: 1.5}}} 
        >
            <i className="fas fa-envelope-open-text"></i>
        </Button>
    )
}

export default ContactBtn
