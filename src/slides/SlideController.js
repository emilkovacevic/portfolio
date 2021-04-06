import React, {useState, useEffect}  from 'react'
import styled from 'styled-components'

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
min-height:100vh;
`
const CenteringComponent = styled.div`
height:100vh;
max-width:1200px;
margin:auto;
display:flex;
flex-direction:column;
justify-content: center;
align-items: center;
text-align:center;
owerflow:hidden;
`

function SlideControler() {
    const [section, setSection] = useState(1)

    useEffect(()=>{
        const scrollHandler = (e) =>{
            setTimeout(() => {
                let scrollPosition = Math.floor(e.deltaY)
                if(scrollPosition > 0 && section < 10) { setSection(section  + 1)}
                else if(scrollPosition < 0 && section > 1) { setSection(section - 1)}
                //console.log(`scrollPosition: ${scrollPosition} , section: ${section}`)
            }, 1000);
        }
        window.addEventListener('mousewheel', scrollHandler)
        return () => {
            window.removeEventListener('mousewheel', scrollHandler);
        };
    },[section])

    useEffect(()=>{
        const keyHandler = (e) =>{
            const key = e.keyCode
            switch (key) {
                case 38:
                    if(section > 1){
                        setSection(section - 1)
                    }
                    break;
                case 40:
                    if (section < 10){
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
    },[section])

    function handleClick(){
        if(section < 10){
            setSection(section + 1)
        }
    }
    return (
        <SliderWrapper onTouchMove={handleClick}>
            <CenteringComponent>
                {section === 1 && <Slide1 />}
                {section === 2 && <Slide2 />}
                {section === 3 && <Slide3 />}
                {section === 4 && <Slide4 />}
                {section === 5 && <Slide5 />}
                {section === 6 && <Slide6 />}
                {section === 7 && <Slide7 />}
                {section === 8 && <Slide8 />}
                {section === 9 && <Slide9 />}
                {section === 10 && <Slide10 />}
            </CenteringComponent>
        </SliderWrapper>
    )
}

export default SlideControler
