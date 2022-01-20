/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/docs",
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/awaresolofficial/image/upload/'
  },
}

module.exports = nextConfig
