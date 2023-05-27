import { useContext } from 'react'
import './resourceCard.css'
import { AuthContext } from '../../authContext/AuthContext'
import { useHistory } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import PersonIcon from '@mui/icons-material/Person';

const ResourceCard = ({ image, title, content, href }) => {

    const { user } = useContext(AuthContext)
    const history = useHistory()

    const handleEvent = () => {
        user ? window.open(href, '_blank') : history.push('/login')
    }

    return (
        /*<div className="box_card">
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
    */
   /*<div className="box_card">
    <div className="cardimage">
        <div className="new">
            NEW
        </div>
        <div className="image">
        <img src={image} alt={`${title}`} />
        </div>
        
    </div>
    <div className="description">
        <div className="title">
            {title}
        </div>
        <div className="shortdesc">
            {content?.substring(0,100)}
        </div>
        <div className="button">
            <button className="btn"  onClick={handleEvent}>Learn More</button>
        </div>
    </div>

   </div>

    */


   <div className="card">
    <div className="new">
        NEW
    </div>
    <div className="imgbox">

    </div>

   <div className="content">
           <span className="enrolled">
             <PersonIcon className="icon" />
              70 enrolled
            </span> 
            <div className="title">
                {title}
            </div>
            <div className="shortdescription">
                {content?.substring(0,70)}. . .
            </div>
            <div className="smallcategory">
                <div className="cat">
                    beginner
                </div>
                <div className="cat">
                    intermediate
                </div>
                <div className="cat">
                    job-friendly
                </div>
            </div>
            <div className="buttons">
                <div className="flex">
                <button class="button">Learn More</button>
                </div>
                
            </div>

    </div>
   </div>




    )
}

export default ResourceCard