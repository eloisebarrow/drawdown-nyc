import React from 'react'

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" alt="Drawdown NYC logo" src="https://res.cloudinary.com/eloise/image/upload/v1581872007/drawdown-nyc/Drawdown_NewYorkCity_Logo.png" />
      </div>
      
      <nav className="header-nav">
        <a href="#">About</a>
        <a href="#">Events</a>
        <a href="#">Newsletter</a>
      </nav>
    </div>
  )
}