import React, {useState, useEffect}  from 'react'
import styled from 'styled-components'

import Slide1 from './sections/Slide1'
import Slide2 from './sections/Slide2'
import Slide3 from './sections/Slide3'
import Slide4 from './sections/Slide4'
import Slide5 from './sections/Slide5'

const SliderWrapper = styled.div`
    background: var(--background);
    height:100vh;
    display:flex;
    flex-flow:column;
    justify-content:center;
`

function SlideControler() {

    const [section, setSection] = useState(1)
    useEffect(()=>{
        const scrollHandler = (e) =>{
            setTimeout(() => {
                let scrollPosition = Math.floor(e.deltaY)
                if(scrollPosition > 0 && section < 5) { setSection(section  + 1)}
                else if(scrollPosition < 0 && section > 1) { setSection(section - 1)}
                //console.log(`scrollPosition: ${scrollPosition} , section: ${section}`)
            }, 1500);
        }

        window.addEventListener('mousewheel', scrollHandler)
        return () => {
            window.removeEventListener('mousewheel', scrollHandler);
        };
    },[section])

    return (
        <SliderWrapper className='sliderWrap'>
            {section === 1 && <Slide1 />}
            {section === 2 && <Slide2 />}
            {section === 3 && <Slide3 />}
            {section === 4 && <Slide4 />}
            {section === 5 && <Slide5 />}
        </SliderWrapper>
    )
}

export default SlideControler
