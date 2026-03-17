/** @type {import('next').NextConfig} */

"https://static.sayyo.mobileto.io/images/20250121131414-a5f7db12b8f445d9a67b813bebfb81b0.png"

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.sayyo.mobileto.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dev-static.sayyo.mobileto.io',
        port: '',
        pathname: '/**',
      },
    ]
  },
  reactStrictMode: true,
  /** 정적 페이지로 배포시 활성화 */
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }

};

export default nextConfig;
