/* IMAGES IMPORT */
import category1 from '../../Images/category-1.svg'
import category2 from '../../Images/category-2.svg'
import category3 from '../../Images/category-3.svg'
import category4 from '../../Images/category-4.svg'
import shape4 from '../../Images/about-shape-4.svg'
import heroBg from '../../Images/Background.png'
import videoBg from '../../Images/video-bg.png'
import shape2 from '../../Images/video-shape-2.png'
import blogBg from '../../Images/blog-bg.svg'
import video from '../../Images/video.mp4'
/* ----------------------------------------------------*/
import sayan from '../../Images/Sayan.jpeg'
import koustav from '../../Images/Koustav.jpeg'
import rohit from '../../Images/Rohit.jpeg'
import snehadrita from '../../Images/Snehadrita.jpeg'
import purbali from '../../Images/Purbali.jpeg'
import soumya from '../../Images/Soumya.jpeg'
import ayishik from '../../Images/Ayishik.jpg'
import gunjan from '../../Images/Gunjan.jpeg'
import snigdha from '../../Images/Snigdha.jpeg'
/*------------------------------------------------------*/

import Navbar from "../../component/navbar/Navbar"
import Category from '../../component/category/Category'
import Stat from '../../component/stats/Stat'
import Footer from '../../component/footer/Footer'
import ContactCard from '../../component/contactCard/ContactCard'
import Notice from '../../component/notice/Notice'
import Spinner from '../../component/spinner/Spinner'
import LoadingScreen from '../../component/loadingScreen/LoadingScreen'
import './home.css'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useInView } from 'react-intersection-observer'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectCoverflow, Pagination, Navigation } from 'swiper'



