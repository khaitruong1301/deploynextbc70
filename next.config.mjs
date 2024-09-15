/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Thêm dòng này để cấu hình xuất tệp tĩnh

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                port: '',
                hostname: 'apistore.cybersoft.edu.vn',
                pathname: '**'
            }
        ],
        formats: ['image/avif', 'image/webp']
    },
};

export default nextConfig;
