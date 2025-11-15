
import React, { useState } from 'react';
import { PhoneIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home 1', href: '#' },
    { name: 'Home 2', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-20 flex justify-center pt-5 lg:pt-8 px-4 sm:px-6">
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#" className="relative w-28 h-6 lg:w-32 lg:h-7">
            <img src="https://framerusercontent.com/images/XQhqjgU6F1XZtQrTknB2x8sMLY.png?width=505&height=101" alt="Plumbing Co" className="w-full h-full object-contain" />
          </a>
          
          <div className="hidden lg:flex items-center justify-center flex-1">
            <nav className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg p-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-white/70 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:(595) 555-0123" className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors">
              <PhoneIcon className="w-4 h-4" />
              <span className="text-sm font-medium">(595) 555-0123</span>
            </a>
            <a href="#" className="bg-[#F3E063] text-black text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-colors">
              Contact
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-md rounded-lg p-4">
            <nav className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-white/70 hover:text-white py-2 text-base font-medium transition-colors">
                  {link.name}
                </a>
              ))}
              <a href="tel:(595) 555-0123" className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors mt-2">
                <PhoneIcon className="w-4 h-4" />
                <span className="text-base font-medium">(595) 555-0123</span>
              </a>
              <a href="#" className="w-full text-center bg-[#F3E063] text-black text-base font-semibold px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-colors mt-2">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