const Home = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [pageLoading, setPageLoading] = useState(false)
  const [loading, setLoading] = useState(false)


  /** API call for all the events */
  const fetchEvents = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/event/getevents')
      setUpcomingEvents(data)
    }
    catch (error) {
      throw error
    }
    finally {
      setLoading(false)
    }
  }

  const fetchPastEvents = async () => {
    try {
      setPageLoading(true)
      const { data } = await axios.get('/event/getpastevents')
      setPastEvents(data)
    }
    catch (error) {
      throw error
    }
    finally {
      setPageLoading(false)
    }
  }


  useEffect(() => {
    fetchEvents()
    fetchPastEvents()
  }, [])


  const backtopRef = useRef()
  window.addEventListener('scroll', () => {
    if (backtopRef.current !== null) {
      if (window.scrollY > 400) {
        backtopRef.current?.classList.add("active")
      } else {
        backtopRef.current?.classList.remove("active")
      }
    }
  })

  const { ref: playRef, inView, entry } = useInView({ threshold: 0.6 })
  if (entry !== undefined) {
    entry.target.muted = true
    inView ? entry.target.play() : entry.target.pause()
  }



  return (
    pageLoading ? <LoadingScreen />
      : <>
        <Helmet>
          <title>Resourcio Community</title>
        </Helmet>

        <Navbar />

        <main>
          <article>

            <section className="section hero has-bg-image" aria-label="home" style={{ "backgroundImage": `url(${heroBg})` }}>
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
                <div className="hero-banner">
                  <div className="noticeboard"
                    style={{
                      alignItems: upcomingEvents.length === 0 ? 'center' : '',
                      justifyContent: upcomingEvents.length === 0 ? 'center' : '',
                    }}
                  >
                    {loading ? <Spinner width='20px' height='20px' /> : upcomingEvents.length > 0 ?
                      upcomingEvents.map((event) => (
                        <Notice
                          key={event._id}
                          notice={event.event}
                          link={event.link}
                        />
                      )) :
                      !loading && <span className='noevents'>No events to show</span>
                    }
                    {upcomingEvents.length > 0 && <marquee behaviour='scroll' scrollamount='4'>Upcoming events</marquee>}
                  </div>
                </div>
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
                      cardText="Here you can get all relevant information and news about upcoming Hackathons"
                      style="42, 94%, 55%"
                    />
                  </li>
                </ul>
              </div>
            </section>


            <section className="section about" id='about' aria-label="about">
              <div className="container">
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
                      <span className="span">Maximum topics covered</span>
                    </li>
                    <li className="about-item">
                      <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
                      <span className="span">All in a single platform</span>
                    </li>
                  </ul>
                  <img src={shape4} width={100} height={100} loading="lazy" alt=""
                    className="shape about-shape-4" />
                </div>

                <div className="past-videos">
                  <span>Past workshops</span>
                  <Swiper
                    effect={'coverflow'}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 130,
                      modifier: 2.2
                    }}
                    navigation={{
                      prevEl: '.prev',
                      nextEl: '.next',
                      clickable: true
                    }}
                    modules={[Navigation, Pagination, EffectCoverflow]}
                    className='swiper-container'
                  >
                    {pastEvents.map((event) => (
                      <SwiperSlide key={event?._id}>
                        <iframe src={event?.eventLink} title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;' loading='eager' allowFullScreen></iframe>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className='navigation-btns'>
                    <div className='navigation-btn prev'>
                      <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className='navigation-btn next'>
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="video has-bg-image" aria-label="video" style={{ "backgroundImage": `url(${videoBg})` }}>
              <div className="container">
                <div className="video-card">
                  <div className="video-banner img-holder">
                    <video ref={playRef} width={850} loop>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                  <img src={shape2} width={158} height={174} loading="lazy" className="shape video-shape-2" />
                </div>
              </div>
            </section>


            <section className="section stats" aria-label="stats">
              <div className="container">
                <ul className="grid-list">
                  <li>
                    <Stat 
                      cardTitle="20"
                      cardText="Software Lanuages Covered"
                      style="170, 75%, 41%"
                    />
                  </li>
                  <li>
                    <Stat
                      cardTitle="200"
                      cardText="Resources Added"
                      style="351, 83%, 61%"
                      fontSize="35"
                    />
                  </li>
                  <li>
                    <Stat
                      cardTitle="10"
                      cardText="Servers Included"
                      style="260, 100%, 67%"
                      fontSize="35"
                    />
                  </li>
                  <li>
                    <Stat
                      cardTitle="1000"
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
                      image={soumya}
                      name='Soumyajit Mondal'
                      role='Owner & Developer'
                      linkedIn='https://www.linkedin.com/in/soumyajit-mondal-a0692b234/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={ayishik}
                      name='Ayishik Das'
                      role='Co-Owner & Marketing'
                      linkedIn='https://www.linkedin.com/in/ayishik-das-35a67a1a5/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={sayan}
                      name='Sayan Mukherjee'
                      role='Content Writer'
                      linkedIn='https://www.linkedin.com/in/sayan-mukherjee-975175229/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={koustav}
                      name='Koustav Chatterjee'
                      role='Social Media Handler'
                      linkedIn='https://www.linkedin.com/in/koustav-chatterjee-9b060b226/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={snehadrita}
                      name='Snehadrita Seth'
                      role='Designer'
                      linkedIn='https://www.linkedin.com/in/snehadrita-seth-6240821a9/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={gunjan}
                      name='Gunjan Saha'
                      role='Designer'
                      linkedIn='https://www.linkedin.com/in/gunjansaha55/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={rohit}
                      name='Rohit Chakrabarti'
                      role='Designer & Marketing'
                      linkedIn='https://www.linkedin.com/in/rohit-chakrabarti-04b981230/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={purbali}
                      name='Purbali Sadhukhan'
                      role='Social Media Handler'
                      linkedIn='https://www.linkedin.com/in/purbali-sadhukhan-30591a235/'
                    />
                  </li>
                  <li className="dev_card">
                    <ContactCard
                      image={snigdha}
                      name='Snigdha Kundu'
                      role='Designer & Social Media Handler'
                      linkedIn='https://www.linkedin.com/in/snigdha-kundu-2b4862254/'
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





        <style>
          {`
            .swiper-slide {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              backdrop-filter: blur(2.5px);
            }
            .swiper-slide-shadow-left {
              display: none;
            }
            .swiper-slide-shadow-right {
              display: none;
            }
            .swiper-pagination-bullets {
              display: none;
            }
          `}
        </style>
      </>
  )
}




export default Home