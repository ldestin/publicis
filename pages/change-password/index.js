import React from 'react'
import Cors from 'cors'
import { useStyles } from './index.style'
import Layout from '../../components/Layout'

const cors = Cors({
  methods: ['GET', 'OPTIONS'],
})

export const getServerSideProps = async ({ req, res }) => {
  await cors(req, res, () => {})

  return { props: {} }
}

const script = `
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
