/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/0.0',
  assetPrefix: '/0.0/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
