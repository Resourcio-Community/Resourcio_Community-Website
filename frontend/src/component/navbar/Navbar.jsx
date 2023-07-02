import logo from '../../Images/rc_com.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import Profile from '../profile/Profile'
import ThemeButton from '../themeChange/ThemeButton'


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
        window.addEventListener("scroll", changeBackground)

        return (() => window.removeEventListener('scroll', changeBackground))
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



    return (
        <nav className={navbar ? "navbar" : "navbar_scroll"}>
            <div className='community_logo'>
                <a href='#'><img className='community_img' src={logo} height="90" width="90" alt="logo" /></a>
            </div>
            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" onClick={hidebodyOverflow} ref={checkboxRef} />
                <label
                    htmlFor="checkbox_toggle"
                    style={{
                        fontSize: labelText === "&times;" ? "35px" : "24px",
                    }}
                    className="hamburger"
                    dangerouslySetInnerHTML={{ __html: labelText }}>
                </label>
                <div className="menu">
                    <a href='#about'><li onClick={removeOverflow}>About Us</li></a>
                    <Link to='/resources'><li onClick={removeOverflow}>Resources</li></Link>
                    <a href='#team'><li onClick={removeOverflow}>Team</li></a>
                    <a href='#footer'><li onClick={removeOverflow}>Contact Us</li></a>
                    <Profile handleOverflow={removeOverflow} />
                    <ThemeButton />
                </div>
            </ul>
        </nav>
    )
}

export default Navbar