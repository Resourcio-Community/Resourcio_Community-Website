import logo from '../../Images/rc_com.png'
import userLogo from '../../Images/user-logo.jpg'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../authContext/AuthContext'
import { logout } from '../../authContext/AuthActions'


const Navbar = () => {
    const [labelText, setLabelText] = useState('&#9776;')
    const hidebodyOverflow = (e) => {
        document.body.classList.toggle('hideOverflow')
        if (!checkboxRef.current.checked) setLabelText("&#9776;")
        else setLabelText("&times;")
    }
    const checkboxRef = useRef()
    const removeOverflow = () => {
        checkboxRef.current.checked = false
        document.body.classList.remove('hideOverflow')
        setLabelText("&#9776;")
    }


    const { user, dispatch } = useContext(AuthContext)

    return (
        <nav className="navbar">
            <div className='community_logo' style={
                {
                    display: 'grid',
                    placeItems: 'center',
                    marginLeft: '-20px',
                    marginTop: '4px'
                }
            }>
                <img src={logo} height="100" width="100" />
            </div>
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" onClick={hidebodyOverflow} ref={checkboxRef} />
                <label
                    htmlFor="checkbox_toggle"
                    style={{
                        fontSize: labelText === "&times;" ? "35px" : "24px",
                        color: labelText === "&times;" ? 'red' : undefined
                    }}
                    className="hamburger"
                    dangerouslySetInnerHTML={{ __html: labelText }}>
                </label>
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
                                    <img src={userLogo} width={35} style={{ "borderRadius": "50%" }} />
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