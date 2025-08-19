import React, { useState } from 'react';

const navLinks = [
  { href: '#home', name: 'Home' },
  { href: '#winners', name: 'Winners' },
  { href: '#gamelist', name: 'Games' },
  { href: '#gamerates', name: 'Rates' },
  { href: '#faq', name: 'FAQ' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="bg-primary rounded-full p-1 w-10 h-10 flex items-center justify-center shadow-md shadow-orange-500/30">
              <span className="font-bold text-2xl text-white">S</span>
            </div>
            <span className="font-bold text-xl tracking-wider text-slate-800">Samrat777</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-medium text-gray-600 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
            <a href="#download" className="text-slate-900 bg-gradient-to-r from-secondary to-primary font-bold py-2 px-5 rounded-lg shadow-md hover:shadow-lg hover:from-yellow-400 hover:to-orange-600 transition-all transform hover:scale-105">
              Download App
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
             <a href="#download" onClick={() => setIsMenuOpen(false)} className="block w-full text-center text-slate-900 bg-gradient-to-r from-secondary to-primary font-bold mt-2 py-3 px-3 rounded-lg hover:shadow-lg transition-all">
              Download App
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;