import React from 'react'
import Cors from 'cors'
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
  document.querySelector('#backButton').addEventListener('click', () => cancelButton.click())
  document.querySelector('#logo').addEventListener('click', () => cancelButton.click())
  const sendNewCode = document.querySelector('.sendNewCode')
  backToLoginButton.addEventListener('click', () => history.back())
  buttons.insertBefore(backToLoginButton, sendButton)
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
`

const ResetPassword = () => (
  <Layout script={script} materialSelectors={{ textFields: '#api .textInput', textButtons: '.sendNewCode', containedButtons: '#api button:not(.sendNewCode)' }}>
    <Button style={{ display: 'none' }} variant="contained" color="primary">Example</Button>
    <TextField style={{ display: 'none' }} focused error label="Example" helperText="Example" />
    <Button id="backToLoginButton" className="nativeButton" color="tertiary" size="large">Back to login</Button>
    <div id="api"></div>
  </Layout>
)

export default ResetPassword
