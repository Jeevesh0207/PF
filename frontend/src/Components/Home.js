import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Container1 from './Container1'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Certificate from './Certificate'
import CPSite from './CPSite'
import Achievements from './Achievements'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <div id='HomE'>
        <Navbar/>
        <Header/>
        <Container1/>
        <Skills/>
        <CPSite/>
        <Projects/>
        <Achievements/>
        <Experience/>
        <Certificate/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default Home