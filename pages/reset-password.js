import React from 'react'
import Cors from 'cors'
import Layout from '../components/Layout'
import { Button } from '../components/button'

const cors = Cors({
  methods: ['GET', 'OPTIONS'],
})

export const getServerSideProps = async ({ req, res }) => {
  // we need to enable CORS for active directory to query this page
  await cors(req, res, (result) => {
    if (result instanceof Error) {
      console.error(result);
    }
  });

  return { props: {} }
}

// script to override Active Directory injected form structure
const script = `
  const backToLoginButton = document.getElementById('backToLoginButton')
  const intro = document.querySelector('.intro')
  const sendButton = document.querySelector('.sendCode')
  const buttons = sendButton.closest('.buttons')
  const continueButton = document.querySelector('#continue')
  continueButton.style.display = 'none'
  const changeClaimsButton = document.querySelector('.changeClaims')
  buttons.appendChild(continueButton)
  const sendNewCode = document.querySelector('.sendNewCode')
  backToLoginButton.addEventListener('click', () => history.back())
  buttons.insertBefore(backToLoginButton, sendButton)
  const onVerificationChange = (list, observer) => {
    const attribute = list[0]

    if (attribute.attributeName === 'aria-hidden') {
      const box = list[0].target
      // when verification box is hidden, we are in the reset password form
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
      const button = list[0].target
      // when claims button is hidden, we go on email verified part
      if (button.getAttribute('aria-hidden') === 'false') {
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
    <Button id="backToLoginButton" className="nativeButton" color="tertiary" size="large">Back to login</Button>
    <div id="api"></div>
  </Layout>
)

export default ResetPassword
