import React from 'react'
import "./Mywork.css"
import { Work_Data } from '../data/Workdata'
const Mywork = () => {
  return (
    <div id='work' className='mywork'>
<div  className='mywork-title'>
<h1>My latest work</h1>
<img src=' /images/base.png' width="40%" height="300px"  />
</div>

<div className='mywork-container'>
{Work_Data.map((x,key)=>{
return <img width="300px" height="300px" key={key} src={x.w_image}/>
})}
</div>
<div className='mywork-showmore'>
<p>Show More</p>

</div>
    </div>
  )
}

export default Mywork