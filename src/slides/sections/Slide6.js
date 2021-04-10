import React, {useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

import OpenImage from './helpers/OpenImage'

import netflixImg from '../../data/projects/Netflix/NetflixImg.jpg'
import netflixJokerImg from '../../data/projects/Netflix/NetflixJoker.JPG'
import netflixBrowse from '../../data/projects/Netflix/NetflixBrowse.JPG'

const Component = styled.div`
    max-width: var(--app-max-width);
    margin:0 auto;
    display:block;
    position:absolute;
    left:0;
    right:0;
    top:120px;
    bottom:0;
    min-height:100vh;
    p{
        margin:0.5em;
    }
    button{
        margin:0;
        cursor:pointer;
    }
    .continue-btn{
        font-size:20px;
        border:none;
        background:var(--background);
        text-transform: uppercase;
        text-decoration:underline;
        color: var(--text);
        opacity:0.8;
    }
    
    @media (max-width: 600px){
    top:110px;
    padding-bottom:20px;
    }
    @media (max-width: 400px){
        font-size:12px;
        *{
            font-size:12px;
        }
    }
`

const Heading = styled(motion.p)`
    color:var(--heading);
    font-size: 2.5rem;
    font-weight:600;
    margin: 1em;
    text-align:center;
    padding-bottom:0.5rem;
    border-bottom:2px solid var(--heading);
    @media (max-width: 1024px){
        font-size: 1.8rem !important;
    }
    @media (max-width: 400px){
        font-size:12px;
    }
`

const Main = styled(motion.div)``

const Content = styled(motion.div)`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
gap: 10px;
img{
    height:200px;
    width:100%;
    object-fit:fill;
}
`
const Footer = styled.div`
p{
    margin:0.5em 0;
}
.emphasis{
    font-size:1.5rem;
    width:100%;
}
@media (max-width: 1024px){
    font-size: 1.8rem !important;
    padding: 0 0 200px 0;
    
}
`

function Slide5({continueSlidesBtn}) {

    const [imageOpen, setImageOpen] = useState(false)
    const [image, setImage] = useState(null)

    const handleClick = (e) =>{
        e.preventDefault()
        setImage(e.target.src)
        setImageOpen(!imageOpen)
    }

    return (
        <>
        { imageOpen ? 
        <OpenImage imgUrl={image} handleClick={handleClick} />
        :
        <Component>
            <Heading
                initial={{opacity: 0, y: "-50vh"}}
                animate={{opacity: 1, y:0, transition:{duration: 1.5}}}
                >With one of the coding tutorials I even made a Netflix clone.
                <br/>
                </Heading>
                <Main
                initial={{y: "50vh"}}
                animate={{y: 0, transition:{duration: 1.5}}}>
                    <Content
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 2}}}
                    >
                        <button onClick={handleClick}><img src={netflixImg} alt="netflix login"></img></button>
                        <button onClick={handleClick}><img src={netflixJokerImg} alt="netflix play"></img></button>
                        <button onClick={handleClick}><img src={netflixBrowse} alt="netflix browse"></img></button>
                    </Content>
                    <Footer>
                        <p className='emphasis'>This project was made using firebase, react, styled-components, fuse.js, react-router </p>
                        <p>As this is not a solely done project, but a part of a coding tutorial I decided not to include a demo or source code.</p>
                        <motion.button 
                        whileHover={{
                            scale:1.1,
                            color: "var(--text)",
                            opacity:1
                        }}
                        onClick={continueSlidesBtn} className="continue-btn">continue onwards
                        </motion.button>
                    <div>
                    <motion.i
                     animate={{
                        scale: [1.5, 1.5, 2.5, 2.5, 1.5],
                        y:[20, 0, 20]
                        
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        loop: Infinity,
                        repeatDelay: 1
                    }}
                    className="fas fa-hand-pointer" aria-hidden="true"></motion.i>
                    </div>             
                    </Footer>
                </Main>
        </Component>
        }
        </>
    )
}

export default Slide5