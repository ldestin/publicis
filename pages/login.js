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
$('.intro').html('<h1 class="MuiTypography-root MuiTypography-h3 MuiTypography-alignCenter">Login to access your account</h1>')

//Handle Form customization
$('form').addClass('makeStyles-form-57').attr('novalidate', true);

//Email customization
$('label[for="email"],label[for="password"]').parent('.entry-item').addClass('MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth')
$('label[for="email"],label[for="password"]').addClass('MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-required Mui-required');

$("#email,#password").wrap('<div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl"></div>');
$("#email").addClass('MuiInputBase-input MuiInput-input').attr('placeholder', 'Email');
$("#password").addClass('MuiInputBase-input MuiInput-input');

//Email validation changes
var emailRegex = $('#email').attr('pattern');
$('#email').removeAttr('pattern');

//Password style changes
$('.password-label').parent('.entry-item').addClass('password-wrapper MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth');
//Forgot password
$('#forgotPassword').insertAfter('.password-wrapper').wrap('<div class="MuiGrid-root MuiGrid-container MuiGrid-justify-xs-flex-end forgot-password">').addClass('MuiTypography-root MuiLink-root MuiLink-underline MuiTypography-subtitle2 MuiTypography-colorTextSecondary');
//Error Message
$('.error.pageLevel p').data('test-id','errorMsgNoMatchingEmail');
`

const Login = () => (
  <Layout script={script} materialSelectors={{ textFields: '#api .textInput', textButtons: '.sendNewCode', containedButtons: '#api button:not(.sendNewCode)' }}>
    <Button style={{ display: 'none' }} variant="contained" color="primary">Example</Button>
    <TextField style={{ display: 'none' }} focused error label="Example" helperText="Example" />
    <Button id="backToLoginButton" className="nativeButton" color="tertiary" size="large">Back to login</Button>
    <div id="api"></div>
  </Layout>
)

export default Login
