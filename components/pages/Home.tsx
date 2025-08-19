import React from 'react';
import { PhoneIcon, WhatsAppIcon, TelegramIcon } from '../../constants';

const AndroidIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.34 5.34C16.45 4.45 15.25 4 14 4h-4c-1.25 0-2.45.45-3.34 1.34C5.77 6.23 5.32 7.43 5.32 8.68L5 15v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2l-.32-6.32c0-1.25-.45-2.45-1.34-3.34zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-4H9V9h6v2z" /></svg>;

const LionIllustration = () => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" style={{ filter: 'drop-shadow(0 10px 15px rgba(245, 76, 22, 0.25))' }}>
        <defs>
            <linearGradient id="lionManeGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#ffc94a" />
                <stop offset="100%" stopColor="#f54c16" />
            </linearGradient>
            <linearGradient id="crownGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
        </defs>
        <path fill="url(#lionManeGradient)" d="M100 10 C 20 20, 20 180, 100 190 C 180 180, 180 20, 100 10 Z" />
        <path fill="url(#lionManeGradient)" d="M100 10 L 110 40 L 140 30 L 130 60 L 160 70 L 140 90 L 170 110 L 140 120 L 150 150 L 120 140 L 100 170 L 80 140 L 50 150 L 60 120 L 30 110 L 60 90 L 40 70 L 70 60 L 60 30 L 90 40 Z" />
        <path fill="#F9A826" d="M100,155 C70,155 45,130 45,100 C45,70 70,45 100,45 C130,45 155,70 155,100 C155,130 130,155 100,155 Z" />
        <path fill="#FBC02D" d="M100,140 C78,140 60,122 60,100 C60,78 78,60 100,60 C122,60 140,78 140,100 C140,122 122,140 100,140 Z" />
        <path fill="#FDD835" d="M100,130 C115,130 125,115 125,100 C125,85 115,70 100,70 C85,70 75,85 75,100 C75,115 85,130 100,130 Z" />
        <path fill="#5D4037" d="M100 105 L 110 120 L 90 120 Z" />
        <path d="M100 120 C 95 125, 85 125, 80 120" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M100 120 C 105 125, 115 125, 120 120" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="85" cy="90" r="6" fill="#5D4037" />
        <circle cx="115" cy="90" r="6" fill="#5D4037" />
        <path fill="url(#crownGradient)" stroke="#E65100" strokeWidth="2" strokeLinejoin="round" d="M70 55 L 80 30 L 100 45 L 120 30 L 130 55 L 70 55 Z" />
        <circle cx="80" cy="32" r="4" fill="#FFFDE7"/>
        <circle cx="100" cy="47" r="4" fill="#FFFDE7"/>
        <circle cx="120" cy="32" r="4" fill="#FFFDE7"/>
    </svg>
);


const Home: React.FC = () => {
  return (
    <div 
      className="relative overflow-hidden bg-white text-slate-800"
      style={{
        backgroundImage: `
          radial-gradient(circle at 80% 45%, hsla(46, 100%, 64%, 0.12), transparent 45%),
          radial-gradient(circle at 20% 55%, hsla(14, 89%, 53%, 0.09), transparent 50%)
        `
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pt-20 pb-16 lg:py-0 lg:min-h-[90vh] lg:flex lg:items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12">
            
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div style={{ animationDelay: '0.2s' }} className="fade-in-up inline-block bg-orange-100/60 border border-orange-200/80 py-2 px-6 rounded-full shadow-sm mb-6 font-semibold text-primary">
                Welcome To Samrat777
              </div>
              
              <h1 style={{ animationDelay: '0.4s' }} className="fade-in-up text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                Unleash Your <span className="text-gradient">Winning Streak.</span>
              </h1>
              
              <p style={{ animationDelay: '0.6s' }} className="fade-in-up max-w-xl mx-auto lg:mx-0 mt-6 text-lg text-slate-600">
                Experience fair play, instant withdrawals, and non-stop action. Your next big win is just a tap away.
              </p>

              <div id="download" style={{ animationDelay: '0.8s' }} className="fade-in-up mt-10 text-center lg:text-left">
                <button className="bg-gradient-to-br from-primary to-orange-600 text-slate-900 font-bold text-lg py-4 px-8 rounded-full shadow-lg shadow-orange-500/40 hover:shadow-xl hover:shadow-orange-500/60 transition-all flex items-center gap-3 mx-auto lg:mx-0 transform hover:scale-105">
                  <AndroidIcon /> Download for Android
                </button>
                <p className="text-sm text-slate-500 mt-3">Version 2.1.5 • Requires Android 5.0+</p>
              </div>

              <div style={{ animationDelay: '1s' }} className="fade-in-up flex justify-center lg:justify-start items-center gap-4 mt-8">
                <a href="tel:+910000000000" className="bg-white border border-gray-200 text-slate-700 font-semibold py-3 px-5 rounded-lg shadow-sm hover:bg-gray-100/60 transition-all flex items-center gap-2 transform hover:-translate-y-0.5">
                  <PhoneIcon className="w-5 h-5" /> Call Us
                </a>
                <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-slate-700 font-semibold py-3 px-5 rounded-lg shadow-sm hover:bg-gray-100/60 transition-all flex items-center gap-2 transform hover:-translate-y-0.5">
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp
                </a>
                 <a href="https://t.me/samrat777official" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-slate-700 font-semibold py-3 px-5 rounded-lg shadow-sm hover:bg-gray-100/60 transition-all flex items-center gap-2 transform hover:-translate-y-0.5">
                  <TelegramIcon className="w-5 h-5" /> Telegram
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md lg:max-w-lg animate-float">
                <LionIllustration />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;