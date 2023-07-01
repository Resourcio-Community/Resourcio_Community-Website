import React, { useState, useEffect } from 'react'
import './stat.css'
import NumberCounter from 'number-counter'

const Stat = ({ style, fontSize, cardTitle, cardText }) => {
  const [delay, setDelay] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.getElementById('stats-card')
      const cardPosition = cardElement.getBoundingClientRect()
      const shouldStartAnimation = cardPosition.top <= window.innerHeight * 0.8

      if (shouldStartAnimation && delay === null) {
        setDelay(3)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [delay])

  
  return (
    <div className="stats-card" style={{ "--color": `${style}` }} id="stats-card">
      <h3 className="card-title">
        {delay !== null ? (
          <NumberCounter end={cardTitle} start={0} delay={delay} />
        ) : (
          cardTitle
        )}
        +
      </h3>
      <p className="card-text">
        <span style={{ fontSize: `${fontSize}px` }}>{cardText}</span>
      </p>
    </div>
  )
}

export default Stat