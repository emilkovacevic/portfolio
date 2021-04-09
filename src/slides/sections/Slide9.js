import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import ErrorFlash from './helpers/ErrorFlash'


const Component = styled.div`
    overflow:hidden;
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
    .main-message{
        @media (max-width:600px){
            font-size:1.25rem;
            margin:1em auto;
            max-width:650px;
            width:80vw;
        }
    }
`


function Slide9() {
    
    const flashDelay = 1.5;
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
                ><article
                style={{
                    position:"absolute",
                    height:"100vh",
                    width:"100vw",
                    top:0,
                    left:0,
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center"
                    }}>
                    <motion.p
                         initial={{opacity: 1, scale: 10, }}
                         animate={{opacity: 0, scale:0, transition:{duration: 3.8}}}
                    >Err...? What was that?</motion.p>
                    <motion.p className="main-message"
                     initial={{opacity: 0, x:"1050px", scale:1.25}}
                     animate={{opacity: 1, x: "0", transition:{duration:8.5}}}
                    >
                       I want to say...the most important  <br/>this.$ * ?
                        Failed to load resource: net::ERR_BLOCKED_BY_CREATOR
                      </motion.p>
                </article>
                </Heading>
        }
        </Component>
    )
}

export default Slide9

