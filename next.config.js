/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'picsum.photos','lh3.googleusercontent.com', 's.gravatar.com'],
  },
  env: {
    AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
    HASURA_GRAPHQL_URL: process.env.HASURA_GRAPHQL_URL,
  }
});
