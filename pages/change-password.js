import React from 'react'
import Cors from 'cors'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout'

const cors = Cors({
  methods: ['GET', 'OPTIONS'],
})

export const getServerSideProps = async ({ req, res }) => {
  // we need to enable CORS for active directory to query this page
  await cors(req, res, () => {})

  return { props: {} }
}

const useStyles = makeStyles((theme) => ({
  rules: {
    fontSize: theme.typography.fontSize.s
  },
}))

const script = `
$('.intro').append('#rules')
`

const ResetPassword = () => {
  const classes = useStyles()
  return (
  <Layout script={script} materialSelectors={{ textFields: '#api .textInput', containedButtons: '#api button' }}>
    <div id="rules" className={classes.rules}>Your password must contain at least 6 characters and 3 of the following types of character: uppercase, lowercase, numbers, symbols</div>
    <div id="api"></div>
  </Layout>
)}

export default ResetPassword
