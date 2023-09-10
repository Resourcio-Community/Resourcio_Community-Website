import './contactCard.css'

const ContactCard = ({ image, name, role, linkedIn }) => {
    return (
        <div className="contact_card">
            <img src={image} className='dev_image' alt={name} />
            <h3 className='dev_name'>{name}</h3>
            <p className="dev_role">{role}</p>
            <a href={linkedIn} target='_blank' className='dev_profile'>View Profile</a>
        </div>
    )
}

export default ContactCard