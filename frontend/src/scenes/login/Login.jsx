import { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import './login.css'

const Login = () => {
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


    return (
        <div className="logincontainer" ref={loginRef}>
            <Helmet>
                <title>Sign in</title>
            </Helmet>

            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="error_message"></div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" spellCheck="false" autoFocus required />
                        </div>
                        <div className="input-field password">
                            <i className="fas fa-eye" onClick={changeInputType}></i>
                            <input type={!hideshowPassword ? 'password' : 'text'} placeholder="Password" required />
                        </div>
                        <button className="loginpage-btn" type="submit">Login</button>
                    </form>

                    <form className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="usercreated"></div>
                        <div className="input-field">
                            <i className="fab fa-adn"></i>
                            <input type="text" placeholder="Name" autoFocus autoComplete="off" spellCheck="false"
                                required />
                            <div className="errormsg"></div>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" autoComplete="off" spellCheck="false"
                                required />
                            <div className="errormsg"></div>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" autoComplete="off" spellCheck="false"
                                required />
                            <div className="errormsg"></div>
                        </div>
                        <div className="input-field password">
                            <i className="fas fa-eye" onClick={changeInputType}></i>
                            <input type={!hideshowPassword ? 'password' : 'text'} placeholder="Password" required />
                            <div className="errormsg"></div>
                        </div>
                        <button className="loginpage-btn" type="submit">Sign up</button>
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