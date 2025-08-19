import React from 'react';
import { GAME_RATES } from '../../constants';
import type { GameRate } from '../../types';

// --- ICONS ---
// A generic wrapper for consistent icon styling.
const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
        {children}
    </div>
);

// Specific icons tailored for each game rate type.
const SingleDigitIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10l2 -2v8" /></svg>;
const JodiDigitIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 21l-3 -18" /><path d="M16 3h-10" /><path d="M16 21h-10" /><path d="M20 12l-11 0" /></svg>;
const SinglePanaIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="12" cy="12" r=".5" fill="currentColor"/></svg>;
const DoublePanaIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="10" cy="10" r=".5" fill="currentColor"/><circle cx="14" cy="14" r=".5" fill="currentColor"/></svg>;
const TriplePanaIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="12" cy="8" r=".5" fill="currentColor"/><circle cx="9" cy="14" r=".5" fill="currentColor"/><circle cx="15" cy="14" r=".5" fill="currentColor"/></svg>;
const RedBracketsIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4h-4v16h4" /><path d="M17 4h4v16h-4" /></svg>;
const HalfSangamIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M3 12a9 9 0 0 0 9 9v-18a9 9 0 0 0 -9 9z" fill="currentColor" /></svg>;
const FullSangamIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>;

const rateIcons: { [key: string]: React.ReactElement } = {
  'Single Digit': <SingleDigitIcon />,
  'Jodi Digit': <JodiDigitIcon />,
  'Single Pana': <SinglePanaIcon />,
  'Double Pana': <DoublePanaIcon />,
  'Triple Pana': <TriplePanaIcon />,
  'Red Brackets': <RedBracketsIcon />,
  'Half Sangam Digits': <HalfSangamIcon />,
  'Full Sangam Digits': <FullSangamIcon />,
};

const RateCard: React.FC<{ rate: GameRate }> = ({ rate }) => {
    const icon = rateIcons[rate.title] || <SingleDigitIcon />;

    return (
        <div className="group relative bg-white border border-gray-200/80 rounded-2xl shadow-lg p-6 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2 hover:border-primary/80">
            <div className="relative z-10 flex flex-col items-center">
                <IconWrapper>{icon}</IconWrapper>
                <p className="text-md font-semibold text-slate-700 mt-2">{rate.title}</p>
                <p className="text-xl font-bold text-slate-800 mt-1">{rate.rate}</p>
            </div>
        </div>
    );
};

const GameRates: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary/10 text-secondary py-2 px-6 rounded-full shadow-sm mb-4 font-semibold border border-secondary/20">
            Game Rates
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            We Have The <span className="text-gradient">Best Game Rates</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-600">
            Maximize your winnings with our competitive rates across all game types. More value, more fun.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {GAME_RATES.map((rate, index) => (
            <RateCard key={index} rate={rate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameRates;