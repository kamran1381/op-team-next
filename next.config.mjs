/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"standalone",
    images: {
    
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '**',
                
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'api.op-team.ir',
                port: '',
                pathname: '**',
            },
        ],
    },
   eslint :{
    ignoreDuringBuilds : true ,
   }
};
export default nextConfig;
