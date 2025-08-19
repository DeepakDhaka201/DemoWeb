import React, { useState } from 'react';
import { FAQ_DATA } from '../../constants';

const PlusIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <div className="relative w-6 h-6 flex items-center justify-center">
      <span className={`absolute w-4 h-0.5 bg-current transition-transform duration-300 ${open ? 'rotate-90' : 'rotate-0'}`}></span>
      <span className="absolute w-4 h-0.5 bg-current rotate-90"></span>
  </div>
);

const FaqItem: React.FC<{ item: typeof FAQ_DATA[0], isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left py-5 px-6 transition-colors hover:bg-gray-50"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg text-slate-800">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45 text-primary' : 'text-gray-400'}`}>
          <PlusIcon open={isOpen} />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
            <div className="px-6 pb-5 text-slate-600">
              <p>{item.answer}</p>
            </div>
        </div>
      </div>
    </div>
  );
};


const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative overflow-hidden bg-gray-50 py-16 sm:py-24">
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="text-center mb-12">
                    <div className="inline-block bg-secondary/10 text-secondary py-2 px-6 rounded-full shadow-sm mb-4 font-semibold border border-secondary/20">
                        FAQs
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                     <p className="max-w-2xl mx-auto mt-4 text-slate-600">
                        Find answers to common questions about our platform, games, and policies.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white border border-gray-200/80 rounded-2xl shadow-xl shadow-gray-200/50 overflow-hidden">
                    {FAQ_DATA.map((faq, index) => (
                        <FaqItem 
                            key={index} 
                            item={faq}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;