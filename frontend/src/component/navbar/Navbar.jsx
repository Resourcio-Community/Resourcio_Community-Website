import logo from '../../Images/rc_com.png'
import userLogo from '../../Images/user-logo.jpg'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react'
import { AuthContext } from '../../authContext/AuthContext'
import { logout } from '../../authContext/AuthActions'


const Navbar = () => {
    const hidebodyOverflow = (e) => {
        document.body.classList.toggle('hideOverflow')
    }
    const checkboxRef = useRef()
    const removeOverflow = () => {
        checkboxRef.current.checked = false
        document.body.classList.remove('hideOverflow')
    }


    const { user, dispatch } = useContext(AuthContext)

    return (
        <nav className="navbar">
            <div>
                <img src={logo} alt="Community Logo" height="100" width="100" />
            </div>
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" onClick={hidebodyOverflow} ref={checkboxRef} />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                    <Link to='/'><li onClick={removeOverflow}>Home</li></Link>
                    <a href='#about'><li onClick={removeOverflow}>About Us</li></a>
                    <Link to='/resources'><li onClick={removeOverflow}>Resources</li></Link>
                    <a href='#contact'><li onClick={removeOverflow}>Contact Us</li></a>
                    {!user
                        ? < Link to='/login'><li onClick={removeOverflow}>Sign in</li></Link>
                        : (
                            <li onClick={() => dispatch(logout())} id='userlogout'>
                                <div className="logout">
                                    <img src={userLogo} width={35} style={{ "borderRadius": "50%", "marginBottom": "12px" }} />
                                    <span id='logout'>Logout</span>
                                </div>
                            </li>
                        )
                    }
                </div>
            </ul>
        </nav>
    )
}

export default Navbar