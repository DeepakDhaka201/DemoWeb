import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Winners from './components/pages/About';
import GameRates from './components/pages/Services';
import GameListings from './components/pages/Portfolio';
import Faq from './components/pages/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate preloader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-50 flex flex-col justify-center items-center z-[100]">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-20 h-20 rounded-full bg-primary opacity-20 animate-ping"></div>
           <div className="bg-primary rounded-full p-1 w-12 h-12 flex items-center justify-center shadow-lg shadow-orange-500/30">
              <span className="font-bold text-3xl text-white">S</span>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        {/* <section id="winners">
          <Winners />
        </section> */}
        <section id="gamerates">
          <GameRates />
        </section>
        {/* <section id="gamelist">
          <GameListings />
        </section> */}
        <section id="faq">
          <Faq />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;