import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import netflixImg from '../../data/projects/Netflix/NetflixImg.jpg'

const Component = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    p{
        margin:0.5em;
    }
`

const Heading = styled(motion.p)`
    margin:auto;
    color:var(--heading);
    font-size: 3rem;
    font-weight:600;
    margin: 1em;
    text-align:center;
    padding-bottom:0.5rem;
    border-bottom:2px solid var(--heading);
`
const Instruction = styled(motion.div)`

img{
    height:400px;
    width:400px
    max-width:600px;
}
`

function Slide5() {
    return (
        <Component>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
                >With them I even made a Netflix clone.
                <br/>
                </Heading>
                <Instruction
                 initial={{opacity: 0}}
                 animate={{opacity: 1, transition:{duration: 6}}}
                >
                    <img src={netflixImg} alt="netflix img"></img>
                    <div>
                        link link
                    </div>
                </Instruction>
        </Component>
    )
}

export default Slide5