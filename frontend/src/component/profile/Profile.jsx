import { useContext } from "react"
import { AuthContext } from "../../context/authContext/AuthContext"
import { logout } from '../../context/authContext/AuthActions'
import { Link } from "react-router-dom"
import userLogo from '../../Images/user-logo.jpg'


const Profile = ({ handleOverflow }) => {
    const { user, dispatch } = useContext(AuthContext)

    return (
        <>
            {!user
                ? <Link to='/login'><li onClick={handleOverflow}>Sign in</li></Link>
                : (
                    <li onClick={() => dispatch(logout())} id='userlogout'>
                        <div className="logout">
                            <img src={userLogo} width={35} style={{ "borderRadius": "50%" }} alt="avatar" />
                            <span id='logout'>Logout</span>
                        </div>
                    </li>
                )
            }
        </>
    )
}

export default Profile