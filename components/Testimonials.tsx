
import React from 'react';
import { StarIconSolid } from './Icons';

const testimonials = [
  {
    stars: 5,
    text: "Plumbing provided quick and efficient service for our clogged drain, restoring our plumbing system to perfect condition.",
    author: "Ryan Johnson",
    source: "Review on Trustpilot",
    avatar: "https://framerusercontent.com/images/Wu3jIIXne7CD8oB2WuVqxx1Wfk.jpg"
  },
  {
    stars: 5,
    text: "We're impressed with Plumbing's outstanding job on our kitchen. Their thoroughness and expertise exceeded our expectations.",
    author: "Michael Brown",
    source: "Review on Facebook",
    avatar: "https://framerusercontent.com/images/rsJ7qH7Mbs7CJkuvl24AzIdFM8Y.jpg"
  },
  {
    stars: 4,
    text: "Plumbing's team is reliable and courteous, resolving our plumbing issues promptly and with meticulous attention to detail.",
    author: "David Martinez",
    source: "Review on Trustpilot",
    avatar: "https://framerusercontent.com/images/iABb6ejla3A5ZzE4zgxiPqBaYHI.jpg"
  },
  {
    stars: 5,
    text: "Plumbing's rapid response and expert handling of our emergency saved the day. Highly recommend their professional service!",
    author: "John Smith",
    source: "Review on Google",
    avatar: "https://framerusercontent.com/images/tPYkIwImGTYNrIWUAK9mkYyUgw.jpg"
  }
];

const TestimonialCard: React.FC<typeof testimonials[0]> = ({ stars, text, author, source, avatar }) => (
  <div className="bg-white rounded-2xl p-8 w-80 sm:w-96 flex-shrink-0">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <StarIconSolid key={i} className={`w-5 h-5 ${i < stars ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="text-gray-600 mb-6">{text}</p>
    <div className="flex items-center gap-4">
      <img src={avatar} alt={author} className="w-12 h-12 rounded-full object-cover border-2 border-[#1d65d1]" />
      <div>
        <h4 className="font-semibold text-gray-900">{author}</h4>
        <p className="text-sm text-gray-500">{source}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-[#e6eefa] py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">What our customers say</h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Our customers are at the heart of everything we do. We listen to your needs and tailor our services to meet them.
        </p>
      </div>
      <div className="mt-16 w-full relative">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#e6eefa] to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#e6eefa] to-transparent"></div>
      </div>
    </section>
  );
};

export default Testimonials;
