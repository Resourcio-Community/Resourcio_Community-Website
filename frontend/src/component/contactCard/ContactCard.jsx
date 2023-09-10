import './contactCard.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'


const ContactCard = ({ image, name, role, linkedIn }) => {
    return (
        <div className="contact_card">
            <div className='dev_image'>
                <LazyLoadImage src={image} style={{transition:'all 0.3s ease'}} effect='blur' alt={name} />
            </div>
            <h3 className='dev_name'>{name}</h3>
            <p className="dev_role">{role}</p>
            <a href={linkedIn} target='_blank' className='dev_profile'>View Profile</a>
        </div>
    )
}

export default ContactCard