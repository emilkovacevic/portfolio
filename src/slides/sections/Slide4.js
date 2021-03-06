import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import CallToAction from './helpers/CallToAction'

const Component = styled.div`
padding:0 1em;
margin:0;
    p{
        margin:0.5em;
        padding:0 1em;
        @media (max-width: 720px){
          font-size:1.25rem;
        }
    }
    a{
      @media (max-width: 720px){
      font-size:1.35rem;
      padding:0;
    }
    span{
      font-size:4rem;
      @media (max-width: 720px){
        font-size:2.25rem;
      }
    }
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
    a{
      font-size: 2rem !important;
      color:var(--button);
      :hover,:focus{
       color:var(--links);
       text-transform:uppercase;
      }
    }
`

function Slide5() {
    return (
        <Component>
            <Heading
                initial={{opacity: 0, x:"-50vw"}}
                animate={{opacity: 1,x:"0", transition:{duration: 2}}}
                >
                In December of 2020 I enrolled an online learning program.<br/>
                </Heading>
                <CallToAction>
                  <a href='https://scrimba.com/learn/frontend' target="_blank" rel="noreferrer">The Frontend Developer Career Path.</a>
                </CallToAction>
                <Heading
                initial={{opacity: 0, x:"50vw"}}
                animate={{opacity: 1, x:"0", transition:{duration: 2}}}
                >
                  It is on <a href="https://scrimba.com" target="_blank" rel="noreferrer" ><span>scrimba.com</span></a>
                </Heading>
        </Component>
    )
}

export default Slide5