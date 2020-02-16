import React from 'react'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <div className="about-who">
          <h3>Who We Are</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet interdum elit. Vestibulum tempus rutrum pharetra. Suspendisse a eleifend nisl. Aenean nec rhoncus nunc, id eleifend nulla. Duis feugiat rhoncus dapibus. Fusce venenatis est eget ligula pellentesque, a porta diam gravida. Etiam tortor ex, tempus a enim vitae, molestie mattis purus.</p>
        </div>

        <div className="about-what">
          <h3>What We Do</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet interdum elit. Vestibulum tempus rutrum pharetra. Suspendisse a eleifend nisl. Aenean nec rhoncus nunc, id eleifend nulla. Duis feugiat rhoncus dapibus. Fusce venenatis est eget ligula pellentesque, a porta diam gravida. Etiam tortor ex, tempus a enim vitae, molestie mattis purus.</p>
        </div>
      </div>

      <div className="about-photo-container">
        {/* Photo by Mariana Proença on Unsplash */}
        <img className="about-photo" alt="solar panels" src="https://res.cloudinary.com/eloise/image/upload/v1581881786/drawdown-nyc/solar-panels.jpg" />
      </div>
    </div>
  )
}
