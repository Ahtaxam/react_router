import React from 'react'
import { Link,Outlet,NavLink } from 'react-router-dom'
import Aboutid from './Order_summary'
import Aboutme from './Aboutme'
import Aboutyou from './Aboutyou'
function About() {
    const navLinkStyle = ({isActive})=>{
      return{
        fontWeight:isActive ? "bold":"normal",
        textDecoration:isActive ? "none":"underline"
      }
    }
  return (
      <>
    <div>it is About Component</div>
    <br/>
    <br/><br/>
    <NavLink style={ navLinkStyle}  to="me">About me</NavLink>
    <NavLink style = {navLinkStyle} to="you">About You</NavLink>

    <br/><br/>
    <NavLink style = {navLinkStyle} to="/">Go to Home</NavLink>
    
    <Outlet/>
    </>
  )
}

export default About