/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "/",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
