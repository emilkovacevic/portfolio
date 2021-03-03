import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {personal} from '../data/data'

const Nav = styled.nav`
    display:flex;
    position:absolute;
    z-index:99;
`
const ToggleButton = styled.div`
z-index:999;
font-size:2rem;
position:fixed;
right:1em;
top:1rem;
cursor:pointer;
color: var(--button);
`

const NavItems = styled.div`
   background: var(--background); 
   width:100vw;
   height:100vh;
   display:grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
   position: absolute;
   transition: .3s ease-in;
   opacity:${({isVisible})=>(isVisible ? '1' : '0')};
   top: ${({isVisible})=>(isVisible ? '0px' : '-100vh')};
   a{
       color: var(--text);
       text-decoration:none;
   }
   a:hover{
       text-decoration:underline;
   }
   @media (max-width: 400px){
    grid-template-columns: 1fr; 
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
    }
}
`
const Description = styled.span`
    margin:0 3em;
    position:relative;
    bottom:1em;
    border-top:1px solid var(--text);
    padding-top:1em;
    color:var(--text);
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
                <NavLinkExternal href={personal.github.link} target="_blank" rel="noreferrer">{personal.github.name}</NavLinkExternal>
                <NavLinkExternal href={personal.linkedin.link} target="_blank" rel="noreferrer">{personal.linkedin.name}</NavLinkExternal>
                <NavLink to='/cv'>CV</NavLink>
            </ExternalLinks>
            </NavItems>
        </Nav>
    )
}

export default Navbar
