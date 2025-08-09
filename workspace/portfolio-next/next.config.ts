import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Add remote CDNs if used for images
    ],
  },
  async redirects() {
    return [
      // Keep empty for now; add legacy path redirects if needed
    ]
  },
}

export default nextConfig