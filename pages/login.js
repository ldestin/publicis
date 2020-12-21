import React from 'react'
import Cors from 'cors'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '../components/button'
import Layout from '../components/Layout'
import DividerWithText from '../components/divider-with-text';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      minHeight: '580px',
      paddingTop: theme.spacing(10),
    },
    backgroundColor: theme.palette.background.paper,
  },
  accountButtonLink: {
    fontWeight: '900',
    display: 'inline-flex',
  },
  footer: {
    padding: '20px',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  divider: {
    paddingTop: theme.spacing(3)
  }
}));

const cors = Cors({
  methods: ['GET', 'OPTIONS'],
})

export const getServerSideProps = async ({ req, res }) => {
  // we need to enable CORS for active directory to query this page
  await cors(req, res, () => {})

  return { props: {} }
}

// styles to override Active Directory injected form style
const style = `
#forgotPassword {
  display: block;
  text-align: end;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: underline;
  margin-bottom: 36px;
}

.materializedInput:nth-child(2) {
  margin-bottom: 8px !important;
}

label[for='email'] {
    opacity: 0
}

label[for='password'] {
    opacity: 0
}

.error.pageLevel {
    color: #F44336
}

.tel-link-desktop {
    color: rgba(0, 0, 0, 0.54);
}

.buttons {
  flex-direction: row;
}

#next {
  width: auto;
}

.backButtonText.MuiTypography-button {
    font-size: 0.625rem;
}

@media (max-width:1279px) {
    .desktop-only {
        display: none;
    }
}

@media (min-width:1280px) {
    .mobile-only {
        display: none;
    }
}
`

// script to override Active Directory injected form structure
const script = `
$('.intro').insertBefore('form');
$('.intro h2')
  .addClass('customIntro')
  .text('Login to access your account');

//Email validation changes
var emailRegex = $('#email').attr('pattern');
$('#email').removeAttr('pattern');

//Forgot password
$('#forgotPassword').insertBefore('.working');
//Error Message
$('.error.pageLevel p').data('test-id','errorMsgNoMatchingEmail');
$('#remember').insertBefore('#next')

const remember = document.getElementById('remember')
const checkbox = remember.querySelector('input')
const svg = remember.querySelector('svg')
let isChecked
const checkedPath = '<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>'
const uncheckedPath = '<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>'
const getPath = () => isChecked ? checkedPath : uncheckedPath
if (checkbox.checked) {
  isChecked = true
  remember.classList.add('Mui-checked')
}
svg.innerHTML = getPath()

remember.addEventListener('click', e => {
  e.stopPropagation()
  isChecked = !isChecked
  remember.classList.toggle('Mui-checked')
  svg.innerHTML = getPath()
})
`

const Login = () => {
  const classes = useStyles()
  return (
    <Layout script={script} style={style} materialSelectors={{ textFields: '#email, #password', containedButtons: '#api button' }}>
      <FormControlLabel
        id="remember"
        control={<Checkbox color="primary" checked />}
        label="Keep me signed in"
      />
      <div id="api"></div>
      <div className="formContainer">
        <DividerWithText>or</DividerWithText>
        <Grid
          direction="column"
          justify="center"
          alignItems="center"
          container
        >
          <Typography variant="h6" align="center">
            Don't have one yet?
          </Typography>

          <Button className={{ label: classes.accountButtonLink }} color="tertiary">open an account</Button>
        </Grid>
      </div>
    </Layout>
  )
}

export default Login
