import React from 'react'

export default function Aside() {
  return (
    <div className="aside-container">
      <div className="aside-text">
        <div className="events-container">
          <h3>Upcoming Events</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet interdum elit. Vestibulum tempus rutrum pharetra. Suspendisse a eleifend nisl. Aenean nec rhoncus nunc, id eleifend nulla. Duis feugiat rhoncus dapibus. Fusce venenatis est eget ligula pellentesque, a porta diam gravida. Etiam tortor ex, tempus a enim vitae, molestie mattis purus.</p>
        </div>

        <div className="newsletter-form-container">
          <h3>Stay In Touch</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet interdum elit. Vestibulum tempus rutrum pharetra. Suspendisse a eleifend nisl. Aenean nec rhoncus nunc, id eleifend nulla. Duis feugiat rhoncus dapibus. Fusce venenatis est eget ligula pellentesque, a porta diam gravida. Etiam tortor ex, tempus a enim vitae, molestie mattis purus.</p>
        </div>
      </div>

      <a className="project-drawdown" href="https://www.drawdown.org/" target="_blank" rel="noopener noreferrer">
        <div className="aside-drawdown-container">
          <h4>Learn more about Project Drawdown</h4>
        </div>
      </a>
    </div>
  )
}
