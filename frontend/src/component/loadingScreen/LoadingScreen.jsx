import './loadingScreen.css'
import logo from '../../Images/LOGO.jpeg'

const LoadingScreen = () => {
    return (
        <>
            <div className='loading_screen'></div>
            <img src={logo} className='loading_image' />
        </>
    )
}

export default LoadingScreen