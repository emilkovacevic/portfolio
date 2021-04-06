import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const Component = styled.div`
    p{
        margin:0.5em;
    }
`

const Heading = styled(motion.div)`
    margin:auto;
    color:var(--heading);
    font-size: 3rem;
    font-weight:600;
    margin: 1em;
    padding-bottom:0.5rem;
    text-align:justify;
    @media (max-width: 600px){
        font-size: 1.8rem !important;
    }
    @media (max-width: 320px){
        font-size: 1.2rem !important;
    }
`

function Slide5() {
    return (
        <Component>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
                >
                    <ul>
                        <li>
                            I learned a lot following their courses.
                        </li>    
                        <li>
                            I went trought things like html and css.
                        </li>
                        <li>
                            Using APIs and UI design,  
                            making games with javascript.
                            Using modern React with Firebase.
                        </li>
                    </ul>
                </Heading>
        </Component>
    )
}

export default Slide5
