import React from 'react'
import './Nav.css'
import logo from '../assets/logo.svg'
function Nav() {
  return (
    <>
    <nav>
        <div className="left-div">
          <img src={logo} alt="GeekFoodLogo" />
          <h3>GeekFoods</h3>
        </div>
        <div className="nav-element">
          <li>Home</li>
          <li>Quote</li>
          <li>Restaurant</li>
          <li>Foods</li>
          <li>Contact</li>
        </div>
        <div className="right-div">
          <button>Get Started</button>
        </div>
      </nav>
    </>
  )
}

export default Nav
