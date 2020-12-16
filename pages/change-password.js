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

const script = ``

const ResetPassword = () => (
  <Layout script={script} materialSelectors={{ textFields: '#api .textInput', containedButtons: '#api button' }}>
    <Button style={{ display: 'none' }} variant="contained" color="primary">Example</Button>
    <TextField style={{ display: 'none' }} focused error label="Example" helperText="Example" />
    <div id="api"></div>
  </Layout>
)

export default ResetPassword
