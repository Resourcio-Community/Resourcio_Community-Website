import { useContext } from 'react'
import './resourceCard.css'
import { AuthContext } from '../../authContext/AuthContext'
import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


const ResourceCard = ({ image, title, content, href }) => {

    const { user } = useContext(AuthContext)
    const history = useHistory()


    const handleEvent = async () => {
        user ? window.open(href, '_blank') : history.push('/login')
    }

    return (
        <div className="box_card">
            <figure className="box_img">
                <LazyLoadImage
                    className='image'
                    src={image}
                    effect='blur'
                />
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