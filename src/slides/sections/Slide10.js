import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import ErrorFlash from './helpers/ErrorFlash';
import {personal} from '../../data/data'
import ContactForm from '../../components/contact/ContactForm'

const Component = styled.div`
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  height:100vh;
  min-height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button{
      font-size:2rem;
      cursor:pointer;
      
    :hover, :focus{
        color: var(--heading);
        transform:scale(1.25);
        color:blue;
      }
  }
  a{
      margin:0 1em;
  }
  h5, i{
    font-size: 1.8rem;
    margin: 0.5em 1em ;
    a{
        color:var(--links);
        :hover, focus{
            color: var(--heading);
        }
    }
  }
  p{
    padding-top:1.5em;
  }
  .links{
      display:flex;
      flex-wrap:wrap;
      margin:0 auto;
      justify-content:center;
      align-items:center;
      *{
          display:block;
          color: var(--text);
          text-decoration:none;
      }
  }
  .routes{
      display:flex;
      flex-wrap:wrap;
      flex-direction:row;
      justify-self:center;
      align-self:center;
      margin:16px 0;
      a,div,i{
        :hover, :focus{
            color: var(--heading);
            transform:scale(1.25);
            color:blue;
          }
      }
  }
  @media (max-width: 1024px){
    display:block;
    position:relative;
    padding-bottom:2em;
    padding-top:100px;
    display:flex;
    align-items:center;
    i{
        font-size:0.8rem;
    }
    @media (max-height: 800px){
        top:50px;
        overflow:scroll;
        position:absolute;
    }
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
            <h2>Oh No!</h2>
            <h2>Looks like the presentation is over :(</h2>
            <p>You can contact me</p>
            <br/>
            <br/>
            <button onClick={handleForm}>Contact Me</button>
            <h1
            style={{
            borderBottom: "1px solid var(--text)",
            margin:"1em 0 1em 0"}}
            >
            Site Map</h1>
           <div>
               <div className="links">
               <div className='routes'>
                   <a href={personal.github.link} target="_blank" rel="noreferrer"><div><i className="fab fa-github-square"/>Github</div></a>
                   <a href={personal.linkedin.link} target="_blank" rel="noreferrer"><div><i className="fab fa-linkedin"/>Linked In</div></a>
                   <a href={"mailto:" + personal.mail.link} target="_blank" rel="noreferrer"><div> <i className="fas fa-envelope-open-text"/>E-mail </div></a>
                </div>
                <div className='routes'>
                   <Link to='/projects' target="_blank" rel="noreferrer"><i className="fas fa-hammer"></i>Projects</Link>
                   <Link to='/about' target="_blank" rel="noreferrer"><i className="fas fa-user"></i>About Me</Link>
                   <Link to='/cv' target="_blank" rel="noreferrer"><i className="far fa-file"></i>CV</Link>
               </div>
               </div>
           </div>
           {form && <ContactForm onClick={setForm}></ContactForm>}
           <h5>The website source code =<a href="https://github.com/emilkovacevic/portfolio" target="_blank" rel="noreferrer">#Code</a></h5>
           <p>*The error event was an intentional design choice*</p>
           <br/>
           <a href="http://emilkovacevic.com/">reset</a>
        </Component>
        }
        </>
    )
}

export default Slide10

