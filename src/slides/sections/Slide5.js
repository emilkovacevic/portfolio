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
    text-align:left;
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
                initial={{opacity: 0, scale:0}}
                animate={{opacity: 1, scale:1, transition:{duration: 2}}}
                >
                    <p
                    style={{margin:"0 0 0.5em 0"}}
                    >I learned a lot following the courses.</p>
                    <ul>
                        <li>
                            They included things like HTML and CSS,
                        </li>
                        <li>
                            Creating games with JavaSript,
                        </li>
                        <li>
                            Using APIs and making UI designs,
                        </li>
                        <li>
                            Working with React and Firebase.
                        </li>
                    </ul>
                </Heading>
        </Component>
    )
}

export default Slide5
