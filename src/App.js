import React, {useState, useEffect}  from 'react'
import styled from 'styled-components'
import Navbar from './components/elements/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import SiteMap from './components/SiteMap'
import ContactBtn from './components/elements/ContactBtn'
import LandingPage from './components/LandingPage'
import About from './components/about/About'
import Cv from './components/cv/Cv'
import Projects from './components/projects/Projects'
import My404Component from './components/404/My404Component'

const AppContainer = styled.div`
  margin:auto;

`

function App() {

  // NAVBAR STATE FOR TOGGLE MENU
  const [isVisible, setVisible] = useState(false)
  const handleClick = () =>{
    setVisible(!isVisible)
    setMap(false)
    setForm(false)
  }

  // NAVBAR BACKGROUND VISIBILITY
  const [navBG, setnavBg] = useState(false)
  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 0){
        setnavBg(true)
      }else{
        setnavBg(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  },[navBG])

  // SITEMAP STATE
  const [isMap, setMap] = useState(false)
  const handleClickMap = () =>{
    setMap(!isMap)
    setVisible(false)
    setForm(false)
  }
  // FORM STATE
  const [isForm, setForm] = useState(false)
  const handleClickForm = () =>{
    setForm(!isForm)
    setVisible(false)
    setMap(false)
  }

  return (
    <Router>
      <AppContainer> 
        <div className={navBG ? 'navbar nav-btn__colors' : 'navbar'} >
          <SiteMap handleClick={handleClickMap} isMap={isMap}/>
          <ContactBtn handleClick={handleClickForm} isForm={isForm}/>
          <Navbar name='Emil Kovačević' handleClick={handleClick} isVisible={isVisible} />
        </div>
        <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/cv' component={Cv}/>
            <Route path='*' exact={true} component={My404Component} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
