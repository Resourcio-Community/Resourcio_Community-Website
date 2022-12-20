import { useRef } from 'react'
import { Helmet } from 'react-helmet'
import './login.css'

const Login = () => {
    const container = useRef()

    const gotoSignup = () => {
        container.current.classList.add("sign-up-mode")
    }
    const gotoSignin = () => {
        container.current.classList.remove("sign-up-mode")
    }



    return (
        <div className="logincontainer" ref={container}>
            <Helmet>
                <title>Sign in</title>
            </Helmet>
            <div className="forms-container">
                <div className="signin-signup">
                    <form className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" autoFocus required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <button className="login solid" type="submit">Login</button>
                    </form>

                    <form className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fab fa-adn"></i>
                            <input type="text" placeholder="Name" autoFocus autoComplete="off" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Username" autoComplete="off" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" autoComplete="off" required />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Password" required />
                        </div>
                        <button className="login" type="submit">Sign up</button>
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
                        <button className="login transparent" onClick={gotoSignup}>
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
                        <button className="login transparent" onClick={gotoSignin}>
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