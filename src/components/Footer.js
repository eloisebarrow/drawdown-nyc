import React from 'react'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="links-container">
        <nav>Drawdown NYC
          <a href="#">About</a>
          <a href="#">Events</a>
          <a href="#">Newsletter</a>
          <a href="#">Contact</a>
        </nav>

        <nav>Project Drawdown
          <a href="#">The Book</a>
          <a href="#">Solutions</a>
          <a href="#">Donate</a>
          <a href="#">News and Media</a>
          <a href="#">FAQs</a>
        </nav>
      </div>

      <div className="copyright-container">
        <p>Copyright 2020 Drawdown NYC. All rights reserved.</p>
      </div>
    </div>
  )
}
