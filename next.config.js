module.exports = {
    async redirects() {
      return [
        // redirect from homepage to herolist automatically
        {
          source: '/',
          destination: '/heros',
          permanent: true,
        },
      ]
    },
  }