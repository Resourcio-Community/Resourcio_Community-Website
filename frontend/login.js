const sign_in_btn = document.querySelector("#sign-in-btn")
const sign_up_btn = document.querySelector("#sign-up-btn")
const container = document.querySelector(".container")
const loginEmail = document.querySelector("#login-email")
const loginPassword = document.querySelector("#login-password")
const loginButton = document.querySelector("#login-btn")
const signupName = document.querySelector("#signup-name")
const signupUsername = document.querySelector("#signup-username")
const signupEmail = document.querySelector("#signup-email")
const signupPassword = document.querySelector("#signup-password")
const signupButton = document.querySelector("#signup-btn")
const userCreated = document.querySelector('.usercreated')
const errorMsg = document.querySelector('.error_message')
const Name = document.querySelector('#name')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const eyes = document.querySelectorAll('.password i')


sign_up_btn.addEventListener('click', () => {
  container.classList.add("sign-up-mode")
})

sign_in_btn.addEventListener('click', () => {
  container.classList.remove("sign-up-mode")
})



loginButton.addEventListener('click', async (e) => {
  e.preventDefault()

  try {
    const res = await fetch('/api/auth/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginEmail.value,
        password: loginPassword.value
      })
    })

    const data = await res.json()
    
    if (res.status === 401) {
      errorMsg.innerText = data
      errorMsg.style.display = 'block'
    }
    else if (res.status === 200) {
      localStorage.setItem('user', JSON.stringify(data))
      window.location.href = '/'
    }
  }
  catch (err) {
    console.log(err)
  }
})



signupButton.addEventListener('click', async (e) => {
  e.preventDefault()

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: signupName.value,
        username: signupUsername.value,
        email: signupEmail.value,
        password: signupPassword.value
      })
    })

    const data = await res.json()
    if (res.status === 201) {
      userCreated.innerText = data.status
      userCreated.style.display = 'block'
    }
    else {
      Name.innerText = data.name || ''
      username.innerText = data.username || ''
      email.innerText = data.email || ''
      password.innerText = data.password || ''
    }
  }
  catch (err) {
    console.log(err)
  }
})



/* Hide and show password */
eyes.forEach((eye) => {
  eye.addEventListener('click', () => {
    loginPassword.type === 'password' ? loginPassword.type = 'text' : loginPassword.type = 'password'
    signupPassword.type === 'password' ? signupPassword.type = 'text' : signupPassword.type = 'password'
  })
})