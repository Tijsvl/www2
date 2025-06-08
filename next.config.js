/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.tijsvl.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
