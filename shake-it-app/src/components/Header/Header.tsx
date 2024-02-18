import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='app-header'>
      <a className='brand-logo' href="/">
        <img
          src="https://res.cloudinary.com/moviehub/image/upload/v1708276046/ShakeItApp/shakeitApp_few8su.png"
          alt="logo"
          width="90"
          height="70"
          className="d-inline-block align-text-top"
        />
        
      </a>
      <nav className='navbar'>
        <Link to="/search">Search</Link>
        <Link to="/all">All</Link>
        <Link to="/add">Add</Link>
      </nav>
    </header>
  )
}

export default Header