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
    },
};

export default nextConfig;