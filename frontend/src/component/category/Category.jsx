import './category.css'

const Category = ({ style, image, cardTitle, cardText }) => {
    return (
        <div className="category-card" style={{ "--color": `${style}` }}>
            <div className="card-icon">
                <img src={image} width={40} height={40} loading="lazy" alt="About gate exams" />
            </div>
            <h3 className="h3">
                <p className="card-title">{cardTitle}</p>
            </h3>
            <p className="card-text">
                <span className="webd">{cardText}</span>
            </p>
            <span className="card-badge"></span>
        </div>
    )
}

export default Category