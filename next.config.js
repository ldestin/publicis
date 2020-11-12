module.exports = {
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
