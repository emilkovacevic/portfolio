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

const Heading = styled(motion.p)`
    margin:auto;
    color:var(--heading);
    font-size: 3rem;
    font-weight:600;
    margin: 1em;
    text-align:center;
    padding-bottom:0.5rem;
    article{
        text-align:left;
        p{
            font-size:0.5em;
        }
    }
`


function Slide9() {
    const delay = 0.25;
    const [flash, setFlash] = useState(true)
  
    useEffect(() => {
      let flashTimer = setTimeout(() => setFlash(false), delay * 1000);
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
                animate={{opacity: 1, transition:{duration: 2}}}
                ><article>
                    <p>..Err...? What was that ? </p><br></br>
                    ...most important thing of them all...
                </article>
                </Heading>
        }
        </Component>
    )
}

export default Slide9

