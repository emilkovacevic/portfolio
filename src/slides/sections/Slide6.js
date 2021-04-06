import React, {useState} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

import OpenImage from './helpers/OpenImage'

import netflixImg from '../../data/projects/Netflix/NetflixImg.jpg'
import netflixJokerImg from '../../data/projects/Netflix/NetflixJoker.JPG'
import netflixBrowse from '../../data/projects/Netflix/NetflixBrowse.JPG'

const Component = styled.div`
    min-height:100vh;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    p{
        margin:0.5em;
    }
    @media (max-width: 600px){
    position:relative;
    top:250px;
    }
    @media (max-width: 400px){
    top:350px;
    font-size:12px;
    *{
        font-size:12px;
    }
    }
`

const Heading = styled(motion.p)`
    margin:auto;
    color:var(--heading);
    font-size: 3rem;
    font-weight:600;
    margin: 1em;
    text-align:center;
    padding-bottom:0.5rem;
    border-bottom:2px solid var(--heading);
    @media (max-width: 600px){
        font-size: 1.8rem !important;
    }
    @media (max-width: 400px){
        font-size:12px;
    }
`

const Main = styled(motion.div)``

const Content = styled(motion.div)`
display:flex;
flex-wrap:wrap;
justify-content:center;
max-width:1200px;
button{
    margin:1em;
    cursor:pointer;
}
img{
    height:200px;
    width:200px;
    min-width:200px
    min-height:200px;
    min-width:200px;
    max-width:600px;
    margin:1em;
    object-fit:cover;
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
@media (max-width: 600px){
    font-size: 1.8rem !important;
}
`

function Slide5() {

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
        <OpenImage imgUrl={image} btnClick={handleClick} />
        :
        <Component>
            <Heading
                initial={{opacity: 0, y: "-50vh"}}
                animate={{opacity: 1, y:0, transition:{duration: 2}}}
                >With one of the coding tutorials I even made a Netflix clone.
                <br/>
                </Heading>
                <Main
                initial={{y: "50vh"}}
                animate={{y: 0, transition:{duration: 2}}}>
                    <Content
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 2.5}}}
                    >
                        <button onClick={handleClick}><img src={netflixImg} alt="netflix login"></img></button>
                        <button onClick={handleClick}><img src={netflixJokerImg} alt="netflix play"></img></button>
                        <button onClick={handleClick}><img src={netflixBrowse} alt="netflix browse"></img></button>
                    </Content>
                    <Footer>
                        <p className='emphasis'>This project was made using firebase, react, styled-components, fuse.js, react-router </p>
                        <p>As this is not a solely done project, but a part of a coding tutorial I decided not to include a demo or source code.</p>
                    </Footer>
                </Main>
        </Component>
        }
        </>
    )
}

export default Slide5