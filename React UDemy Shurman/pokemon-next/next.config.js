/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'] // se crea esta dependencia para que pueda recibir imagenes y recursos fuera del ambiente de next
  }
}

module.exports = nextConfig
