import logo from '../../Images/rc_com.png'
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const hidebodyOverflow = () => {
        document.body.classList.toggle('hideOverflow')
    }

    return (
        <nav className="navbar">
            <div>
                <img src={logo} alt="Community Logo" height="100" width="100" />
            </div>
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" onClick={hidebodyOverflow}/>
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><a href='#about'>About Us</a></li>
                    <li><Link to='/resources' target='_blank'>Resources</Link></li>
                    <li><a href='#contact'>Contact Us</a></li>
                    <li><Link to='/login'>Sign in</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar