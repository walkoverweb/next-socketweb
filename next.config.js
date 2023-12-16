// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     i18n: {
//         locales: ["en"],
//         defaultLocale: "en",
//       }
// }

// module.exports = nextConfig
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = {

  // Can be safely removed in newer versions of Next.js
  

  webpack(config) {
    config.resolve.fallback = {

      // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped.
      ...config.resolve.fallback,  

      fs: false, // the solution
    };
    
    return config;
  },
};