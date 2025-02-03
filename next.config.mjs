/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.glsl': {
                    loaders: ['raw-loader'],
                    as: '*.js',
                },
            },
        },
        optimizeCss: true,
        webpackMemoryOptimizations: true,
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.devtool = 'source-map'
        }
        return config
    },
};

export default nextConfig;