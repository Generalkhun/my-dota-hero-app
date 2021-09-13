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

  module.exports = withSass({
    webpack(config, { dev }) {
      if (dev) {
        config.devtool = 'cheap-module-source-map';
      }
      return config;
    }
  });