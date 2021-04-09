import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'



const Component = styled.div`
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
    a{
      color:var(--button);
      :hover,:focus{
        transform: scale(1.02);
      }
    }
`

function Slide8() {

  const [animation, setAnimation] = useState(true)

  useEffect(() => {
    const loadingAnimation = setTimeout(() => {
      setAnimation(false)
    }, 3000);
    return () => {
      clearTimeout(loadingAnimation)
    }
  }, [])

    return (
      <Component>
            <Heading
                initial={{opacity: 0}}
                animate={{opacity: 1, transition:{duration: 2}}}
                >But, the most important thing is...
                </Heading>

                {animation ?
                <br style={{fontSize:"1.5rem", padding:0, margin:0}}/>
                :

                <div
                style={{fontSize:"1.5rem", opacity: "0.8", padding:0, margin:0}
                }
                > 
                Please, continue scrolling</div>
                
                }
        </Component>
    )
}


export default Slide8;
