const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    experimental: {
        fontLoaders: [
            { loader: '@next/font/google', options: { subsets: ['latin'] } },
        ],
    },
    webpack: (config) => {
        config.plugins = config.plugins || [];

        config.optimization.providedExports = true;

        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '.'),
            '@utils': path.resolve(__dirname, 'utils'),
            '@components': path.resolve(__dirname, 'components'),
        };

        return config;
    },
};

module.exports = nextConfig;
