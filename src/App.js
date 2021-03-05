import React, {useState}  from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './global.css'

import SiteMap from './components/SiteMap'
import About from './components/about/About'
import My404Component from './components/My404Component'
import LandingPage from './components/LandingPage'
import Projects from './components/projects/Projects'

const AppContainer = styled.div`
  margin:auto;
`

function App() {
  // NAVBAR STATE FOR TOGGLE MENU
  const [isVisible, setVisible] = useState(false)
  const handleClick = () =>{
    setVisible(!isVisible)
    setMap(false)
  }

  // SITEMAP STATE
  const [isMap, setMap] = useState(false)
  const handleClickMap = () =>{
    setMap(!isMap)
    setVisible(false)
  }

  return (
    <Router>
      <AppContainer> 
      <SiteMap handleClick={handleClickMap} isMap={isMap}/>
      <Navbar name='Emil Kovačević' handleClick={handleClick} isVisible={isVisible} />
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path='/projects' component={Projects}/>
            <Route path='*' exact={true} component={My404Component} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
