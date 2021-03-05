import React, {useState} from 'react'
import SlideControler from '../slides/SlideControler'
import Home from '../components/Home'
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
            <SlideControler/>
            :
            <Home toggleSliders={toggleSliders}></Home>
  }
        </div>
    )
}

export default LandingPage
