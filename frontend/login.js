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


sign_up_btn.addEventListener('click', () => {
  container.classList.add("sign-up-mode")
})

sign_in_btn.addEventListener('click', () => {
  container.classList.remove("sign-up-mode")
})



loginButton.addEventListener('click', async (e) => {
  e.preventDefault()
  const email = loginEmail.value
  const password = loginPassword.value

  try {
    const res = await fetch('/api/auth/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    const data = await res.json()
    console.log(data)
  }
  catch (err) {
    console.log(err)
  }
})



signupButton.addEventListener('click', async (e) => {
  e.preventDefault()
  const name = signupName.value
  const username = signupUsername.value
  const email = signupEmail.value
  const password = signupPassword.value

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password
      })
    })

    const data = await res.json()
    if (res.status === 201) {
      console.log(data.status)
    }
    else {
      console.log(data)
    }
  }
  catch (err) {
    console.log(err)
  }
})