
import React from 'react';
import { LeakIcon, DrainIcon, WaterHeaterIcon, WrenchIcon, WaterFilterIcon, PipeIcon } from './Icons';

const services = [
    {
        icon: LeakIcon,
        title: "Leak Detection",
        description: "Advanced technology to locate and repair hidden leaks.",
        link: "#"
    },
    {
        icon: DrainIcon,
        title: "Drain Cleaning",
        description: "Effective unclogging and thorough drain cleaning solutions.",
        link: "#"
    },
    {
        icon: WaterHeaterIcon,
        title: "Water Heater",
        description: "Professional installation, service and repair of water heaters.",
        link: "#"
    },
    {
        icon: WrenchIcon,
        title: "Bathroom and Kitchen",
        description: "Comprehensive plumbing services for kitchens and bathrooms.",
        link: "#"
    },
    {
        icon: WaterFilterIcon,
        title: "Water Filtration",
        description: "Ensure clean, safe water with our reliable filtration systems.",
        link: "#"
    },
    {
        icon: PipeIcon,
        title: "Pipe Repair",
        description: "Reliable repair and replacement services for damaged pipes.",
        link: "#"
    }
];

const Services: React.FC = () => {
    return (
        <section className="bg-[radial-gradient(50%_50%_at_50%_50%,#1d65d1_0%,#184fa1_100%)] text-white py-20 lg:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Our services</h2>
                    <p className="mt-6 text-lg text-gray-300">
                        We offer a comprehensive range of plumbing services designed to address all your plumbing needs.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <a href={service.link} key={index} className="group block p-8 bg-black/10 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-black/20 transition-all duration-300">
                            <service.icon className="w-12 h-12 text-white mb-6" />
                            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-300">{service.description}</p>
                        </a>
                    ))}
                </div>
                <div className="text-center mt-16">
                     <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Have a plumbing emergency?</h2>
                     <div className="mt-8">
                        <a href="#" className="bg-[#F3E063] text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
