import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div id='about' className='about'>
    
    <div className='about-title'>
        <h1>About me</h1>
        <img src=' /images/base.png' width="40%" height="300px"  />
    </div>
    <div className=' about-sections'>
<div className='about-left'>  <img  src='/images/profile.jpg  ' width="140%" height="370px"   /></div>
<div className='about-right'>
<div className='about-para'>
<p>I am front-end developer from lahore ,Pakistan with 0 Year of experience."Crafting elegant user interfaces with pixel-perfect precision, I merge creativity with functionality to bring designs to life."
</p>
<p>I am front-end developer from lahore ,Pakistan with 0 Year of experience. "Crafting elegant user interfaces with pixel-perfect precision, I merge creativity with functionality to bring designs to life."</p>



</div>
<div className='about-skills'>
<div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
<div className='about-skill'><p>React JS</p><hr style={{width:"40%"}}/></div>
<div className='about-skill'><p>JavaScript</p><hr style={{width:"470%"}}/></div>
<div className='about-skill'><p>Next JS</p><hr style={{width:"50%"}}/></div>

</div>
</div>
    </div>

    <div className='about-achievemnets'>
<div className='about-achievement'>
<h1>10+</h1>
<p>Year Of Experience</p>
</div>
<hr/>
<div className='about-achievement'>
<h1>50+</h1>
<p>Projects Completed</p>
</div>
<hr/>
<div className='about-achievement'>
<h1>20+</h1>
<p>Happpy Clients</p>
</div>
<hr/>




    </div>
    
    </div>
  )
}

export default About