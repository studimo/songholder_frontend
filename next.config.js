/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: 'cloudinary',
    domains: ['res.cloudinary.com'],
    // path: '',
  },
  experimental: {
    urlImports: [
      'https://framer.com/m/',
      'https://framerusercontent.com/',
      'https://ga.jspm.io/',
      'https://jspm.dev/',
    ],
    images: { allowFutureImage: true, unoptimized: true },
  },
}

module.exports = nextConfig
