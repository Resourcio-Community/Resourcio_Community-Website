'use strict'


/* add event on element */


const addEventOnElem = (elem, type, callback) => {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback)
    }
  } else {
    elem.addEventListener(type, callback)
  }
}


const navbar = document.querySelector(".navbar")
const navTogglers = document.getElementById("checkbox_toggle")
const navLinks = document.querySelectorAll("[data-nav-link]")


/* back-to-top button active when scroll down to 400px */

const backTopBtn = document.querySelector("[data-back-top-btn]")

const activeElem = () => {
  if (window.scrollY > 400) {
    backTopBtn.classList.add("active")
  } else {
    backTopBtn.classList.remove("active")
  }
}
addEventOnElem(window, "scroll", activeElem)



document.querySelector('.hamburger').addEventListener('click', () => {
  document.body.classList.toggle('hideOverflow')

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      if (navLink.innerText === 'Home') {
        window.location.reload()
      }
      else {
        navTogglers.checked = false
        document.body.classList.remove('hideOverflow')
      }
    })
  })
})


