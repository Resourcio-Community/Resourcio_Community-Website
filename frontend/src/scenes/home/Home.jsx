/* IMAGES IMPORT */
import Email from '../../Images/Email_logo.svg'
import Clipart from '../../Images/501-5017607_programmer-png-clipart-computer-programming-software-programmer-cartoon.png'
import heroImage from '../../Images/hero-bg.svg'
import category1 from '../../Images/category-1.svg'
import category2 from '../../Images/category-2.svg'
import Artboard from '../../Images/_Artboardcomp.webp'
import category3 from '../../Images/category-3.svg'
import category4 from '../../Images/category-4.svg'
/* ----------------------------------------------------*/ 

import Navbar from "../../component/navbar/Navbar"
import Category from '../../component/category/Category'
import Stat from '../../component/stats/Stat'
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

          <section className="section hero has-bg-image" aria-label="home"
            style={{ "backgroundImage": `url(${heroImage})` }}>
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
                  <a href="#">
                    <Category
                      image={category1}
                      cardTitle="GATE Exam Resources"
                      cardText="Here you can get all information and valuable resources about GATE exam at free-of-cost"
                      style="170, 75%, 41%"
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Category
                      image={category2}
                      cardTitle="CAT Exam Resources"
                      cardText="Here you can get all information and valuable resources about CAT exam at free-of-cost"
                      style="351, 83%, 61%"
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Category
                      image={category3}
                      cardTitle="Open Source Universe"
                      cardText="Here you can get all information about how and where to start open source contributions"
                      style="229, 75%, 58%"
                    />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <Category
                      image={category4}
                      cardTitle="About Hackathons"
                      cardText="Here you can get all information and news about upcoming Hackathons"
                      style="42, 94%, 55%"
                    />
                  </a>
                </li>
              </ul>
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