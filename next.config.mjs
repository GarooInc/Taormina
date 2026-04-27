/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'taormina.garooinc.com',
                pathname: '/api/files/**',
            },
        ],
    },
};

export default nextConfig;
