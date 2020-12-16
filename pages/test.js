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

const Test = () => (
  <Layout>
    <Button style={{ display: 'none' }} variant="contained" color="tertiary">Test</Button>
    <MuiButton style={{ display: 'none' }} variant="contained" color="primary"><div>Test</div>Test</MuiButton>
    <TextField style={{ display: 'none' }} focused error label="test" helperText="test" />
    <div id="api"></div>
  </Layout>
)

export default Test
