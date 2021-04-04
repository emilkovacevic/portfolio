import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import dd from '../../data/misc/dd.jpg'


const Component = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
      width:500px;
  }
`;
function Slide5() {

    const {animation, setAnimation} = useState(true)
    
    useEffect(() => {
        setInterval(() => {
            setAnimation(!animation)
        }, 5000);
        return () => {
           clearTimeout()
        }
    }, [animation, setAnimation])


    return (
        <Component>
            {animation ? 
            <>
                <h2>OH NO!</h2>
                <p>SOMETHING GOT WRONG</p>
                <img src={dd} alt='' ></img>
            </>
            : <h3>BUT THE MOST IMPORTAT THING OF ALL...</h3>
        }
        </Component>
    )
}

export default Slide5
