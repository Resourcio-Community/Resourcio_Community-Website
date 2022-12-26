/* IMAGES IMPORT */
import Email from '../../Images/Email_logo.svg'
import Clipart from '../../Images/cartoon.png'
import heroImage from '../../Images/hero-bg.svg'
import Artboard from '../../Images/_Artboardcomp.webp'
import category1 from '../../Images/category-1.svg'
import category2 from '../../Images/category-2.svg'
import category3 from '../../Images/category-3.svg'
import category4 from '../../Images/category-4.svg'
import aboutImg from '../../Images/Soumya_Ayishik.jpeg'
import shape3 from '../../Images/about-shape-3.png'
import shape4 from '../../Images/about-shape-4.svg'
import videoBg from '../../Images/video-bg.png'
import shape1 from '../../Images/video-shape-1.png'
import shape2 from '../../Images/video-shape-2.png'
import blogBg from '../../Images/blog-bg.svg'
/* ----------------------------------------------------*/
import sayan from '../../Images/Sayan.jpeg'
import koustav from '../../Images/Koustav.jpeg'
import snehadrita from '../../Images/Snehadrita.jpeg'
import gunjan from '../../Images/Gunjan.jpeg'


import Navbar from "../../component/navbar/Navbar"
import Category from '../../component/category/Category'
import Stat from '../../component/stats/Stat'
import Footer from '../../component/footer/Footer'
import ContactCard from '../../component/contactCard/ContactCard'
import './home.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { Helmet } from 'react-helmet'


const Home = () => {
  const backtopRef = useRef()
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backtopRef.current.classList.add("active")
    } else {
      backtopRef.current.classList.remove("active")
    }
  })


  return (
    <>
      <Helmet>
        <title>Resourcio Community</title>
      </Helmet>

      <Navbar />

      <main>
        <article>

          <section className="section hero has-bg-image" aria-label="home"
            style={{ "backgroundImage": `url(${heroImage})` }}>
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 section-title" style={{ "fontSize": "50px" }}>
                  The Best Website for students to <span className="span">Search</span> for Software Resources.
                </h1>
                <p className="hero-text">
                  Hello future engineers!<br />Welcome to <b>Resourcio Community</b>!! A one stop hub for all your
                  resources and queries
                  regarding different software languages.
                </p>
                <Link to='/resources' className='link btn has-before'>
                  <span>Find Resources</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </Link>
              </div>
              <figure className="hero-banner">
                <div className="img-holder one" style={{ "--width": "270", "--height": "300" }}>
                  <img src={Artboard} width="270" height="300" alt="hero banner" className="img-cover" />
                </div>
                <div className="img-holder two" style={{ "--width": "240", "--height": "370" }}>
                  <img src={Clipart} width="240" height="370" alt="hero banner" className="img-cover" />
                </div>
                <img src={Email} width="340" height="170" alt="email-icon" className="shape hero-shape-1" />
              </figure>
            </div>
          </section>


          <section className="section category" aria-label="category">
            <div className="container">
              <p className="section-subtitle">Categories</p>
              <h2 className="h2 section-title">
                Online <span className="span">Resources</span> For Remote Learning.
              </h2>
              <p className="section-text">
                Here are the different resouces:
              </p>
              <ul className="grid-list">
                <li>
                  <Category
                    image={category1}
                    cardTitle="CP Resources"
                    cardText="Here you can get all information and valuable resources about competetive programming at free-of-cost"
                    style="170, 75%, 41%"
                  />
                </li>

                <li>
                  <Category
                    image={category2}
                    cardTitle="Development Resources"
                    cardText="Here you can get all information and valuable resources about development at free-of-cost"
                    style="351, 83%, 61%"
                  />
                </li>

                <li>
                  <Category
                    image={category3}
                    cardTitle="Open Source Universe"
                    cardText="Here you can get all information about how and where to start open source contributions"
                    style="229, 75%, 58%"
                  />
                </li>

                <li>
                  <Category
                    image={category4}
                    cardTitle="About Hackathons"
                    cardText="Here you can get all information and news about upcoming Hackathons"
                    style="42, 94%, 55%"
                  />
                </li>
              </ul>
            </div>
          </section>


          <section className="section about" id='about' aria-label="about">
            <div className="container">
              <figure className="about-banner">
                <div className="img-holder" style={{ "--width": "520", "--height": "370" }}>
                  <div className="impLinks left">
                    <a href="https://github.com/Soumyajit2825" target="_blank"><ion-icon
                      name="logo-github"></ion-icon></a>
                    <a href="https://www.linkedin.com/in/soumyajit-mondal-a0692b234/" target="_blank"><ion-icon
                      name="logo-linkedin"></ion-icon></a>
                  </div>
                  <div className="about-info" style={{ "--width": "422", "--height": "422" }}>
                    <img src={aboutImg} loading="lazy" alt="about banner" id="img-cover" />
                  </div>
                  <div className="impLinks right">
                    <a href="https://github.com/AyishikD" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                    <a href="https://www.linkedin.com/in/ayishik-das-35a67a1a5/" target="_blank"><ion-icon
                      name="logo-linkedin"></ion-icon></a>
                  </div>
                </div>
                <img src={shape3} width={722} height={528} loading="lazy" className="shape about-shape-3" />
              </figure>
              <div className="about-content">
                <p className="section-subtitle" style={{ "color": "var(--gray-web)" }}>About Us</p>
                <h3 className="h2 section-title">
                  A group of enthusiastic <span className="span">Engineers keen to</span> help their fellow Engineers.
                </h3>
                <p className="section-text" style={{ "color": "var(--gray-web)" }}>
                  Through Resourcio we have tried to bring in different resources related to software development and
                  other
                  different fields related to software enginnering in a single place. We want to provide students a single platform where
                  they
                  can find all new resources and they dont need to browse the web extensively for learning them.
                </p>
                <ul className="about-list" style={{ "fontSize": "1.5rem" }}>
                  <li className="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                    <span className="span">Free Resources</span>
                  </li>
                  <li className="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                    <span className="span">Maximum topics covered Extensively</span>
                  </li>
                  <li className="about-item">
                    <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                    <span className="span">All in single platform</span>
                  </li>
                </ul>
                <img src={shape4} width={100} height={100} loading="lazy" alt=""
                  className="shape about-shape-4" />
              </div>
            </div>
          </section>


          <section className="video has-bg-image" aria-label="video" style={{ "backgroundImage": `url(${videoBg})` }}>
            <div className="container">
              <div className="video-card">
                <div className="video-banner img-holder has-after">
                  <img src="" width={970} height={450} loading="lazy" alt="video banner" className="img-cover" />
                  <button className="play-btn" aria-label="play video">
                    <ion-icon name="play" aria-hidden="true"></ion-icon>
                  </button>
                </div>
                <img src={shape1} width={1089} height={605} loading="lazy" className="shape video-shape-1" />
                <img src={shape2} width={158} height={174} loading="lazy" className="shape video-shape-2" />
              </div>
            </div>
          </section>


          <section className="section stats" aria-label="stats">
            <div className="container">
              <ul className="grid-list">
                <li>
                  <Stat
                    cardTitle="50+"
                    cardText="Software Languages Covered"
                    style="170, 75%, 41%"
                  />
                </li>
                <li>
                  <Stat
                    cardTitle="100+"
                    cardText="Resources Added"
                    style="351, 83%, 61%"
                    fontSize="35"
                  />
                </li>
                <li>
                  <Stat
                    cardTitle="5+"
                    cardText="Servers Included"
                    style="260, 100%, 67%"
                    fontSize="35"
                  />
                </li>
                <li>
                  <Stat
                    cardTitle="100+"
                    cardText="Members Visited"
                    style="42, 94%, 55%"
                    fontSize="35"
                  />
                </li>
              </ul>
            </div>
          </section>


          <section className="section blog has-bg-image" id="contact" aria-label="contact" style={{ "backgroundImage": `url(${blogBg})` }}>
            <div className="container">
              <p className="section-subtitle" style={{ "color": "var(--gray-web)" }}>Contact Us</p>
              <h2 className="h2 section-title">Get in touch with us</h2>
              <ul className="grid-list">

                <li className="dev_card">
                  <ContactCard
                    image={sayan}
                    name='Sayan Mukherjee'
                    role='Developer'
                    linkedIn='https://www.linkedin.com/in/sayan-mukherjee-975175229/'
                  />
                </li>

              </ul>
            </div>
          </section>

        </article >
      </main >

      <Footer />

      <a href="#" className="back-top-btn" aria-label="back top top" ref={backtopRef}>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </>
  )
}

export default Home