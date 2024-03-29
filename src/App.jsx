import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About Us/About'
import Den from './Components/Den/Den'
import Team from './Components/Team/Team'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Programs/>
        <Title subTitle='Gallery' title='Pawsome Pics: Capturing Canine Moments'/>
        <Den/>
        <Title subTitle='Meet the Team' title='Get to Know the Pack'/>
        <Team/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
