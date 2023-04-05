import { useContext } from 'react'
import './resourceCard.css'
import { AuthContext } from '../../authContext/AuthContext'
import { useHistory } from 'react-router-dom'


const ResourceCard = ({ image, title, content, href }) => {

    const { user } = useContext(AuthContext)
    const history = useHistory()

    const handleEvent = () => {
        user ? window.open(href, '_blank') : history.push('/login')
    }

    return (
        <div className="box_card">
            <figure className="box_img">
                <img src={image} />
            </figure>
            <div className="box_content">
                <div className="resource-button" onClick={handleEvent}>Learn More</div>
                <h3 className="resource-title">{title}</h3>
                <p className="resource-text">{content}</p>
            </div>
        </div>
    )
}

export default ResourceCard