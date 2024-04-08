import React, { useRef, useState } from 'react'
import "./navbar.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
const Navbar = () => {
  const [menu,setMenu]=useState("home")
  const menuRef=useRef()
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
   <img  src="/images/logo.png" width="130px" height="130px" alt="" />
   <img src=' /images/list.png ' onClick={openMenu} className='nav-mob-open'   />
   <ul ref={menuRef} className='nav-menu'>
   <img src=' /images/close.png ' onClick={closeMenu} className='nav-mob-close'   />
   <li> <AnchorLink className='anchor-link' offset={50} href='#home'   ><p onClick={()=>setMenu("home")}  >Home</p></AnchorLink>  {menu==="home"? <img width="70px" height="70px" src='/images/base.png ' /> :<></>}</li>
   <li><AnchorLink className='anchor-link' offset={50} href='#about'    > <p onClick={()=>setMenu("about")}   >About me</p></AnchorLink>{menu==="about"? <img width="90px" height="70px"   src=' /images/base.png  ' /> :<></>} </li>
   <li><AnchorLink className='anchor-link' offset={50} href='#services'    > <p  onClick={()=>setMenu("services")}    >Services</p>  </AnchorLink>{menu==="services"? <img  width="90px" height="70px" src=' /images/base.png ' /> :<></>} </li>
   <li><AnchorLink className='anchor-link' offset={50} href='#work'  > <p  onClick={()=>setMenu("work")}   >Portfolio</p>   </AnchorLink>{menu==="work"? <img width="90px" height="70px" src='  /images/base.png' /> :<></>} </li>
   <li><AnchorLink className='anchor-link' offset={50} href='#contact'   > <p  onClick={()=>setMenu("contact")}  >Contact</p>  </AnchorLink>{menu==="contact"? <img width="90px" height="70px" src=' /images/base.png' /> :<></>} </li>
   </ul>
   <div className='nav-connect'> <AnchorLink className='anchor-link' offset={50} href='#contact'   > <p  onClick={()=>setMenu("contact")}  >Connect with me</p>  </AnchorLink></div>
    </div>
  )
}

export default Navbar