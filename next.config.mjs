/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    })
    return config
  },
  images: {
    domains: ['a-mango-bucket.s3.ap-northeast-2.amazonaws.com'],
  },
}

export default nextConfig
