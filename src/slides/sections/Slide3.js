import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Component = styled.div`
font-size: 2.5rem !important;
@media(max-width:600px){
    font-size: 1.8rem !important;
}
`

const Heading = styled(motion.p)`
    margin:auto;
    color:var(--heading);
    font-size: inherit;
    font-weight:600;
    margin: 0 1em;
    text-align:center;
    padding-bottom:1.5rem;
    border-bottom:2px solid var(--heading);
    a{
        color:var(--button);
        :hover,:focus{ color:var(--links);}
    }
    @media(max-width:600px){
            font-size: 1.8rem;
            text-align:left;
            padding-top:2em;
    }
`
const Main = styled(motion.p)`
    color:var(--heading);
    font-size: 2rem;
`

const Aside = styled(motion.aside)`
font-size: 1.5rem;
color:var(--heading);
`

function Slide3() {
    return (
        <Component>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 1.5}}}
                >In the summer of 2020 I started learning web development.
                <br/>
                 I began with free online resources like <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">freecodecamp</a> 
                <span> and YouTube coding videos.</span>
                </Heading>
                <Main
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
                >I was hooked - pun intended
                </Main>
                <div>
                <Aside
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2.25}}}
                ><div>😄</div></Aside>
                </div>
        </Component>
    )
}

export default Slide3