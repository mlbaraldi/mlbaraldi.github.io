/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  images: { unoptimized: true },
  output: 'export'
}

module.exports = nextConfig
