import React from 'react';
import LazyLoad from 'react-lazy-load';

export default function IntroPhoto() {
  return (
    <div className="intro-photo-container">
      <LazyLoad
        width={100}
        height={100}
        debounce={false}
        offsetVertical={500}>
        <div>
          {/* background image in CSS */}
          <img className="intro-photo" alt="trees" src="https://res.cloudinary.com/eloise/image/upload/v1581953751/drawdown-nyc/alt-intro-photo02.jpg" />
          <h3>Bringing climate solutions to life, in NYC</h3>
        </div>
      </LazyLoad>
    </div>
  )
}
