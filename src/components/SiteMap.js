import React from 'react'
import {Link, Route} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'

const MapLink = styled(Link)`
    z-index:99;
    font-size:2rem;
    cursor:pointer;
    color: var(--button);
    border:none;
    background: transparent;
    position:fixed;
    top:1.5rem;
    left:1.5rem;
    :hover{
    color: var(--button-hover);
    }
}
`

const mountAnimation = keyframes`
    from{transform:scale(0)}
    to{transform:scale(1)}
`

const SiteMapContainer = styled.div`
    position:absolute;
    z-index: 999;
    height:100%;
    width: 100%;
    background: var(--background);
    animation: ${mountAnimation} var(--menuTransitions) ease-out;
`
const GoHome = styled(Link)`
    position: absolute;
    top:1.5rem;
    left:1.5rem;
    font-size: 2rem;
    color: var(--button);
    :hover{
        color: var(--button-hover);
        }
`

const Wrapper = styled.div`
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    h2{
        font-size: 3rem;
        color: var(--text);
    }
    div{
        margin: 4em auto;
        display:flex;
        flex-wrap:wrap;
        @media(max-width: 480px){
            justify-content:center;
        }
    }
    div a{
        margin: 1em;
        padding: 1em;
        border: 1px solid var(--text);
        border-radius: 0.5em;
        color: var(--text);
        text-decoration:none;
        text-transform: uppercase;
        font-weight:600;
        :hover{ background: var(--button-hover);}

    }
`

function SiteMap() {
    return (
<>
    <MapLink to='/sitemap' >
        <i className="fas fa-map-signs"></i>
    </MapLink>
    <Route path='/sitemap' component={()=>{
            return(
                <SiteMapContainer>
                    <GoHome to='/'><i className="fas fa-home"></i></GoHome>
                    <Wrapper>
                        <h2>SiteMap</h2>
                        <div>
                            <Link to='/about'>About</Link>
                            <Link to='/projects'>Projects</Link>
                            <Link to='/contact'>Contact</Link>
                        </div>
                    </Wrapper>
                </SiteMapContainer>
            )
        }
        }
     />
</>
    )
}

export default SiteMap
