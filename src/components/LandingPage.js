import React, {useState} from 'react'
import SlideController from '../slides/SlideController'
import Home from './home/Home'
function LandingPage() {
      // Slides State
  const [areSliders, setSliders] = useState(false)
  const toggleSliders = () =>{
    setSliders(!areSliders)
  }
    return (
        <div>
            {
            areSliders ?
            <SlideController/>
            :
            <Home toggleSliders={toggleSliders}></Home>
  }
        </div>
    )
}

export default LandingPage
