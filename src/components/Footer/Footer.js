import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div  className='footer'>

<div className='footer-top'>
<div className='footer-top-left'>
    <img  height="100px" width="100px" src='/images/logo.png  '/>
    <p>I am a front-end developer from, pakistan with 0 years of experience </p>
</div>
<div className='footer-top-right'>

<div className='footer-email-input'>
    <img src='/images/user.png '    />
    <input type='email' placeholder='Enter your email'    />
</div>
<div className='footer-subscribe'>Subscribe</div>
</div>
</div>
<hr/>
<div className='footer-bottom'>
<p className='footer-bottom-left'>© 2024 Moeed Rajpoot. All rights reserved</p>
<div  className='footer-bottom-right'>
<p>Term of Services</p>
<p>Privacy Policy</p>
<p>Connect with me</p>


</div>

</div>
    </div>
  )
}

export default Footer