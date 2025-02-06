module.exports = {
  useFileSystemPublicRoutes: true,
  trailingSlash: false,
  poweredByHeader: false,

  distDir: ".next",

  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ["error", "log"],
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl$/i,
      use: [
        {
          loader: "raw-loader",
        },
      ],
    });

    return config;
  },

  // images: {
  //   domains: [process.env.API_HOST, '127.0.0.1'],
  // }
};
