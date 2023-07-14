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

export default Navbar;
