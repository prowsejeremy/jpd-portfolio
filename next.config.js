module.exports = {

  useFileSystemPublicRoutes: true,
  trailingSlash: false,
  poweredByHeader: false,

  swcMinify: true,
  
  distDir: ".next",

  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error', 'log'],
    },
  },

  // images: {
  //   domains: [process.env.API_HOST, '127.0.0.1'],
  // }

}