import Cors from 'cors'

const cors = Cors({
  // Only allow requests with GET, POST and OPTIONS
  methods: ['GET', 'POST', 'OPTIONS'],
})

// Initialize the cors middleware
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(req, res) {
  // Run cors
  await runMiddleware(req, res, cors)

  console.log({ res })
  req.send(`<!DOCTYPE html>
  <html>
    <head>
      <title>!Add your title here!</title>
      <link rel="stylesheet" href="https://mystore1.blob.core.windows.net/b2c/style.css">
    </head>
    <body>
      <h1>My B2C Application</h1>
      <div id="api"></div>   <!-- Leave this element empty because Azure AD B2C will insert content here. -->
    </body>
  </html>`)
}
