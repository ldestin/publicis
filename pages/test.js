import React from 'react'
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
  <div>
    test
    <div id="api"></div>
    <script dangerouslySetInnerHTML={{ __html: 'console.log("lol")' }}></script>
  </div>
)
