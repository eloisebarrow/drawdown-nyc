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
          <a href="https://www.drawdown.org/the-book" target="_blank" rel="noopener noreferrer">The Book</a>
          <a href="https://www.drawdown.org/solutions" target="_blank" rel="noopener noreferrer">Solutions</a>
          <a href="https://www.drawdown.org/donate" target="_blank" rel="noopener noreferrer">Donate</a>
          <a href="https://www.drawdown.org/news-and-media" target="_blank" rel="noopener noreferrer">News and Media</a>
          <a href="https://www.drawdown.org/frequently-asked-questions" target="_blank" rel="noopener noreferrer">FAQs</a>
        </nav>
      </div>

      <div className="copyright-container">
        <p>Copyright 2020 Drawdown NYC. All rights reserved.</p>
      </div>
    </div>
  )
}
