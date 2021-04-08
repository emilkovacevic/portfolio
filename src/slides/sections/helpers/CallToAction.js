import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Action = styled(motion.div)`
font-size:2rem;
text-transform:uppercase;
a{
    text-decoration:none;
    color:var(--headline);
    background:var(--button);
    color: var(--background);
    padding:1rem;
    font-weight:600;
    transition: 0.4s;
    :focus,:hover{
        background:var(--background);
        color:var(--heading);
    }
}
@media (max-width: 720px){
    font-size:1rem;
  }
`

function CallToAction(props) {
    return (
        <Action
            initial={{opacity: 0}}
            animate={{opacity: 1, transition:{duration: 2.25}}}>
            {props.children}
        </Action>
    )
}

export default CallToAction
