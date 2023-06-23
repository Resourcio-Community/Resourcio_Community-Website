import logo from '../../Images/rc_com.png'
import userLogo from '../../Images/user-logo.jpg'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useEffect, useContext, useRef, useState } from 'react'
import { AuthContext } from '../../authContext/AuthContext'
import { logout } from '../../authContext/AuthActions'


const Navbar = () => {

    const [navbar, setNavbar] = useState(false)
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    }, [])



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
        <nav className={navbar ? "navbar" : "navbar_scroll"}>
            <div className='community_logo'>
                <a href='#'><img className='community_img' src={logo} height="105" width="105" alt="logo"/></a>
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
                    <a href='#about'><li onClick={removeOverflow}>About Us</li></a>
                    <Link to='/resources'><li onClick={removeOverflow}>Resources</li></Link>
                    <a href='#team'><li onClick={removeOverflow}>Team</li></a>
                    <a href='#footer'><li onClick={removeOverflow}>Contact Us</li></a>
                    {!user
                        ? < Link to='/login'><li onClick={removeOverflow}>Sign in</li></Link>
                        : (
                            <li onClick={() => dispatch(logout())} id='userlogout'>
                                <div className="logout">
                                    <img src={userLogo} width={35} style={{ "borderRadius": "50%" }} alt="avatar"/>
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