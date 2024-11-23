import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const PageLayout = ({ children }) => {
  const [isZiplining, setIsZiplining] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsZiplining(true);
    const timer = setTimeout(() => setIsZiplining(false), 2000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Zipline Character */}
      <div 
        className={`fixed top-0 transition-all duration-[2000ms] ease-in-out z-50
          ${isZiplining ? 'translate-x-full -translate-y-1/4 rotate-12' : '-translate-x-full translate-y-1/4 -rotate-12'}`}
      >
        {/* Zipline */}
        <div className="absolute top-0 w-96 h-1 bg-gray-600 transform rotate-12" />
        
        {/* Character */}
        <div className="relative">
          <div className="w-20 h-20 bg-blue-600 rounded-full">
            {/* TC Tuggers Shirt */}
            <div className="absolute -bottom-8 left-2 w-16 h-16 bg-gray-400 rounded">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <Link to="/main" className="flex items-center hover:text-gray-300">
              <span className="text-xl font-bold">ITYSL</span>
            </Link>
            <div className="flex space-x-4">
              {['quotes', 'characters', 'episodes', 'gallery'].map((item) => (
                <Link
                  key={item}
                  to={`/${item}`}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium
                    hover:bg-gray-700 hover:text-white transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12">
        {children}
      </div>
    </div>
  );
};

export default PageLayout;