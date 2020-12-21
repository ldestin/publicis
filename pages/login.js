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
      {/* <div id="api"></div> */}
      <div id="api" data-name="Unified">
        <div class="intro">
            <h2 class="customIntro">Login to access your account</h2>
          </div><form id="localAccountForm" action="JavaScript:void(0);" class="localAccount" aria-label="Sign in with your email address">
          
          <div class="error pageLevel" aria-hidden="true" role="alert">
            <p></p>
          </div>
          <div class="entry">
            <div class="entry-item MuiFormControl-root MuiTextField-root materializedInput">
              
              <div class="error itemLevel" aria-hidden="true" role="alert">
                
              </div>
              <label for="email" class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-focused">
                Email Address
              </label><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl Mui-focused"><p></p><input type="email" id="email" name="Email Address" placeholder="" value="" class="MuiInputBase-input MuiInput-input"/></div>
            <p class="MuiFormHelperText-root Mui-error MuiFormHelperText-filled"></p></div>
            <div class="entry-item MuiFormControl-root MuiTextField-root materializedInput">
              <div class="password-label">
                
                
              </div>
              <div class="error itemLevel" aria-hidden="true">
                
              </div>
              <label for="password" class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated">Password</label><div class="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl"><p role="alert"></p><input type="password" id="password" name="Password" placeholder="" class="MuiInputBase-input MuiInput-input"/></div>
            <p class="MuiFormHelperText-root Mui-error MuiFormHelperText-filled"></p></div>
            <a id="forgotPassword">Forgot your password?</a><div class="working"></div>


            <div class="buttons">
              <label class="MuiFormControlLabel-root" id="remember"><span class="MuiButtonBase-root MuiIconButton-root jss18 MuiCheckbox-root MuiCheckbox-colorPrimary MuiIconButton-colorPrimary" aria-disabled="false"><span class="MuiIconButton-label"><input type="checkbox" class="jss21" value="remember" data-indeterminate="false"/><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg></span></span><span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Keep me signed in</span></label><button id="next" type="submit" form="localAccountForm" class="MuiButtonBase-root MuiButton-root MuiButton-containedPrimary MuiButton-contained">LOGIN</button>
            </div>
          </div>
        </form>
      </div>
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
