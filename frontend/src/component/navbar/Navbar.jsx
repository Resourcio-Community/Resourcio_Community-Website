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
                <input type="checkbox" id="checkbox_toggle" onClick={hidebodyOverflow} />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                    <Link to='/'><li>Home</li></Link>
                    <a href='#about'><li>About Us</li></a>
                    <Link to='/resources' target='_blank'><li>Resources</li></Link>
                    <a href='#contact'><li>Contact Us</li></a>
                    <Link to='/login'><li>Sign in</li></Link>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar