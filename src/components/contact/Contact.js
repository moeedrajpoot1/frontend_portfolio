import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <div id='contact' className='contact'>
    <div className='contact-title'>
    <h1>Get In Touch</h1>
    <img  src=' /images/base.png' width="40%" height="300px"  />
    </div>
    <div className='contact-section'>
    <div className='contact-left'>
        <h1>Let's talk</h1>
        <p>I am currently available to take on new projects, so feel free to send me a message about anything that you want me to work on .You can contact anytime</p>
        <div className='contact-details'>
<div className='contact-detail'>
<img width="32px" height="32px" src='/images/gmail.png '   /><p>moeedrajpoot1@gmail.com</p>
</div>
<div className='contact-detail'>
<img width="32px" height="32px" src='/images/call.png' /><p>+92-00089-0</p>
</div>
<div className='contact-detail'>
<img width="32px" height="32px"  src='images/placeholder.png '  /><p>Lahore, Pakistan</p>
</div>
 </div>
    </div>
<div className='contact-right'>
<label>Your Name</label>
<input type='text'   placeholder='Enter your name' name='name'  />
<label>Your Email</label>
<input type='email'   placeholder='Enter your email' name='email'  />
<label>Write your message here</label>
<textarea  name="message" rows="8"  placeholder='Enter Your Message'></textarea>
<button type='submit' className='contact-submit'>Submit now</button>

</div>




    </div>
    
  </div>
  )
}

export default Contact