import React, { useState } from 'react';

const Homepage = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [hasTriedPush, setHasTriedPush] = useState(false);

  const handlePush = () => {
    setHasTriedPush(true);
  };

  const handlePull = () => {
    setIsDoorOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      {!isDoorOpen ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          {/* Door */}
          <div className="w-64 h-96 bg-amber-800 rounded-lg relative mb-8 shadow-2xl">
            {/* Door Sign */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded">
              <h2 className="text-2xl font-bold text-black">PUSH</h2>
              {hasTriedPush && (
                <p className="text-sm text-gray-500 mt-2">It actually goes both ways...</p>
              )}
            </div>
            
            {/* Door Handle */}
            <div 
              className="absolute right-4 top-1/2 w-6 h-16 bg-yellow-600 rounded-full cursor-pointer
                transform -translate-y-1/2 hover:bg-yellow-500 transition-colors"
              onClick={handlePush}
              onContextMenu={(e) => {
                e.preventDefault();
                handlePull();
              }}
            />
          </div>

          {/* Instructions */}
          <div className="text-center text-gray-400 mt-4">
            <p>Click to push, right-click to pull</p>
          </div>
        </div>
      ) : (
        /* Content After Door Opens */
        <div className="flex flex-col items-center justify-start min-h-screen p-8">
          <h1 className="text-6xl font-bold mb-8 text-center">
            I Think You Should Leave
          </h1>
          
          {/* Navigation Links */}
          <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
            {[
              { title: "Quotes", desc: "The best lines from the show" },
              { title: "Characters", desc: "Meet the legends" },
              { title: "Episodes", desc: "Season by season" },
              { title: "Discord", desc: "Join our community" },
              { title: "Gallery", desc: "TC Tuggers and more" },
              { title: "About", desc: "What's your job?" }
            ].map((item) => (
              <div 
                key={item.title}
                className="bg-gray-800 p-6 rounded-lg cursor-pointer
                  hover:bg-gray-700 transition-colors duration-300
                  transform hover:scale-105"
              >
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Homepage;