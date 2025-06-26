import React from 'react'
import twitterIcon from '../assets/twitter.png'
import facebookIcon from '../assets/facebook.png'
import instagramIcon from '../assets/instagram.png'

import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
       <p>Discover your place</p>
       <h1>Explore The Best Beautiful Beachs</h1>
       <button>Explore</button>
       <div className="hero-icons">
        <img src={twitterIcon} alt="Twitter" />
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
       </div>
    </div>
  )
}

export default Hero