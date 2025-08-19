import React, { useRef } from 'react';
import { WINNERS } from '../../constants';
import { TrophyIcon } from '../../constants';

const Winners: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gray-50 py-16 sm:py-24">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
           <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">
            Today's <span className="text-gradient">Top Winners</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-600">
            Celebrating the champions of the day. Your name could be next on our winners list!
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
            aria-label="Previous winners"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110"
            aria-label="Next winners"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {WINNERS.map((winner, index) => (
              <div key={index} className="group relative bg-white border border-gray-200/80 rounded-2xl shadow-lg p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-secondary/20 hover:shadow-xl hover:-translate-y-2 hover:border-secondary/80 flex-shrink-0 w-64">
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 bg-yellow-100/80 rounded-2xl flex items-center justify-center mb-4 text-secondary group-hover:bg-secondary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <TrophyIcon className="w-8 h-8" />
                  </div>
                  <p className="text-lg font-semibold text-slate-800">{winner.name}</p>
                  <p className="text-2xl font-bold text-primary mt-1">{winner.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;