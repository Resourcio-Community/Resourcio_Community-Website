import { useState } from 'react'
import './category.css'

const Category = ({ style, image, cardTitle, cardText }) => {
  const [flip, setFlip] = useState(false)


  return (
    <div
      className={`category-card ${flip ? 'flipped' : ''}`}
      style={{ '--color': `${style}` }}
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
    >
      {/* front */}
      <div className="card-front">
        <div className="card-icon">
          <img src={image} width={40} height={40} loading="lazy" alt={cardTitle} />
        </div>
        <h3 className="h3">
          <p className="card-title">{cardTitle}</p>
        </h3>
      </div>

      {/* back */}
      <div className="card-back">
        <p className="card-text">
          <span className="webd">{cardText}</span>
        </p>
        <span className="card-badge"></span>
      </div>
    </div>

  )
}

export default Category