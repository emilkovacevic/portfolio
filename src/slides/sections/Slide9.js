import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import ErrorFlash from './helpers/ErrorFlash'


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

const Heading = styled(motion.div)`
    margin:auto;
    color:var(--heading);
    font-size: 3rem;
    font-weight:600;
    margin: 1em;
    text-align:center;
    padding-bottom:0.5rem;
    article{
        text-align:left;
        width:600px;
        @media (max-width: 1025px){
            font-size:1.5rem;
        }
    }
`


function Slide9() {
    
    const flashDelay = 0.8;
    const [flash, setFlash] = useState(true)
  
    useEffect(() => {
      let flashTimer = setTimeout(() => setFlash(false), flashDelay * 1000);
      return () => {
        clearTimeout(flashTimer);
      };
    }, []);

    return (
        <Component>
             {flash ? 
          <ErrorFlash></ErrorFlash>
          :
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 1.5}}}
                ><article>
                    <motion.p
                         initial={{opacity: 1, scale: 10, }}
                         animate={{opacity: 0, scale:0, transition:{duration: 2}}}
                         style={{
                             textAlign:'center'
                         }}
                    >Err...? What was that?</motion.p>
                    <motion.p className="main-message"
                     initial={{opacity: 0, x:"120%", scale:1.25}}
                     animate={{opacity: 1, x: 0, transition:{duration:5.5}}}
                    >
                       I want to say...
                       <br/>the most important thi $ * ?
                       <br/>
                        ~ 32?FFF#a@ -9*s
                        !-sdaa#fs</motion.p>
                </article>
                </Heading>
        }
        </Component>
    )
}

export default Slide9

