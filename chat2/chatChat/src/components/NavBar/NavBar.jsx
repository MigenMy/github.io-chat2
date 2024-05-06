import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../styles/NavBar.css"

import { GoHome } from 'react-icons/go'
import { BiMessageRounded } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import { BsCameraVideo } from "react-icons/bs";

import logo from "../../icons/logo.svg"

const NavBar = () => {
  return (
    <div className='navbar'>
        <NavLink to='/'><img src={logo} alt="" width={60}/></NavLink>
        <NavLink className={({isActive}) => isActive? "active-link" : ""} to="/"><GoHome size={32}/></NavLink>
        <NavLink className={({isActive}) => isActive? "active-link" : ""} to="/messages"><BiMessageRounded size={32}/></NavLink>
        <NavLink className={({isActive}) => isActive? "active-link" : ""} to="/friends"><BsPeople size={32}/></NavLink>
        <NavLink className={({isActive}) => isActive? "active-link" : ""} to="/bells"><BsTelephone size={29}/></NavLink>
        <NavLink className={({isActive}) => isActive? "active-link" : ""} to="/videobells"><BsCameraVideo size={32}/></NavLink>
    </div>
  )
}

export default NavBar