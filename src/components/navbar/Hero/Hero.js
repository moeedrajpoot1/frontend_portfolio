import React from 'react'
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll"
const Hero = () => {
  return (
    <div id='home' className='hero'>
    <img src='/images/round.png' width="200px" height="200px" />
   
    <h1><span>I' Am Moeed ,</span> front-end developer based in Pakistan</h1>
    <p>I am front-end developer from lahore ,Pakistan with 0 Year of experience</p>
    <div className='hero-action'>
   <div  className='hero-connect'> <AnchorLink className='anchor-link' offset={50} href='#contact'   > Connect with me </AnchorLink>         </div>
   <div  className='hero-resume'>My Resume</div>



    </div>

    
    </div>
  )
}

export default Hero