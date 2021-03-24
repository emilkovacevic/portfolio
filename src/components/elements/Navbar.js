import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { personal } from "../../data/data";

const Nav = styled.nav`
  position: absolute;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  z-index: 99;
`;
const ToggleButton = styled.div`
  z-index: 999;
  position: fixed;
  font-size: 2rem;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: var(--button);
  :hover {
    color: var(--button-hover);
    text-shadow: 0px 1px 1px var(--text);
  }
  @media (max-width: 320px) {
    width: 10%;
  }
`;

const NavItems = styled.div`
  background: var(--background);
  min-width: 100vw;
  min-height: 100vh;
  height:100%;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: fixed;
  transition: var(--menuTransitions) ease-in;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  top: ${({ isVisible }) => (isVisible ? "0" : "-100vh")};
  h4{
    font-size: 2rem;
    margin-bottom: 0.5em;
  }
    a{  
      color: var(--text);
      text-decoration: none;
      font-size: 2rem; 
      text-align:left; 
  }
  i {
    font-size: 1.8rem;
    color: var(--text);
  }
  a:hover {
    transform: scale(1.04);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    text-align: center;

    a{
      text-align:center;
      margin:1em 0;
      font-size: 1rem; 
    }
  }
  @media (max-width: 320px) {
    font-size:1rem;
    *{
      font-size:1rem;
      margin-bottom:0;
    }
  }
`;

const ExternalLinks = styled.div`
  border-left: 2px solid var(--text);
  @media (max-width: 400px) {
    border-left: none;
    display:flex;
    min-width: 240px;
    justify-content:space-evenly;
    *{margin: 0 1em;}
  }
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em auto;
  text-align: center;
  font-size: 1.5rem;
`;
const NavLinkExternal = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2em auto;
  text-align: center;
  font-size: 1.5rem;
`;

const Name = styled.div`
   margin:0 auto;
   font-weight:700;
   font-size:1.5rem;
   @media (max-width: 680px) {
    margin-top:2em;
   }
}
`;
const Description = styled.span`
  margin: 3em;
  position: relative;
  bottom: 1em;
  border-top: 1px solid var(--text);
  padding-top: 0.5em;
  color: var(--text);
  word-break: break-word;
  @media (max-width: 680px) {
    border-top: none;
    display:block;
    margin: 0.5em 2rem;
    padding: 0;
    text-align:center;
  }
`;
const HorizontalBreak = styled.hr`
  width: 50%;
  margin: auto;
`;

function Navbar({ name, handleClick, isVisible }) {
  return (
    <Nav>
      <ToggleButton onClick={handleClick}>
        <span>
          {isVisible ? (
            <i className="fas fa-home"></i>
          ) : (
            <i className="fas fa-address-card"></i>
            )}
        </span>
      </ToggleButton>
      <NavItems isVisible={isVisible}>
        <Name>
          <NavLink to="/">
              <h4 onClick={handleClick}>{name}</h4>
          </NavLink>
          <Description> web developer portfolio</Description>
        </Name>
        <ExternalLinks>
          <NavLinkExternal
            onClick={handleClick}
            href={personal.github.link}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
            {personal.github.name}
          </NavLinkExternal>
          <HorizontalBreak />
          <NavLinkExternal
            onClick={handleClick}
            href={personal.linkedin.link}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            {personal.linkedin.name}
          </NavLinkExternal>
          <HorizontalBreak />
          <NavLink onClick={handleClick} to="/cv">
            <i className="fas fa-paperclip"></i>CV
          </NavLink>
        </ExternalLinks>
      </NavItems>
    </Nav>
  );
}

export default Navbar;
