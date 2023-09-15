import sayan from "../../Images/team/Sayan.webp"
import koustav from "../../Images/team/Koustav.webp"
import rohit from "../../Images/team/Rohit.webp"
import snehadrita from "../../Images/team/Snehadrita.webp"
import purbali from "../../Images/team/Purbali.webp"
import soumya from "../../Images/team/Soumya.webp"
import ayishik from "../../Images/team/Ayishik.webp"
import gunjan from "../../Images/team/Gunjan.webp"
import snigdha from "../../Images/team/Snigdha.webp"
import ContactCard from "../contactCard/ContactCard"
import blogBg from "../../Images/site_assets/blog-bg.svg"
import "aos/dist/aos.css"
import { ThemeContext } from "../../context/ThemeContext"
import { useContext } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'


const Team = () => {
  const { darkMode } = useContext(ThemeContext)
  const sliderSettings = {
    className: 'center',
    centerMode: true,
    centerPadding: '40px',
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    prevArrow: <ArrowCircleLeftIcon sx={{zIndex: 100}} />,
    nextArrow: <ArrowCircleRightIcon />
  }


  return (
    <section
      className="section blog has-bg-image"
      id="team"
      aria-label="contact"
      style={{
        backgroundImage: `url(${blogBg})`,
        filter: darkMode ? "invert(1)" : "invert(0)",
      }}
    >
      <div
        className="container"
        style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
      >
        <p className="section-subtitle" style={{ color: "var(--gray-web)" }}>
          Team
        </p>
        <h2 className="h2 section-title" data-aos="fade-right">
          Get in touch with us
        </h2>
        <Slider {...sliderSettings}>
          <div className="dev_card">
            <ContactCard
              image={soumya}
              name="Soumyajit Mondal"
              role="Owner & Developer"
              linkedIn="https://www.linkedin.com/in/soumyajit-mondal-a0692b234/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={ayishik}
              name="Ayishik Das"
              role="Co-Owner & Marketing"
              linkedIn="https://www.linkedin.com/in/ayishik-das-35a67a1a5/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={sayan}
              name="Sayan Mukherjee"
              role="Content Writer"
              linkedIn="https://www.linkedin.com/in/sayan-mukherjee-975175229/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={koustav}
              name="Koustav Chatterjee"
              role="Social Media Handler"
              linkedIn="https://www.linkedin.com/in/koustav-chatterjee-9b060b226/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={snehadrita}
              name="Snehadrita Seth"
              role="Designer"
              linkedIn="https://www.linkedin.com/in/snehadrita-seth-6240821a9/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={gunjan}
              name="Gunjan Saha"
              role="Designer"
              linkedIn="https://www.linkedin.com/in/gunjansaha55/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={rohit}
              name="Rohit Chakrabarti"
              role="Designer & Marketing"
              linkedIn="https://www.linkedin.com/in/rohit-chakrabarti-04b981230/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={purbali}
              name="Purbali Sadhukhan"
              role="Social Media Handler"
              linkedIn="https://www.linkedin.com/in/purbali-sadhukhan-30591a235/"
            />
          </div>
          <div className="dev_card">
            <ContactCard
              image={snigdha}
              name="Snigdha Kundu"
              role="Designer & Social Media Handler"
              linkedIn="https://www.linkedin.com/in/snigdha-kundu-2b4862254/"
            />
          </div>
          {/* Add the rest of the team members here */}
        </Slider>
      </div>
    </section>
  )
}

export default Team
