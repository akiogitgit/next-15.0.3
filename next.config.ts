import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    // workerThreads: false,
    // cpus: 1,
    //   dynamicIO: true,
    staleTimes: {
      dynamic: 5,
      static: 5,
    },
  },
}

export default nextConfig
