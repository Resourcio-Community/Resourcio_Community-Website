import { useContext, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import './login.css'
import { AuthContext } from '../../authContext/AuthContext'
import { loginFailure, loginStart, loginSuccess } from '../../authContext/AuthActions'


const Login = () => {
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL
    })

    const loginRef = useRef()
    const gotoSignup = () => {
        loginRef.current.classList.add("sign-up-mode")
    }
    const gotoSignin = () => {
        loginRef.current.classList.remove("sign-up-mode")
    }


    const [hideshowPassword, setHideShowPassword] = useState(false)
    const changeInputType = () => {
        setHideShowPassword(!hideshowPassword)
    }

    const [signupPasswordRequired, setSignupPasswordRequired] = useState(false)
    const [signupRes, setSignupRes] = useState({})
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault()

        if (password !== '') {
            setSignupPasswordRequired(false)
            try {
                const res = await axiosInstance.post('/auth/register', { name, username, email, password })
                setSignupRes(res)
                
                setTimeout(() => {
                    window.location.href = '/'
                }, 3000)
            }
            catch (err) {
                setSignupRes(err.response)
            }
        }
        else {
            setSignupPasswordRequired(true)
        }
    }


    /* API CALL */
    const [loginRes, setLoginRes] = useState({})
    const login = async (user, dispatch) => {
        dispatch(loginStart())

        try {
            const res = await axiosInstance.post('/auth/login', user)
            dispatch(loginSuccess(res.data))
        }
        catch (err) {
            setLoginRes(err.response)
            dispatch(loginFailure())
        }
    }
    /* --------------------------------------------------------- */


    const [loginPasswordRequired, setLoginPasswordRequired] = useState(false)
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const { dispatch } = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault()

        if (loginPassword !== '') {
            setLoginPasswordRequired(false)
            login({ email: loginEmail, password: loginPassword }, dispatch)
        }
        else {
            setLoginPasswordRequired(true)
        }
    }



    return (
        <div className="logincontainer" ref={loginRef}>
            <Helmet>
                <title>Sign in</title>
            </Helmet>

            <div className="forms-container">
                <div className="signin-signup">
                    <form className="form sign-in-form">
                        <h2 className="title">Sign in</h2>
                        {loginRes.status === 401 &&
                            <div className="error_message">{loginRes.data}</div>
                        }
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" spellCheck="false" required autoComplete='on' onChange={(e) => setLoginEmail(e.target.value)} />
                        </div>
                        <div className="input-field password">
                            <i className="fas fa-eye" onClick={changeInputType}></i>
                            <input type={!hideshowPassword ? 'password' : 'text'} placeholder="Password" required onChange={(e) => setLoginPassword(e.target.value)} />
                            <div className="errormsg">
                                {loginPasswordRequired ? 'Fill out Password' : undefined}
                            </div>
                        </div>
                        <button className="loginpage-btn" type="submit" onClick={handleLogin}>Login</button>
                    </form>

                    <form className="form sign-up-form">
                        <h2 className="title">Sign up</h2>
                        {signupRes.status === 201 &&
                            <div className="usercreated">{signupRes.data.status}</div>
                        }
                        <div className="input-field">
                            <i className="fab fa-adn"></i>
                            <input type="text" placeholder="Name" autoComplete="off" spellCheck="false" onChange={(e) => setName(e.target.value)} />
                            {signupRes.status === 500 &&
                                <div className="errormsg">
                                    {signupRes.data.name || undefined}
                                </div>
                            }
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" autoComplete="off" spellCheck="false" required onChange={(e) => setUsername(e.target.value)} />
                            {signupRes.status === 500 &&
                                <div className="errormsg">
                                    {signupRes.data.username || undefined}
                                </div>
                            }
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" autoComplete="off" spellCheck="false" required onChange={(e) => setEmail(e.target.value)} />
                            {signupRes.status === 500 &&
                                <div className="errormsg">
                                    {signupRes.data.email || undefined}
                                </div>
                            }
                        </div>
                        <div className="input-field password">
                            <i className="fas fa-eye" onClick={changeInputType}></i>
                            <input type={!hideshowPassword ? 'password' : 'text'} placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                            <div className="errormsg">
                                {signupPasswordRequired ? 'Enter Password' : undefined}
                            </div>
                        </div>
                        <button className="loginpage-btn" type="submit" onClick={handleSignup}>Sign up</button>
                    </form>

                </div>
            </div>


            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Join with us
                        </p>
                        <button
                            className="loginpage-btn transparent"
                            onClick={gotoSignup}
                        >
                            Sign up
                        </button>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Already have an account
                        </p>
                        <button
                            className="loginpage-btn transparent"
                            onClick={gotoSignin}
                        >
                            Sign in
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Login