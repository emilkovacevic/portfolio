import React from 'react'
import styled from 'styled-components'


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
function Slide10() {

    // const {animation, setAnimation} = useState(true)
    
    // useEffect(() => {
    //     setInterval(() => {
    //         setAnimation(!animation)
    //     }, 5000);
    //     return () => {
    //        clearTimeout()
    //     }
    // }, [animation, setAnimation])


    return (
        <Component>
            <h2>Oh No!</h2>
            <h1>Something went wrong</h1>
            <h1>CONTACT ME</h1>
            <br></br>
            <p>ADD HERE Contact links</p>
        </Component>
    )
}

export default Slide10

