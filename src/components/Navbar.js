import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {personal} from '../data/data'

const Nav = styled.nav`
    display:flex;
    flex-wrap:wrap;
    position:absolute;
    z-index:99;
`
const ToggleButton = styled.div`
    z-index:999;
    font-size:2rem;
    position:fixed;
    top:1.5rem;
    right:1.5rem;
    cursor:pointer;
    color: var(--button);
    :hover{
        color: var(--button-hover);
    }
    @media (max-width: 320px){ width:10%;}
`

const NavItems = styled.div`
   background: var(--background); 
   min-width:100vw;
   min-height:100vh;
   display:grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
   position: absolute;
   transition: var(--menuTransitions) ease-in;
   opacity:${({isVisible})=>(isVisible ? '1' : '0')};
   top: ${({isVisible})=>(isVisible ? '0' : '-100vh')};
   a{
       color: var(--text);
       text-decoration:none;
   }
   a:hover{
       text-decoration:underline;
   }
   @media (max-width: 480px){
    grid-template-columns: 1fr; 
    min-height:100%;
    text-align: center;
   }

`

const ExternalLinks = styled.div`
    border-left:2px solid var(--text);
    @media (max-width: 400px){
        border-left:none; 
    }
`

const NavLink = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:2em auto;
    text-align:center;
    font-size:1.5rem;
`
const NavLinkExternal = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:2em auto;
    text-align:center;
    font-size:1.5rem;
`

const Name = styled.div`
   margin:0 auto;
   font-weight:700;
   a{  
       font-size: 3rem; 
       text-align:left; 
       text-decoration:none;
       margin:1em;
        @media (max-width: 400px){
            text-align:center;
            font-size: 2rem; 
            margin-top:2em;
        }
    }
}
`
const Description = styled.span`
    margin: 3em;
    position:relative;
    bottom:1em;
    border-top:1px solid var(--text);
    padding-top:1em;
    color:var(--text);
    @media (max-width: 480px){
        border:unset;
    }
`
const HorizontalBreak = styled.hr`
    border: 1px solid var(--text);
    width:50%;
    margin: auto;
`

function Navbar({name, handleClick, isVisible}) {

    return (
        <Nav>
            <ToggleButton onClick={handleClick}><span>{isVisible ? <i className="fas fa-window-close"></i> : <i className="fas fa-bars"></i>}</span></ToggleButton>
            <NavItems isVisible={isVisible}>
            <Name>
                <NavLink to='/'>{name}
                </NavLink>
                <Description> web developer portfolio</Description>
            </Name>
            <ExternalLinks>
                <NavLink to='/about'>About me</NavLink>
                <HorizontalBreak />
                <NavLinkExternal href={personal.github.link} target="_blank" rel="noreferrer">{personal.github.name}</NavLinkExternal>
                <NavLinkExternal href={personal.linkedin.link} target="_blank" rel="noreferrer">{personal.linkedin.name}</NavLinkExternal>
                <NavLink to='/cv'>CV</NavLink>
                <HorizontalBreak />
                <NavLink to='/sitemap'>SiteMap</NavLink>
            </ExternalLinks>
            </NavItems>
        </Nav>
    )
}

export default Navbar
