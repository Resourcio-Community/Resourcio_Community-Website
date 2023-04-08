import './loadingScreen.css'
import logo from '../../Images/LOGO.webp'

const LoadingScreen = ({ img }) => {
    return (
        <>
            <div className='loading_screen'></div>
            <img src={img} className='loading_image' />
        </>
    )
}

export default LoadingScreen