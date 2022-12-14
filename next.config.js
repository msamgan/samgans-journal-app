/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["secure.gravatar.com", "cdn.ko-fi.com", "codebysamgan.com"]
    }
}

module.exports = nextConfig
