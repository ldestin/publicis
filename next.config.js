module.exports = {
  // assetPrefix: 'https://publicis-ldestin.herokuapp.com/',
  async redirects() {
    return [
      {
        source: '/top',
        destination: '/',
        permanent: true,
      }
    ]
  }
}
