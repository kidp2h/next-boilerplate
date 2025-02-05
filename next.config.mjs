/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  transpilePackages: ['geist'],
  reactStrictMode: true,
};

export default nextConfig;
