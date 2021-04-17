import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Map = styled.div`
position: absolute;
display: flex;
flex-wrap: wrap;
z-index: 999;
`
const ToggleButton = styled.div`
z-index: 99;
position: fixed;
font-size: 2rem;
top: 1.5rem;
left: 1.5rem;
cursor: pointer;
color: var(--button);
:hover {
  color: var(--button-hover);
  text-shadow: 0px 1px 1px var(--text);
}
@media (max-width: 320px) {
  width: 10%;
}
`


const MapItems = styled.div`
   background: var(--background); 
   min-width:100vw;
   min-height:100vh;
   position: fixed;
   display:flex;
   flex-direction:column;
   justify-content:center;
   transition: var(--menuTransitions) ease-in;
   opacity:${({isMap})=>(isMap ? '1' : '0')};
   top: ${({isMap})=>(isMap ? '0' : '-100vh')};
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
const NavLink = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:2em auto;
    text-align:center;
    font-size:1.5rem;
`

function SiteMap({handleClick, isMap}) {
    return (
        <Map>
            <ToggleButton onClick={handleClick}><span>{isMap ? <i className="fas fa-home"></i> : <i className="fas fa-map-signs"></i>}</span></ToggleButton>
            <MapItems isMap={isMap}>
                <NavLink onClick={handleClick} to='/'>HomePage</NavLink>
                <NavLink onClick={handleClick} to='/projects'>Projects</NavLink>
                <NavLink onClick={handleClick} to='/about'>About me</NavLink>
            </MapItems>
        </Map>
    )
}

export default SiteMap

