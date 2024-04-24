import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo"><a href="#">Apple</a></div>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
