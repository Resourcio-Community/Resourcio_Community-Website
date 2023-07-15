import { useContext } from "react"
import { AuthContext } from "../../context/authContext/AuthContext"
import { logout } from '../../context/authContext/AuthActions'
import { Link } from "react-router-dom"
import { useState } from "react";
import userLogo from '../../Images/user-logo.jpg'
import logoutLogo from "../../Images/logout.png"
import './profile.css'


const Profile = ({ handleOverflow }) => {
    const { user, dispatch } = useContext(AuthContext)
    const [dropdownVisible, setDropdownVisible] = useState(false);
    return (
        <>
            {/* {!user
                ? <Link to='/login'><li onClick={handleOverflow}>Sign in</li></Link>
                : (
                    <li onClick={() => dispatch(logout())} id='userlogout'>
                        <div className="logout">
                            <img src={userLogo} width={35} style={{ "borderRadius": "50%" }} alt="avatar" />
                            <span id='logout'>Logout</span>
                        </div>
                    </li>
                )
            } */}
            {!user ? (
            <Link to="/login">
              <li onClick={handleOverflow}>Sign in</li>
            </Link>
          ) : (
            <li
              className="dropdown-profile"
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
          )}
        </>
    )
}

export default Profile