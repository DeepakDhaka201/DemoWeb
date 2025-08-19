import React from 'react';
import { AVAILABLE_GAMES } from '../../constants';
import type { Game } from '../../types';
import { GamepadIcon, ChartIcon, ClockIcon } from '../../constants';

const GameCard: React.FC<{ game: Game }> = ({ game }) => (
  <div className="group relative bg-white border border-gray-200/80 rounded-2xl shadow-lg p-5 flex flex-col text-center transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl hover:-translate-y-2 hover:border-primary/80 overflow-hidden">
    <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <h3 className="font-bold text-lg text-slate-800">{game.name}</h3>
        </div>

        {/* Numbers & Video */}
        <div className="flex items-center justify-between w-full my-4">
            <div className="w-1/3"></div>
            <div className="w-1/3 text-center">
                <p className="font-bold text-2xl text-slate-800 tracking-wider">{game.numbers}</p>
            </div>
            <div className="w-1/3 flex justify-end">
                {game.hasVideo && (
                <a href="#" aria-label={`Watch ${game.name} video`} className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-orange-500/30 animate-pulse hover:animate-none group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white ml-1"><path d="M7 4v16l13-8z"/></svg>
                </a>
                )}
            </div>
        </div>
        
        {/* Status */}
        <p className={`font-semibold text-sm ${game.statusColor} mb-4`}>{game.status}</p>

        {/* Charts */}
        <div className="flex gap-2 my-auto">
          <a href="#" className="flex-1 bg-gray-100 border border-gray-200 text-gray-600 font-semibold text-sm py-2 px-3 rounded-lg hover:bg-gray-200 hover:text-slate-800 transition-colors flex items-center justify-center gap-1.5">
            <ChartIcon className="w-4 h-4" /> Pana Chart
          </a>
          <a href="#" className="flex-1 bg-gray-100 border border-gray-200 text-gray-600 font-semibold text-sm py-2 px-3 rounded-lg hover:bg-gray-200 hover:text-slate-800 transition-colors flex items-center justify-center gap-1.5">
             <ChartIcon className="w-4 h-4" /> Jodi Chart
          </a>
        </div>

        {/* Timings */}
        <div className="w-full border-t border-gray-200/80 mt-4 pt-3 text-xs text-gray-500 flex justify-between items-center">
          <span className="flex items-center gap-1.5"><ClockIcon className="w-3.5 h-3.5" /> Open: {game.openTime}</span>
          <span className="flex items-center gap-1.5"><ClockIcon className="w-3.5 h-3.5" /> Close: {game.closeTime}</span>
        </div>
    </div>
  </div>
);


const GameListings: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 text-primary py-2 px-6 rounded-full shadow-sm mb-4 font-semibold border border-primary/20">
            <GamepadIcon className="w-5 h-5 mr-2" /> Available Games
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Multiple Game Types <span className="text-gradient">For You</span>
          </h2>
           <p className="max-w-2xl mx-auto mt-4 text-slate-600">
            Explore our wide selection of games, each with its own unique chart and timings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AVAILABLE_GAMES.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameListings;