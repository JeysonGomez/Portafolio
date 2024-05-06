import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <article className='wrapContent bg1'>
        <div className='subWrapAM'>
        <div className='imgAbout'><img src="src/assets/Fondo.avif" alt="" /></div>
           
            <div className='content-aboutMe'>
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quaerat placeat provident magnam aspernatur nobis vero, soluta fugit voluptate quasi, perspiciatis, repudiandae id veniam a ipsum! Similique repellat dolorem quae.</p>
                
                <div className='btoAbout'>
                <button className='bto1'>Here Me</button>
                <button className='bto2'><span>Resume</span></button>
                </div>
            </div>
        </div> 

    </article>
  )
}

export default AboutMe;