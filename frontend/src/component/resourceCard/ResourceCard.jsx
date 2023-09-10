import { useContext } from 'react'
import './resourceCard.css'
import { AuthContext } from '../../context/authContext/AuthContext'
import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


const ResourceCard = ({ image, title, content, href }) => {

    const { user } = useContext(AuthContext)
    const history = useHistory()

    const handleEvent = () => {
        user ? window.open(href, '_blank') : history.push('/login')
    }

    const clip = (text) => {
        if (text.length > 180) {
            text = text.slice(0, 180) + "..."
        }
        return text
    }

    return (
        <div className="box_card">
            <div className='box_child'>
                <LazyLoadImage src={image} effect='blur' alt={title} />
            </div>
            <div className="box_content">
                <div style={{ minHeight: "250px" }}>
                    <h3 className="resource-title">{title}</h3>
                    <p className="resource-text">{clip(content)}</p>
                </div>
                <hr className='line' />
                <div className="resource-button" onClick={handleEvent}>Learn More</div>
            </div>
        </div>
    )
}

export default ResourceCard