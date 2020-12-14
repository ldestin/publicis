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

export default () => (
  <Layout>
    test
    <Button variant="contained" color="primary">PRIMARY</Button>
    <TextField label="lol" />
    <div>
      <input className="inputText" placeholder="lol2" />
    </div>
    <div id="api"></div>
    <script dangerouslySetInnerHTML={{ __html: 'console.log("lol")' }}></script>
  </Layout>
)
