/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  /** 정적 페이지로 배포시 활성화 */
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }

};

export default nextConfig;
