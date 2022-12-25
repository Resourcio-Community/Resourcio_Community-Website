import './resourceCard.css'


const ResourceCard = ({ image, title, content, href }) => {
    return (
        <div className="box_card">
            <figure className="box_img">
                <img src={image} />
            </figure>
            <div className="box_content">
                <a href={href} target='_blank' className="resource-button">Learn More</a>
                <h3 className="resource-title">{title}</h3>
                <p className="resource-text">{content}</p>
            </div>
        </div>
    )
}

export default ResourceCard