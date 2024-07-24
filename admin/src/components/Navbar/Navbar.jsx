import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import profile_pic from '../../Assets/download.png'


export default function Navbar(){
  return (
    <div className='navbar'>
        <div className="navbar-logo">
            <img src = {logo} alt = ""/>
            <div className="navbar-logo-text">
                <h1>U.N.C.L.O</h1>
                <p>admin-panel</p>
            </div>
        </div>
        

        <div className="navbar-profile">
            <img src = {profile_pic} alt = ""/>
            <p>user</p>

        </div>
    </div>
  )
}
