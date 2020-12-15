import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Layout from '../components/Layout'
import Cors from 'cors'

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
    <TextField style={{ display: 'none' }} focused error label="test" helperText="test" />
    <div id="api"></div>
  </Layout>
)

export default Test
