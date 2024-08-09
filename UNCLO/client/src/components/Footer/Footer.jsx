import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram from '../Assets/instagram_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'
function Footer  () {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src = {logo} alt = ""></img>
            <p>U.N.Q.L.O.</p>
        </div>

        <div className='footer-link'>
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Office</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className='footer-icons'>
            <img src = {instagram} alt = "instagram"></img>
            <img src = {whatsapp} alt = ""></img>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @2024 - All Rights Reserved</p>
        </div>
           
    </div>

  )
}

export default Footer;
