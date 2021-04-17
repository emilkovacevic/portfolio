import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

import Slide1 from './sections/Slide1'
import Slide2 from './sections/Slide2'
import Slide3 from './sections/Slide3'
import Slide4 from './sections/Slide4'
import Slide5 from './sections/Slide5'
import Slide6 from './sections/Slide6'
import Slide7 from './sections/Slide7'
import Slide8 from './sections/Slide8'
import Slide9 from './sections/Slide9'
import Slide10 from './sections/Slide10'


const SliderWrapper = styled.div`
background: var(--background);
background-size: 100vw 100vh;
min-height:80vh;
`
const CenteringComponent = styled.div`
min-height:100vh;
max-width:1200px;
margin:auto;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
text-align:center;
`
const SliderBtns = styled.div`
        margin:0 auto;
        visibility: visible;
        display:flex;
        width:100%;
        justify-content:space-between;
        @media(min-width: 1200px){
            max-width:1200px;
        }
`
const SliderBtn = styled(motion.div)`
    button{
        border:none;
        background:inherit;
        outline: none;
        margin:10px 1rem;
        padding: 10px;
        cursor:pointer;        
        font-size:2.5rem;
        @media(max-width: 960px){
            font-size:1.8rem;
        }
    }
`


const SlideControler = () => {
    const nextSliderDelay = 7
    const [section, setSection] = useState(1)

    useEffect(() => {
        const scrollHandler = (e) => {
            setTimeout(() => {
                let scrollPosition = Math.floor(e.deltaY)
                if (scrollPosition > 0 && section < 10) { setSection(section + 1) }
                else if (scrollPosition < 0 && section > 1) { setSection(section - 1) }
            }, 1000);
        }
        if(section === 6 || section === 7 || section === 10){
        return  window.removeEventListener('mousewheel', scrollHandler);
        }
        window.addEventListener('mousewheel', scrollHandler)
        return () => {
            window.removeEventListener('mousewheel', scrollHandler);
        };
    }, [section])


    useEffect(() => {
        const keyHandler = (e) => {
            const key = e.keyCode
            switch (key) {
                case 38 || 39:
                    if (section > 1) {
                        setSection(section - 1)
                    }
                    break;
                case 37 || 40:
                    if (section < 10) {
                        setSection(section + 1)
                    }
                    break;
                default:
                    break;
            }
        }
        window.addEventListener('keyup', keyHandler)
        return () => {
            window.removeEventListener('keyup', keyHandler);
        };
    }, [section])
    
    const revertSlidesBtn = (e) => {
        e.preventDefault()
        if(section === 1) return null
        setSection(section - 1)
    }

    const continueSlidesBtn = (e) => {
        e.preventDefault()
        if(section === 9) return null
        setSection(section + 1)
    }

    useEffect(() => {
        section === 9 && setTimeout(() => {
            setSection(section + 1)
        }, nextSliderDelay * 1000);
        return () => {
            clearTimeout()
        }
    }, [section])



    return (
        <SliderWrapper >
            <CenteringComponent>
                {section === 1 && <Slide1 />}
                {section === 2 && <Slide2 />}
                {section === 3 && <Slide3 />}
                {section === 4 && <Slide4 />}
                {section === 5 && <Slide5 />}
                {section === 6 && <Slide6 continueSlidesBtn={continueSlidesBtn} />}
                {section === 7 && <Slide7 continueSlidesBtn={continueSlidesBtn}/>}
                {section === 8 && <Slide8 />}
                {section === 9 && <Slide9 />}
                {section === 10 && <Slide10/>}
            <SliderBtns>
                {section === 1 || section === 10 ? <div/> : <SliderBtn whileHover={{scale: 1.25, transition:{delay:0.5}}}><button onClick={revertSlidesBtn}><i className="fa fa-backward" aria-hidden="true"></i></button></SliderBtn>}
                {section === 10 ? <div/> : <SliderBtn whileHover={{scale: 1.25, transition:{delay:0.5}}}><button onClick={continueSlidesBtn}><i className="fa fa-forward" aria-hidden="true"></i></button></SliderBtn>}
            </SliderBtns>
            </CenteringComponent>
        </SliderWrapper>
    )
}

export default SlideControler
