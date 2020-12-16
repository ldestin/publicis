import React from 'react'
import Cors from 'cors'
import MuiButton from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Layout from '../components/Layout'
import { Button } from '../components/button'

const cors = Cors({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS'],
})

export const getServerSideProps = async ({ req, res }) => {
  await cors(req, res, () => {})

  return { props: {} }
}

const script = `
  const backToLoginButton = document.getElementById('backToLoginButton')
  const intro = document.querySelector('.intro')
  const sendButton = document.querySelector('.sendCode')
  const buttons = sendButton.closest('.buttons')
  const cancelButton = document.querySelector('#cancel')
  const continueButton = document.querySelector('#continue')
  continueButton.style.display = 'none'
  const changeClaimsButton = document.querySelector('.changeClaims')
  buttons.appendChild(continueButton)
  document.querySelector('.backButton').addEventListener('click', () => cancelButton.click())
  document.querySelector('.logo').addEventListener('click', () => cancelButton.click())
  const sendNewCode = document.querySelector('.sendNewCode')
  backToLoginButton.addEventListener('click', () => history.back())
  buttons.insertBefore(backToLoginButton, sendButton)
  const inputs = document.querySelectorAll('.textInput')
  const onVerificationChange = (list, observer) => {
    const attribute = list[0]

    if (attribute.attributeName === 'aria-hidden') {
      const box = list[0].target
      if (box.getAttribute('aria-hidden') === 'false') {
        intro.innerHTML = 'Confirmation code'
        backToLoginButton.style.display = 'none'
        buttons.classList.add('reverse')
      } else {
        intro.innerHTML = 'Reset password'
        backToLoginButton.style.display = 'block'
        buttons.classList.remove('reverse')
      }
    }
  }
  const onChangeEmailChange = (list, observer) => {
    const attribute = list[0]

    if (attribute.attributeName === 'aria-hidden') {
      const box = list[0].target
      if (box.getAttribute('aria-hidden') === 'false') {
        const emailInput = document.getElementById('email')
        emailInput.disabled = true
        intro.innerHTML = 'Email verified'
        backToLoginButton.style.display = 'none'
        continueButton.style.display = 'block'
        buttons.classList.add('reverse')
        emailInput.closest('.MuiInputLabel-root').classList.add('Mui-disabled')
        emailInput.closest('.MuiInputBase-root').classList.add('Mui-disabled')
        emailInput.closest('.MuiTextField-root').classList.add('Mui-disabled')
      }
    }
  }
  const verificationObserver = new MutationObserver(onVerificationChange)
  const changeEmailObserver = new MutationObserver(onChangeEmailChange)

  changeEmailObserver.observe(changeClaimsButton, { attributes: true })
  verificationObserver.observe(document.querySelector('.VerificationCode'), { attributes: true })

  // inputs.forEach(input => {
  //   input.setAttribute('placeholder', '')
  //   const entry = input.closest('.attrEntry')
  //   entry.classList.add('inputEntry')
  //   const box = entry.closest('.EmailBox') || entry.closest('.TextBox')
  //   box.classList.add('inputBox')
  //   const error = entry.querySelector('.error')
  //   const label = entry.querySelector(\`[for=\${input.id}\`)
  //   const onErrorChange = (list, observer) => {
  //     const errorDiv = list[0].target
  //     if (errorDiv.innerHTML) {
  //       entry.classList.add('hasError')
  //     } else {
  //       entry.classList.remove('hasError')
  //     }
  //   }
  //   const errorObserver = new MutationObserver(onErrorChange)
  // })
`

const Test = () => (
  <Layout script={script}>
    <Button id="backToLoginButton" className="formButton" color="tertiary" size="large">Back to login</Button>
    <Button style={{ display: 'none' }} variant="contained" color="tertiary">Test</Button>
    <MuiButton style={{ display: 'none' }} variant="contained" color="primary"><div>Test</div>Test</MuiButton>
    <TextField style={{ display: 'none' }} focused error label="test" helperText="test" />
    <div id="api"></div>
  </Layout>
)

export default Test
