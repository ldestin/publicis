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
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: underline;
}

.materializedInput:last-child {
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
$('.intro h2').addClass('customIntro').text('Login to access your account')

//Email validation changes
var emailRegex = $('#email').attr('pattern');
$('#email').removeAttr('pattern');

//Forgot password
$('#forgotPassword').insertBefore('.working');
//Error Message
$('.error.pageLevel p').data('test-id','errorMsgNoMatchingEmail');
//Button
var btnText = $('#next').text();
$('#next')
    .addClass('button-wrapper MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-root-29 makeStyles-containedTertiary-32 MuiButton-containedPrimary').html('<span class="MuiButton-label">' + btnText + '</span><span class="MuiTouchRipple-root"></span>')
    .wrap('<div class="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-space-between">')
    .before('<label class="MuiFormControlLabel-root"><span class="MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-25 MuiCheckbox-root MuiCheckbox-colorPrimary MuiIconButton-colorPrimary" aria-disabled="false"><span class="MuiIconButton-label"><input type="checkbox" class="PrivateSwitchBase-input-28" value="remember" data-indeterminate="false"><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg></span><span class="MuiTouchRipple-root"></span></span><span class="MuiTypography-root MuiFormControlLabel-label MuiTypography-body1">Keep me signed in</span></label>');
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
      {/* <div className={classes.wrapper}>
        <LoginHeader />
        <Container className={classes.container} maxWidth="xs">
          <Typography component="h1" variant="h4" align="center">
            Log in to your account
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container
              direction="row"
              justify="flex-end"
            >
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>

            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me signed in"
              />

              <Button
                type="submit"
                variant="contained"
                color="tertiary"
                className={classes.submit}
              >
                Log In
              </Button>
            </Grid>
            <div className={classes.divider}>or</div>

            <Grid direction="column"
              justify="center"
              alignItems="center"
              container
            >
              <Typography variant="h6" align="center">
                Don't have one yet?
              </Typography>

              <Button className={{ label: classes.accountButtonLink }} color="tertiary">open an account</Button>
            </Grid>
          </form>
        </Container>
        <footer className={classes.footer}>&copy; Copyright 2020 Sonepar</footer>
      </div> */}
    </Layout>
  )
}

export default Login
