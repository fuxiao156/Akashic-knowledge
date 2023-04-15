/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WP_API_URL: 'https://dev.magicalsheep.cn/wp-json'
  }
}

module.exports = nextConfig
