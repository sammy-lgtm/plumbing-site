
import React from 'react';
import { CheckCircleIcon } from './Icons';

const keyPoints = [
    "Experienced and certified plumbers",
    "High-quality materials and equipment",
    "Customer satisfaction guarantee"
];

const AboutUs: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="lg:w-1/2 w-full">
                        <a href="#" className="block relative group rounded-2xl overflow-hidden shadow-xl">
                            <img src="https://framerusercontent.com/images/SfgwbJs8aY7uDlBpDRJjaxHUE.jpg" alt="Expert Plumber" className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
                                <h2 className="text-white text-2xl font-semibold">Learn more about us →</h2>
                            </div>
                        </a>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                            Plumbing solutions tailored to your needs
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            Our team of licensed and experienced plumbers is committed to providing prompt, professional, and courteous service, ensuring that your plumbing system is always in optimal condition.
                        </p>
                        <div className="mt-8 space-y-4">
                            {keyPoints.map((point, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircleIcon className="w-6 h-6 text-[#1d65d1] flex-shrink-0" />
                                    <h3 className="text-lg font-semibold text-gray-800">{point}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
