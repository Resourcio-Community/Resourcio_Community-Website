import logo from '../../Images/rc_com.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Navbar = () => {
    const navData = useRef()

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
                    <li ref={navData}><Link to='/' className='navlink'>Home</Link></li>
                    <li ref={navData}>About Us</li>
                    <li ref={navData}><Link to='/resources' className='navlink'>Resources</Link></li>
                    <li ref={navData}>Contact Us</li>
                    <li ref={navData}><Link to='/login' className='navlink'>Sign in</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar