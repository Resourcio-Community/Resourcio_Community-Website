import Email from '../../Images/Email_logo.svg'
import Clipart from '../../Images/501-5017607_programmer-png-clipart-computer-programming-software-programmer-cartoon.png'
import Artboard from '../../Images/_Artboardcomp.webp'
import Navbar from "../../component/navbar/Navbar"
import './home.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

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
      <Navbar />

      <main>
        <article>

          <section className="section hero has-bg-image" aria-label="home">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 section-title" style={{ "fontSize": "57px" }}>
                  The Best Website for students to <span className="span">Search</span> for Software Resources.
                </h1>
                <p className="hero-text">
                  Hello future engineers!<br />Welcome to <b>Resourcio Community</b>!! A one stop hub for all your
                  resources and queries
                  regarding different software languages.
                </p>
                <Link to='/resources' target='_blank' className='link btn has-before'>
                  <span>Find Resources</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </Link>
              </div>
              <figure className="hero-banner">
                <div className="img-holder one">
                  <img src={Artboard} width="270" height="300" alt="hero banner" className="img-cover" />
                </div>
                <div className="img-holder two">
                  <img src={Clipart} width="240" height="370" alt="hero banner" className="img-cover" />
                </div>
                <img src={Email} width="340" height="170" alt="email-icon" className="shape hero-shape-1" />
              </figure>
            </div>
          </section>

          <a href="#" className="back-top-btn" aria-label="back top top" ref={backtopRef}>
            <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
          </a>

        </article>
      </main>
    </>
  )
}

export default Home