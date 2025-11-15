
import React, { useState } from 'react';
import { ArrowRightIcon } from './Icons';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Are your plumbers licensed and insured?",
    answer: "Yes, all our plumbers are fully licensed, insured, and have undergone extensive training to ensure they provide the highest quality service."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Absolutely. We provide free, no-obligation estimates for all our plumbing services. Contact us to schedule an appointment."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods, including major credit cards, checks, and cash. We aim to make the payment process as convenient as possible for our customers."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we partner with reputable financing companies to offer flexible payment plans for larger plumbing projects. Please ask us for more details."
  }
];

const FaqItemComponent: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 transition-all duration-300 cursor-pointer" onClick={onClick}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
        <ArrowRightIcon className={`w-5 h-5 text-gray-800 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
      </div>
      <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? 'max-h-40 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-600">{item.answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-2/5">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Your questions, answered</h2>
          <p className="mt-6 text-lg text-gray-600">
            Answers to the most common questions our customers have. If you don’t find the information you’re looking for, feel free to contact us.
          </p>
          <a href="#" className="mt-8 inline-block bg-[#F3E063] text-black font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors text-lg">
            Contact Us
          </a>
        </div>
        <div className="lg:w-3/5 space-y-4">
          {faqData.map((item, index) => (
            <FaqItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
