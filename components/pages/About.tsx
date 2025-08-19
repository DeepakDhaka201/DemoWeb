import React from 'react';
import { WINNERS } from '../../constants';
import { TrophyIcon } from '../../constants';

const Winners: React.FC = () => {
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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {WINNERS.map((winner, index) => (
            <div key={index} className="group relative bg-white border border-gray-200/80 rounded-2xl shadow-lg p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-secondary/20 hover:shadow-xl hover:-translate-y-2 hover:border-secondary/80">
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
  );
};

export default Winners;