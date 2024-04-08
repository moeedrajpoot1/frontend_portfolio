import React from 'react'
import './Services.css'
import { Services_Data } from '../data/ServicesData'
const Services = () => {
  return (
    <div id='services' className='services'  >
    <div className='services-title'>
<h1>My Services</h1>
<img src=' /images/base.png' width="40%" height="300px"  />
    </div>
    <div className='services-container'>
     {Services_Data.map((x,index)=>{
     return <div key={index} className='services-format'>
<h3>{x.s_no}</h3>
<h2>{x.s_name}</h2>
<p>{x.s_web}</p>
<div className='services-readmore'>
    <p>Read More</p>
    
</div>
     </div>


     })}
    </div>
    
   </div>
  )
}

export default Services