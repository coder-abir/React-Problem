import "./HeroImgStyles.css";

import React from 'react';
import intoImg from '../assets/intro-bg.jpg';




const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="into-img" src={intoImg} alt="IntroImg"/>

        </div>

    </div>
  )
}

export default HeroImg