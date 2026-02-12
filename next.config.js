const ContentSecurityPolicy = `
  default-src 'self' blob: https: *;
  script-src 'self' www.youtube.com 'unsafe-inline' 'unsafe-eval' https: blob:;
  frame-src 'self' www.youtube.com tel: mailto: https: *;
  style-src 'self' 'unsafe-inline' fonts.googleapis.com www.gstatic.com https:;
  img-src 'self' https: data:;
  media-src 'self';
  font-src 'self' 'unsafe-inline' data: fonts.gstatic.com fonts.googleapis.com;
  object-src 'self' data:;
  frame-ancestors 'none';
  connect-src 'self' ${process.env.API_URL} https: wss: properties:;
`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];

module.exports = {
  useFileSystemPublicRoutes: true,
  trailingSlash: false,
  poweredByHeader: false,
  output: "standalone",

  distDir: ".next",

  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ["error", "log"],
    },
  },
  async headers() {
    return [
      // Apply these headers to all routes in the application.
      {
        source: "/",
        headers: securityHeaders,
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
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
  //   domains: [process.env.API_URL, '127.0.0.1'],
  // }
};
