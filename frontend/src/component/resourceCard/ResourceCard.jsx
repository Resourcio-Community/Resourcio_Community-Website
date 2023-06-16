import { useContext } from 'react'
import './resourceCard.css'
import { AuthContext } from '../../authContext/AuthContext'
import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useState } from 'react'


const ResourceCard = ({ image, title, content,full_content,button,href }) => {

    const { user } = useContext(AuthContext)
    const history = useHistory()

    const handleEvent = () => {
        user ? window.open(href, '_blank') : history.push('/login')
    }

    const first=document.querySelector('.resource-full-text');
function visible(){
first.classList.toggle("style")
}
const [btnstate,setBtnState]=useState(true);

function handleClicks(){
    setBtnState(btnstate=>!btnstate);
}
let toggleClasscheck=btnstate ? 'Read':'';

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
                <p className={`resource-full-text ${toggleClasscheck}`}>{full_content}</p>
                <span class="read-more-btn" onClick={handleClicks}>{button}</span>
            </div>
        </div>
    )
}

export default ResourceCard