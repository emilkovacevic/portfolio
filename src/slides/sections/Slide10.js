import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'


import ErrorFlash from './helpers/ErrorFlash';
import {personal} from '../../data/data'
import ContactForm from '../../components/contact/ContactForm'

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button{
      font-size:2rem;
      cursor:pointer;
  }
  a{
      margin:2em 1em;
  }
  i{
    font-size: 1.8rem;
    margin:2em 1em;
  }
  .links{
      display:flex;
      flex-wrap:wrap;
      margin:auto;
      justify-content:center;
      align-items:center;
      *{
          display:block;
          color: var(--text);
          text-decoration:none;
          :hover, :focus{
            color: var(--heading);
            font-weight:600;
          }
      }
  }
  .routes{
      display:flex;
      flex-wrap:wrap;
      flex-direction:row;
  }
  @media (max-width: 1025px){
        min-height:1400px !important;
    }
`;

const ErrorWrapper = styled(motion.div)``

function Slide10() {

    const flashDelay = 1.5;
    const [flash, setFlash] = useState(true)
  
    useEffect(() => {
      let flashTimer = setTimeout(() => setFlash(false), flashDelay * 1000);
      return () => {
        clearTimeout(flashTimer);
      };
    }, []);

    const [form, setForm ] = useState(false)

    const handleForm = (e) => {
        e.preventDefault()
        setForm(!form)
    }

    return (
        <>
        {flash ? 
            <ErrorWrapper>
                <ErrorFlash />
            </ErrorWrapper> 
        :
        <Component>
            <h3>Oh No!</h3>
            <h2>Something went wrong</h2>
            <p>Do you want to know more?</p>
            <br/>
            <button onClick={handleForm}>Contact Me</button>
            <h1
            style={{
            borderBottom: "1px solid var(--text)",
            margin:"1em 0 1em 0"}}
            >Site Map</h1>
           <div>
               <div className="links">
               <div className='routes'>
                   <a href={personal.github.link} target="_blank" rel="noreferrer"><div><i className="fab fa-github-square"/>Github</div></a>
                   <a href={personal.linkedin.link} target="_blank" rel="noreferrer"><div><i className="fab fa-linkedin"/>Linked In</div></a>
                   <a href={"mailto:" + personal.mail.link} target="_blank" rel="noreferrer"><div> <i className="fas fa-envelope-open-text"/>E-mail </div></a>
                </div>
                <div className='routes'>
                   <Link to='/projects' target="_blank" rel="noreferrer"><i className="fas fa-hammer"></i>Projects</Link>
                   <Link to='/about' target="_blank" rel="noreferrer"><i className="fas fa-user"></i>About</Link>
                   <Link to='/cv' target="_blank" rel="noreferrer"><i className="far fa-file"></i>CV</Link>
               </div>
               </div>
           </div>
           {form && <ContactForm onClick={setForm}></ContactForm>}
        </Component>
        }
        </>
    )
}

export default Slide10

