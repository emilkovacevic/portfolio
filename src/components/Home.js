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
        bottom:4rem;
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
  margin: 1em;
  hr{
      border:1px solid var(--text);
      margin-top:1.4em;
  }
  h1{
      @media (max-width: 320px){ font-size: 1.2rem;}
  }
`;

const shake = keyframes`
0%{
  transform: translateX(-3px);
}
50%{
  transform: translateX(3px);
}
100%{
  transform: translateX(-3px);
}
`

const Button = styled.button`
position:relative;
  font-weight: 700;
  font-size: 3.5rem;
  margin: 1rem 0;
  cursor: pointer;
  color: var(--text);
  background:var(--button);
  border:none;
  outline:none;
  animation: ${shake} 5s infinite;
  :hover{
      background:var(--button-hover);
      animation-duration:0s;
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
