const sign_in_btn = document.querySelector("#sign-in-btn")
const sign_up_btn = document.querySelector("#sign-up-btn")
const container = document.querySelector(".container")
const loginEmail = document.querySelector("#login-email")
const loginPassword = document.querySelector("#login-password")
const loginButton = document.querySelector("#login-btn")


sign_up_btn.addEventListener('click', () => {
  container.classList.add("sign-up-mode")
})

sign_in_btn.addEventListener('click', () => {
  container.classList.remove("sign-up-mode")
})

loginButton.addEventListener('click', handleLogin)

async function handleLogin(e) {
  e.preventDefault()

  const res = await fetch("http://localhost:8383/api/auth/login", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value
    })
  })

  const data = await res.json()
  console.log(data)
}
