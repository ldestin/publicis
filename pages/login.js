import React from 'react'
import Cors from 'cors'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
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

.button-wrapper {
    padding: 10px 16px;
}

.button-wrapper span {
    font-weight: 900;
}

.openaccount-label {
    font-weight: 900
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
`

const Login = () => {
  const classes = useStyles()
  return (
    <Layout script={script} style={style} materialSelectors={{ textFields: '#email, #password', containedButtons: '#api button' }}>
      <FormControlLabel
        id="remember"
        control={<Checkbox value="remember" color="primary" />}
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
