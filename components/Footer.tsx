import React, { useState, useEffect } from 'react';
import { BeGambleAwareIcon, GamblingTherapyIcon } from '../../constants';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary text-white flex items-center justify-center shadow-lg shadow-orange-500/40 transition-all duration-300 transform hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
        </button>
    );
};


const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-900 pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          
          <a href="#home" className="inline-flex justify-center items-center gap-3 mb-4">
            <div className="bg-primary rounded-full p-1 w-10 h-10 flex items-center justify-center shadow-md shadow-orange-500/30">
              <span className="font-bold text-2xl text-white">S</span>
            </div>
            <span className="font-bold text-xl tracking-wider text-white">Samrat777</span>
          </a>

          <p className="max-w-3xl mx-auto text-sm mb-8 text-gray-300">
            Our website is operated by Samrat777 International, a company established under the law of Isle of Man, with registered address at 1-10 Ballanoa Meadow IM4-2HT, Isle Of Man, and having its gaming sublicense issued by Isle of Man e-Gaming and all rights to operate the gaming software worldwide.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 font-bold text-sm">18+</div>
              <span className="text-sm text-gray-300">Players must be 18 or older. Underage gambling is prohibited.</span>
            </div>
          </div>
          
          <div className="flex justify-center items-center gap-8 mb-10">
             <BeGambleAwareIcon className="h-8 text-gray-400 hover:text-white transition-colors" />
             <GamblingTherapyIcon className="h-8 text-gray-400 hover:text-white transition-colors" />
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                Copyright © {new Date().getFullYear()} - Samrat777. All Rights Reserved<br/>
                Powered by SAMRAT ONLINE GAMES
              </p>
              <a href="#terms" className="text-sm font-semibold text-gray-300 hover:text-primary transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </>
  );
};

export default Footer;