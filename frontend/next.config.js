/** @type {import('next').NextConfig} */
const pathPrefix = process.env.NODE_ENV === "production" 
  ? "/ay2324s1-course-assessment-g25" 
  : ""

const nextConfig = {
  output: "export",
  basePath: pathPrefix,
  assetPrefix: pathPrefix,
}

module.exports = nextConfig
