import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content container">
        <div className="footer_content_logo">
          <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/">Movies</Link>
          </div>
        </div>
        <div className="footer_content_menus">
          <div className="footer_content_menu">
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>Contact</Link>
          </div>
          <div className="footer_content_menu">
            <Link>Home</Link>
            <Link>About Us</Link>
          </div>
          <div className="footer_content_menu">
            <Link>Home</Link>
            <Link>About Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer