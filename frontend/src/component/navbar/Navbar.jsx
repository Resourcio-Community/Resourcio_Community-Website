import logo from "../../Images/rc_com.png";
import userLogo from "../../Images/user-logo.jpg";
import logoutLogo from "../../Images/logout.png"
import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
import { useState } from "react";

const Navbar = () => {
  const hidebodyOverflow = (e) => {
    document.body.classList.toggle("hideOverflow");
  };
  const checkboxRef = useRef();
  const removeOverflow = () => {
    checkboxRef.current.checked = false;
    document.body.classList.remove("hideOverflow");
  };

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { user, dispatch } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div
        className="community_logo"
        style={{
          display: "grid",
          placeItems: "center",
          marginLeft: "-20px",
          marginTop: "4px",
        }}
      >
        <img src={logo} height="100" width="100" />
      </div>
      <ul className="nav-links">
        <input
          type="checkbox"
          id="checkbox_toggle"
          onClick={hidebodyOverflow}
          ref={checkboxRef}
        />
        <label htmlFor="checkbox_toggle" className="hamburger">
          &#9776;
        </label>
        <div className="menu">
          <Link to="/">
            <li onClick={removeOverflow}>Home</li>
          </Link>
          <a href="#about">
            <li onClick={removeOverflow}>About Us</li>
          </a>
          <Link to="/resources">
            <li onClick={removeOverflow}>Resources</li>
          </Link>
          <a href="#contact">
            <li onClick={removeOverflow}>Contact Us</li>
          </a>
          {!user ? (
            <Link to="/login">
              <li onClick={removeOverflow}>Sign in</li>
            </Link>
          ) : (
            <li
              className="dropdown"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <div className="logout">
                <img
                  src={userLogo}
                  width={35}
                  style={{ borderRadius: "50%" }}
                />
                <span id="username">{user.name}</span>
              </div>
              {dropdownVisible && (
                <ul className="dropdown-menu">
                  <li className="dropdown-options">
                  <img
                      src={userLogo}
                      width={35}
                      style={{ borderRadius: "50%" }}
                   />
                    View Account
                  </li>
                  <li className="dropdown-options"
                    onClick={() => dispatch(logout())}>
                    <img
                      src={logoutLogo}
                      width={30}
                      style={{marginRight: '10px'}}
                   />
                    Logout
                  </li>
                </ul>
              )}
            </li>
            // <li onClick={() => dispatch(logout())} id="userlogout">
            //   <div className="logout">
            //     <img
            //       src={userLogo}
            //       width={35}
            //       style={{ borderRadius: "50%" }}
            //     />
            //     <span id="logout">Logout</span>
            //   </div>
            // </li>
          )}
        </div>
      </ul>
    </nav>
  );
};
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
        if (!checkboxRef.current.checked)       setLabelText("&#9776;")
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
                
                { document.body.classList.contains("hideOverflow") &&
                        <div className= "mobile">
                            <ThemeButton/>
                        </div>  
                    }
                {/* Menu for Desktop */}
                <div className="menu">    
                    <div className='left-menu'>
                        <a href='#about'><li onClick={removeOverflow}>About Us</li></a>
                        <Link to='/resources'><li onClick={removeOverflow}>Resources</li></Link>
                        <a href='#team'><li onClick={removeOverflow}>Team</li></a>
                        <a href='#footer'><li onClick={removeOverflow}>Contact Us</li></a>
                            
                        <div className="dropdown">
                            <a href='#'><li>More  <i class="fa fa-caret-down"></i></li></a>
                            <div className="dropdown-content">
                                <a href='#'><li>Blogs</li></a>
                                <a href='#faq'><li>FAQ</li></a>
                                <a href='#' ><li>Achievements</li></a>
                            </div> 
                        </div>
                    </div>
                </div> 
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
                
                {/* Menu for Mobile Screen */}
                <div className="menu">
                { document.body.classList.contains("hideOverflow")  &&
                    <div className='left-menu'>
                        <a href='#about'><li onClick={removeOverflow}>About Us</li></a>
                        <Link to='/resources'><li onClick={removeOverflow}>Resources</li></Link>
                        <a href='#team'><li onClick={removeOverflow}>Team</li></a>
                        <a href='#footer'><li onClick={removeOverflow}>Contact Us</li></a>
                    
                        <div className="dropdown">
                            <a href='#'><li>More  <i class="fa fa-caret-down"></i></li></a>
                            <div className="dropdown-content">
                                    <a href='#'><li>Blogs</li></a>
                                    <a href='#faq'><li>FAQ</li></a>
                                    <a href='#' ><li>Achievements</li></a>
                            </div> 
                        </div>
                    </div>
                    }
                    <div className='right-menu'>
                        <div className='mobile-theme'>
                            { 
                            <ThemeButton/>
                            }
                        </div>
                    
                        <div>
                            <Profile handleOverflow={removeOverflow} />
                        </div> 
                    </div>
                </div>
                
            </ul>
        </nav>
    )
}

export default Navbar;
