/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.node = {
                global: true,
            };
            config.resolve.fallback = {
                performance: require.resolve('perf_hooks'),
            };
        }
        return config;
    },
};

module.exports = nextConfig;
