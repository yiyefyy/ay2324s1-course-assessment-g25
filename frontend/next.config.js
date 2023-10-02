/** @type {import('next').NextConfig} */
const pathPrefix = process.env.NODE_ENV === "production" 
  ? "/ay2324s1-course-assessment-g25" 
  : ""

const nextConfig = {
  assetPrefix: pathPrefix,
  basePath: pathPrefix,
  // output: "export",
  reactStrictMode: true,
}

module.exports = nextConfig
