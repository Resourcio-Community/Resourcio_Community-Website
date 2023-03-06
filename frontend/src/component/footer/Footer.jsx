import footerBg from '../../Images/footer-bg.png'
import communityLogo from '../../Images/Resourcio_community_logo.jpeg'
import './footer.css'


const Footer = () => {
    return (
        <footer className="footer" style={{ "backgroundImage": `url(${footerBg})`}}>
            <div className="footer-top section">
                <div className="container grid-list">
                    <div className="footer-brand">
                        <img src={communityLogo} style={{ "border": "4px solid rgb(234, 255, 2)" }} width={162} alt="EduWeb logo" />
                        <p className="footer-brand-text">
                            Thank You for visiting our website. Wishing you a very happy day ahead.
                        </p>
                        <div className="wrapper">
                            <span className="span">WhatsApp:</span>
                            <a href="https://chat.whatsapp.com/Km6AX9di04ZLIpFEcXTiNK" target="_blank" className="footer-link">
                                Click Here
                            </a>
                        </div>
                        <div className="wrapper">
                            <span className="span">Email:</span>
                            <a href="mailto:resourciocommunity22@gmail.com" target="_blank"
                                className="footer-link">
                                resourciocommunity22@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="footer-list">
                        <p className="footer-list-title">Contacts</p>
                        <p className="footer-list-text">
                            Enter your email address to register to our newsletter subscription.
                        </p>
                        <form className="newsletter-form">
                            <input type="email" name="email_address" placeholder="Your email" required className="email-field"
                                autoComplete="off" />
                            <button type="submit" className="btn has-before">
                                <span className="span">Subscribe</span>
                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </button>
                        </form>
                        <ul className="social-list">
                            <li>
                                <a href="https://lnkd.in/ez_CeQjY" target="_blank" className="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/resourcio-community2022/" target="_blank" className="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/resourciocommunity22/" target="_blank" className="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/ResourcioC" target="_blank" className="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://lnkd.in/eg4dTQGu" target="_blank" className="social-link">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="https://lnkd.in/eGnFvfSp" target="_blank" className="social-link">
                                    <ion-icon name="logo-discord"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        Copyright &copy; 2022 All Rights Reserved <span className="copyright-link">Resourcio Community</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer