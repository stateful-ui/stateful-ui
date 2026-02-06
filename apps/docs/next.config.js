/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Use Cloudflare Image Transformations via custom loader
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },

  // Headers for better caching of static assets
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
