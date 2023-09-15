import logo from "../../Images/site_assets/favicon.webp"
import "./navbar.css"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import Profile from "../profile/Profile"
import ThemeButton from "../themeChange/ThemeButton"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeBackground)

    return () => window.removeEventListener("scroll", changeBackground)
  }, [])

  const [labelText, setLabelText] = useState("&#9776")
  const hidebodyOverflow = (e) => {
    document.body.classList.toggle("hideOverflow")
    if (!checkboxRef.current.checked) setLabelText("&#9776")
    else setLabelText("&times")
  }
  const checkboxRef = useRef()
  const removeOverflow = () => {
    checkboxRef.current.checked = false
    document.body.classList.remove("hideOverflow")
    setLabelText("&#9776")
  }

  return (
    <nav className={navbar ? "navbar" : "navbar_scroll"}>
      <div className="community_logo">
        <div style={{ display: "flex" }}>
          <img
            className="community_img"
            src={logo}
            width={55}
            height={55}
            alt="logo"
          />
        </div>

        {document.body.classList.contains("hideOverflow") && (
          <div className="mobile">
            <ThemeButton />
          </div>
        )}
        {/* Menu for Desktop */}
        <div className="menu">
          <div className="left-menu">
            <a href="#about">
              <li onClick={removeOverflow}>About Us</li>
            </a>
            <Link to="/resources">
              <li onClick={removeOverflow}>Resources</li>
            </Link>
            <a href="#team">
              <li onClick={removeOverflow}>Team</li>
            </a>
            <a href="#footer">
              <li onClick={removeOverflow}>Contact Us</li>
            </a>

            {/* <div className="dropdown">
              <a href="#">
                <li>
                  More <i class="fa fa-caret-down"></i>
                </li>
              </a>
              <div className="dropdown-content">
                <a href="#">
                  <li>Blogs</li>
                </a>
                <a href="#faq">
                  <li>FAQ</li>
                </a>
                <a href="#">
                  <li>Achievements</li>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <ul className="nav-links">
        <input
          type="checkbox"
          id="checkbox_toggle"
          onClick={hidebodyOverflow}
          ref={checkboxRef}
        />
        <label
          htmlFor="checkbox_toggle"
          style={{
            fontSize: labelText === "&times" ? "35px" : "24px",
          }}
          className="hamburger"
          dangerouslySetInnerHTML={{ __html: labelText }}
        ></label>

        {/* Menu for Mobile Screen */}
        <div className="menu">
          {document.body.classList.contains("hideOverflow") && (
            <div className="left-menu">
              <a href="#about">
                <li onClick={removeOverflow}>About Us</li>
              </a>
              <Link to="/resources">
                <li onClick={removeOverflow}>Resources</li>
              </Link>
              <a href="#team">
                <li onClick={removeOverflow}>Team</li>
              </a>
              <a href="#footer">
                <li onClick={removeOverflow}>Contact Us</li>
              </a>

              {/* <div className="dropdown">
                <a href="#">
                  <li>
                    More <i class="fa fa-caret-down"></i>
                  </li>
                </a>
                <div className="dropdown-content">
                  <a href="#">
                    <li>Blogs</li>
                  </a>
                  <a href="#faq">
                    <li>FAQ</li>
                  </a>
                  <a href="#">
                    <li>Achievements</li>
                  </a>
                </div>
              </div> */}
            </div>
          )}
          <div className="right-menu">
            <div className="mobile-theme"><ThemeButton /></div>
            <Profile handleOverflow={removeOverflow} />
          </div>

        </div>
      </ul>
    </nav>
  )
}

export default Navbar
