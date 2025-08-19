import React from 'react';
import { PhoneIcon, WhatsAppIcon, TelegramIcon } from '../../constants';

const AndroidIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.34 5.34C16.45 4.45 15.25 4 14 4h-4c-1.25 0-2.45.45-3.34 1.34C5.77 6.23 5.32 7.43 5.32 8.68L5 15v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2l-.32-6.32c0-1.25-.45-2.45-1.34-3.34zM8 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-4H9V9h6v2z" /></svg>;




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
        <div className="relative z-10 pt-8 pb-12 sm:pt-16 sm:pb-20 lg:py-0 lg:min-h-[90vh] lg:flex lg:items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div style={{ animationDelay: '0.2s' }} className="fade-in-up mb-4 sm:mb-6">
                <div className="inline-flex items-center">
                  {/* Main Badge */}
                  <div className="bg-white text-slate-800 font-bold py-3 px-6 sm:px-8 rounded-full shadow-lg border-2 border-slate-200" style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}>
                    <div className="flex items-center gap-2">
                      {/* Crown Icon */}
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="#F76320" viewBox="0 0 24 24">
                        <path d="M5 16L3 7l5.5 4L12 4l3.5 7L21 7l-2 9H5zm2.7-2h8.6l.9-4.4L14 12l-2-4-2 4-3.2-2.4L7.7 14z"/>
                      </svg>

                      {/* Text */}
                      <span className="text-sm sm:text-base tracking-wide">
                        Welcome to
                        <span className="ml-1 font-black" style={{ color: '#F76320' }}>SAMRAT777</span>
                      </span>

                      {/* Sparkle Icon */}
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="#F76320" viewBox="0 0 24 24">
                        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <h1 style={{ animationDelay: '0.4s' }} className="fade-in-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                Unleash Your <span className="text-gradient">Winning Streak.</span>
              </h1>

              <p style={{ animationDelay: '0.6s' }} className="fade-in-up max-w-xl mx-auto lg:mx-0 mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 px-2 sm:px-0">
                Experience fair play, instant withdrawals, and non-stop action. Your next big win is just a tap away.
              </p>

              <div id="download" style={{ animationDelay: '0.8s' }} className="fade-in-up mt-6 sm:mt-8 lg:mt-10 text-center lg:text-left">
                {/* Download Section */}
                <div className="space-y-4">
                  {/* Main Download Button */}
                  <div className="relative inline-block">
                    <button className="group relative overflow-hidden text-white font-bold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-105 flex items-center gap-3 mx-auto lg:mx-0"
                      style={{ background: 'linear-gradient(135deg, #F76320, #FF8A50)', boxShadow: '0 20px 40px rgba(247, 99, 32, 0.3)' }}>

                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 transform -translate-x-full"></div>

                      {/* Content */}
                      <div className="relative z-10 flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                          <AndroidIcon />
                        </div>
                        <div className="text-left">
                          <div className="font-black text-lg">Download App</div>
                          <div className="text-sm opacity-90 font-medium">Get it on Android</div>
                        </div>
                      </div>

                      {/* Pulse Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 animate-pulse"></div>
                    </button>
                  </div>

                  {/* Simple Features */}
                  <div className="text-center lg:text-left">
                    <p className="text-sm text-slate-600 font-medium">
                      ✨ Free • Secure • Trusted by 10,000+ users
                    </p>
                  </div>

                  {/* Version Info */}
                  <p className="text-xs sm:text-sm text-slate-500">
                    Version 2.1.5 • Compatible with Android 5.0+
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div style={{ animationDelay: '1s' }} className="fade-in-up mt-6 sm:mt-8">
                {/* Mobile Number Display */}
                <div className="text-center lg:text-left mb-4">
                  <p className="text-slate-600 text-sm mb-2">Contact us for support:</p>
                  <a href="tel:+919876543210" className="text-2xl sm:text-3xl font-bold text-primary hover:text-primary-dark transition-colors">
                    +91 98765 43210
                  </a>
                </div>

                {/* Contact Buttons - Mobile: 2x2 Grid, Desktop: Row */}
                <div className="grid grid-cols-2 sm:flex sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                  <a href="tel:+919876543210" className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                    <PhoneIcon className="w-4 h-4" />
                    <span className="text-sm">Call</span>
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                    <WhatsAppIcon className="w-4 h-4" />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                  <a href="https://t.me/samrat777official" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 col-span-2 sm:col-span-1">
                    <TelegramIcon className="w-4 h-4" />
                    <span className="text-sm">Join Telegram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg animate-float">
                <img
                  src="/hero1.png"
                  alt="Samrat777 Hero"
                  className="w-full h-auto"
                  style={{ filter: 'drop-shadow(0 10px 15px rgba(245, 76, 22, 0.25))' }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;