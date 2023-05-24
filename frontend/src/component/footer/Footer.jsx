import footerBg from '../../Images/footer-bg.png'
import communityLogo from '../../Images/Resourcio_community_logo.jpeg'
import whatsapp from '../../Images/WhatsApp.svg'
import gmail from '../../Images/gmail.svg'
import './footer.css'


const Footer = () => {
    return (
        <footer className="footer" style={{ "backgroundImage": `url(${footerBg})` }}>
            <div className="footer-top section">
                <div className="container">
                    <div className="footer-brand">
                        <img src={communityLogo} style={{ "border": "4px solid rgb(234, 255, 2)" }} width={100} height={100} />
                        <p className="footer-brand-text">
                            Thank You for visiting our website. Wishing you a very happy day ahead.
                        </p> 
                        <div className="wrapper">
                            <img src={whatsapp} height={45} width={45} />
                            <a href="https://chat.whatsapp.com/Km6AX9di04ZLIpFEcXTiNK" target="_blank" className="footer-link">
                                WhatsApp
                            </a>
                        </div>
                        <div className="wrapper">
                            <img src={gmail} className='wrapper-1' height={30} width={30} />
                            <a href="mailto:resourciocommunity22@gmail.com" target="_blank" className="footer-link">
                                resourciocommunity22@gmail.com
                            </a>
                        </div>
                        <div className="wrapper">
                            <ul className="social-list">
                                <li>
                                    {/* facebook */}
                                    <a href="https://www.facebook.com/profile.php?id=100088472180461" target="_blank" className="social-link facebook">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    {/* LinkedIn */}
                                    <a href="https://www.linkedin.com/company/resourcio-community2022/" target="_blank" className="social-link linkedin">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    {/* Instagram */}
                                    <a href="https://www.instagram.com/resourciocommunity22/" target="_blank" className="social-link instagram">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    {/* Twitter */}
                                    <a href="https://twitter.com/ResourcioC" target="_blank" className="social-link twitter">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    {/* Github */}
                                    <a href="https://github.com/Resourcio-Community" target="_blank" className="social-link github">
                                    <ion-icon name="logo-github"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    {/* Discord */}
                                    <a href="https://discord.gg/j2cMDF6Dtx" target="_blank" className="social-link discord">
                                    <ion-icon name="logo-discord"></ion-icon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-list">
                    </div>
                </div>
            </div>
            <hr className="footer-line" /> 
                    <p className="copyright">
                        Copyright &copy; {new Date().getFullYear()} All Rights Reserved <span className="copyright-link">Resourcio Community</span>
                    </p>
        </footer>
    )
}

export default Footer