
import React from 'react';
import { CallIcon, ExpertIcon, TruckIcon, ArrowRightLongIcon } from './Icons';

const logos = [
    "https://framerusercontent.com/images/73t720e5FqP2sQ31iAIbCFJ0s.png",
    "https://framerusercontent.com/images/gO3n54y0s8OL26bW8cEjAlVd2g.png",
    "https://framerusercontent.com/images/wHY08z45IrtSCkYI8pMUB0U.png",
    "https://framerusercontent.com/images/i2zB5689P1lE3Vwy44JRMAIzQ.png",
    "https://framerusercontent.com/images/43a5w83hp3V6xGFLg2LlCfr45A.png",
    "https://framerusercontent.com/images/vV7oA8a287mEeROs5Yx8jY9s.png"
];

const steps = [
    {
        icon: CallIcon,
        title: "Call us 555-0123",
        description: "We remain available 24/7 for any plumbing emergency."
    },
    {
        icon: ExpertIcon,
        title: "Expert evaluation",
        description: "Our experts will evaluate the situation and look for solutions."
    },
    {
        icon: TruckIcon,
        title: "We arrive in 30 minutes",
        description: "Our team will arrive with all the necessary equipment."
    }
];

const GetStarted: React.FC = () => {
    return (
        <section className="bg-[#e6eefa] py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 gap-y-8 opacity-40">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Partner logo ${index + 1}`} className="h-6 sm:h-8 object-contain" />
                    ))}
                </div>
                <div className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start relative">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="flex flex-col items-center text-center">
                                <div className="relative mb-6">
                                    <div className="w-32 h-16 bg-[#F3E063] rounded-[50px]"></div>
                                    <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-20 h-20 flex items-center justify-center">
                                        <step.icon className="w-10 h-10 text-black" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                                <p className="text-[#555]">{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 opacity-15" style={{ left: `${(index + 1) * 33.33 - 16.66}%`}}>
                                    <ArrowRightLongIcon className="w-20 h-9" />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
