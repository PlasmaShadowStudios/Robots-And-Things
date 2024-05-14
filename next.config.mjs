/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    loader: "akamai",
    path: "",
    unoptimized: true,
  },
  assetPrefix: "/Robots-And-Things",
  basePath: '/Robots-And-Things',
};

export default nextConfig;
