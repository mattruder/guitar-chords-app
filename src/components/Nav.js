import '../css/Nav.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar">
      <Link className="home-btn" to='/'>
        <h1>Strike A Chord</h1>
      </Link>
      <Link className="favorites-area-btn" to='/favorites'>
        <h2>My Favorites</h2>
      </Link>
    </nav>
  )
}

export default Nav
