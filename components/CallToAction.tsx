
import React from 'react';

const CallToAction: React.FC = () => {
    return (
        <section className="relative bg-[radial-gradient(50%_50%_at_50%_50%,#1d65d1_0%,#184fa1_100%)] text-white py-20 lg:py-24 px-4 sm:px-6 overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(https://framerusercontent.com/images/f3nL13iNp1N7Pg6x37FzVgzg.png)", backgroundSize: "1200px auto", backgroundRepeat: "repeat" }}></div>
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        Need a plumber fast?
                    </h3>
                    <a href="#" className="bg-[#F3E063] text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg whitespace-nowrap">
                        Call Us 555-0123
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
