import React from "react";
import styled, {keyframes} from "styled-components";

const HomePage = styled.div`
  background: var(--background);
  color: var(--text);
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow:hidden;
`;
const Tags = styled.div`
    display:flex;
    :before,:after{
        font-size: 14rem;
        position:relative;
        bottom:5rem;
        color:var(--button)
    }
    :before{
        content:'{';
    }
    :after{
    content:'/}';
    }
    @media (max-width: 600px){
        :before, :after{
            content:'';
        }
    }
`
const Wrapper = styled.div`
  line-height: 1.4;
  margin: 0 1em;
  hr{
      border:1px solid var(--text);
      margin-top:1.4em;
      color: var(--text);
  }
  h1{
    color: var(--text);
    @media (max-width: 320px){ font-size: 1.2rem;}
  }
`;

const shake = keyframes`
0%{
  transform: translateX(0);
}
50%{
  transform: translateX(1em);
}
100%{
  transform: translateX(0);
}
`

const Button = styled.button`
position:relative;
  font-weight: 700;
  font-size: 3.5rem;
  margin: 1rem 0 0 0;
  cursor: pointer;
  color: var(--background);
  background:var(--button);
  border:none;
  border-radius: 10px;
  padding: 0 15px;
  outline:none;
  animation: ${shake} 8s infinite;
  transition: 0.8s;
  :hover{
      animation-play-state: paused;
      background:var(--background);
      color:var(--heading);
      transform: translateX(0px);
  }
  @media (max-width: 733px){ font-size: 2.5rem;}
  @media (max-width: 320px){ font-size: 1.4rem;}
`;


function Home({toggleSliders}) {
  return (
    <HomePage>
      <Tags>
        <Wrapper>
            <h1>Wellcome to an animated web developers portfolio</h1>
            <hr></hr>
            <Button onClick={toggleSliders}>Click Me To Enter</Button>
        </Wrapper>
      </Tags>  
    </HomePage>
  );
}

export default Home;
