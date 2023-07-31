import footerBg from '../../Images/footer-bg.png'
import communityLogo from '../../Images/main_t.png'
import whatsapp from '../../Images/WhatsApp.svg'
import gmail from '../../Images/gmail.svg'
import './footer.css'



const Footer = () => {
    return (
        <footer className="footer" id="footer" style={{ "backgroundImage": `url(${footerBg})` }}>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-brand" >
                        <div >
                            <img src={communityLogo}
                                // width={300}
                                height={120}
                                style={{ marginLeft: '-60px'}}
                                alt="community logo"
                            />
                            <p className="footer-brand-text" >
                                Thank You for visiting our website. <br />
                                Wishing you a very happy day ahead.
                            </p>
                            <div className="wrapper" >
                                <ul className="social-list" >
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100088472180461" target="_blank" className="social-link">
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
                                        <a href="https://github.com/Resourcio-Community" target="_blank" className="social-link">
                                            <ion-icon name="logo-github"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://discord.gg/j2cMDF6Dtx" target="_blank" className="social-link">
                                            <ion-icon name="logo-discord"></ion-icon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='flexlinks'>
                            <p>
                                Feel free to leave a message <br />
                                if you have any questions.
                            </p>
                            <br />

                            <div className="wrapper">
                                <img src={whatsapp} height={45} width={45} alt="whatsapp" />
                                <a href="https://chat.whatsapp.com/Km6AX9di04ZLIpFEcXTiNK" target="_blank" className="footer-link">
                                    WhatsApp
                                </a>
                            </div>
                            <div className="wrapper" >
                                <img src={gmail} className='wrapper-1' height={30} width={30} alt="gmail" />
                                <a href="mailto:resourciocommunity22@gmail.com" target="_blank" className="footer-link">
                                    resourciocommunity22@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        Copyright &copy; {new Date().getFullYear()} All Rights Reserved <span className="copyright-link">Resourcio Community</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
