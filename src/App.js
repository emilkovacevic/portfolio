import React, {useState}  from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import './global.css'

import SiteMap from './components/SiteMap'
import Home from './components/Home'
import SlideControler from './slides/SlideControler'

const AppContainer = styled.div``

function App() {
  // NAVBAR STATE
  const [isVisible, setVisible] = useState(false)
  const handleClick = () =>{
    setVisible(!isVisible)
  }
  // Slides State
  const [areSliders, setSliders] = useState(false)
  const toggleSliders = () =>{
    setSliders(!areSliders)
  }

  return (
    <Router>
      <AppContainer> 
        <SiteMap />
        <Navbar name='Emil Kovacevic' handleClick={handleClick} isVisible={isVisible} />
        {
          areSliders ?
          <SlideControler/>
          :
          <Home toggleSliders={toggleSliders}></Home>
        }
      </AppContainer>
    </Router>
  );
}

export default App;
