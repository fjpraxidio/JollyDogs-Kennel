import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Especially Fur You</h1>
        <p>Where every tail wags with delight and every bark resonates with joy! Our kennel is more than just a place for dogs; it's a haven where furry friends find comfort, companionship, and endless adventures. With a commitment to providing exceptional care and personalized attention.</p>
        <Link to='about' smooth={true} offset={-200} duration={500} className='btn'>Explore <img src={dark_arrow} alt="" /></Link>
      </div>
    </div>
  )
}

export default Hero
