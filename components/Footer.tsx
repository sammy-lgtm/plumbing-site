
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from './Icons';

const imageGrid = [
    "https://framerusercontent.com/images/J0fQSNxDfo53vhaUW6Ef6nV2I.jpg",
    "https://framerusercontent.com/images/hd83txAImKxqhGfzGMs1nvXdE.jpg",
    "https://framerusercontent.com/images/lyAfQjfPgl7kEsNVBbL5qD9D7Y.jpg",
    "https://framerusercontent.com/images/gFLskE2YpzlMg3PfEdv8jPIfLs.jpg",
    "https://framerusercontent.com/images/5TmIgmLxMnWT45C5AFoc5iPs.jpg",
    "https://framerusercontent.com/images/eCisfyHHMtZmCV0wwigrMMoyk.jpg",
];

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-white text-gray-800">
            <div className="max-w-7xl mx-auto py-20 lg:py-24 px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Company Info */}
                    <div className="space-y-5">
                        <a href="#" className="block w-32 h-7">
                            <img src="https://framerusercontent.com/images/zLAQGLjmD8wwoHKpmBR5fvjEyks.png" alt="Plumbing Co" className="w-full h-full object-contain" />
                        </a>
                        <p className="text-gray-600">Top-notch residential and commercial plumbing service</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-blue-600"><FacebookIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-500 hover:text-blue-400"><TwitterIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-500 hover:text-pink-600"><InstagramIcon className="w-6 h-6" /></a>
                            <a href="#" className="text-gray-500 hover:text-red-600"><YoutubeIcon className="w-6 h-6" /></a>
                        </div>
                    </div>

                    {/* Column 2: Image Grid */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Instagram</h4>
                        <div className="grid grid-cols-3 gap-2">
                            {imageGrid.map((src, index) => (
                                <a key={index} href="#" className="block overflow-hidden rounded-md">
                                    <img src={src} alt={`Instagram post ${index + 1}`} className="w-full h-full object-cover aspect-square hover:scale-110 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Manhattan */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Manhattan</h4>
                        <div className="text-gray-600 space-y-1">
                            <p>1234 Broadway</p>
                            <p>New York, NY 1001</p>
                        </div>
                        <a href="#" className="font-semibold text-[#1d65d1] hover:underline">View on Google</a>
                    </div>
                    
                    {/* Column 4: Brooklyn */}
                     <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Brooklyn</h4>
                        <div className="text-gray-600 space-y-1">
                            <p>1234 Broadway</p>
                            <p>New York, NY 1001</p>
                        </div>
                        <a href="#" className="font-semibold text-[#1d65d1] hover:underline">View on Google</a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
                     <p className="text-gray-500 text-sm">&copy; 2024 - Plumbing</p>
                     <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
                     </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
