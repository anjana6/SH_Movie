import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.jpg'

import './header.scss'


const Header = () => {

  const {pathname} = useLocation()
  const headerPath = [
    {name: "Home", path: '/'},
    {name: 'Movies', path: '/movie'},
    {name: 'TV Serious', path: '/tv-serious'}
  ]

  const active = headerPath.findIndex( data => data.path === pathname)
  return (
    <div className="header">
      <div className="header_wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>Movies</span>
          <Link to="/"></Link>
        </div>
        <ul className="header_nav">
          {
            headerPath.map((e, i) => (<li className={`${i === active? 'active': ''}`}><Link to={e.path}>{e.name}</Link></li>))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header