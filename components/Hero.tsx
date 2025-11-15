
import React from 'react';
import { StarIconSolid } from './Icons';

const Hero: React.FC = () => {
    return (
        <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#1d65d1_0%,#184fa1_100%)] text-white pt-36 pb-20 lg:pt-56 lg:pb-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-tight">
                            Your trusted plumbing solutions in New York
                        </h1>
                        <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                            With over 20 years of experience, we have built a reputation for delivering top-notch plumbing solutions tailored to meet your needs.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <a href="#" className="bg-[#F3E063] text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg">
                                Explore our services
                            </a>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    <img className="w-12 h-12 rounded-full border-2 border-white" src="https://framerusercontent.com/images/2Jb3R1TsXDLHBYLq9HplxoY8uFA.jpg" alt="Customer 1" />
                                    <img className="w-12 h-12 rounded-full border-2 border-white" src="https://framerusercontent.com/images/nl1IkzaeBKFdkrdBOKZvZNaVXmE.jpg" alt="Customer 2" />
                                    <img className="w-12 h-12 rounded-full border-2 border-white" src="https://framerusercontent.com/images/APvpNMGmN7Y0aXS0UesFkD2Ucq8.jpg" alt="Customer 3" />
                                </div>
                                <div className="text-left">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => <StarIconSolid key={i} className="w-4 h-4 text-[#F3E063]" />)}
                                    </div>
                                    <p className="text-sm font-semibold">From 2000+ ratings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full max-w-lg">
                        <img src="https://framerusercontent.com/images/ggXv0zDlaZuS53uY7HFH16iw8.jpg" alt="Residential Plumbing" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
