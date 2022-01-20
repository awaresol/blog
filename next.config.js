/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/blog",
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/awaresolofficial/image/upload/'
  },
}

module.exports = nextConfig;  