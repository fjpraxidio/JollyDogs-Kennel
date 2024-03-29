import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' alt="" />
            <img src={play_icon} className='play-icon' alt="" onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT OUR KENNEL</h3>
            <h2>Nurturing Your Best Bud</h2>
            <p>Welcome to our kennel, where we specialize in nurturing your best bud with love, care, and a wag-worthy environment. At our facility, we understand the importance of providing a safe and comfortable home-away-from-home for your furry friend.</p>
            <p>Our dedicated team of caregivers shares a passion for canine companionship and is committed to providing the highest standard of care. Whether stimulating playtime with fellow pups, or nutritious meals tailored to dietary requirements, we prioritize the well-being and happiness of your best bud above all else.</p>
            <p>At our kennel, you'll find more than just a place to board your pet – you'll discover a warm and welcoming community of dog lovers dedicated to nurturing the bond between humans and their four-legged family members. Join us in creating unforgettable memories and fostering a lifetime of love and companionship with your furry friend at our kennel.</p>
        </div>
      
    </div>
  )
}

export default About
