import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [hasTriedPush, setHasTriedPush] = useState(false);
  const navigate = useNavigate();

  const handlePush = () => {
    setHasTriedPush(true);
  };

  const handlePull = () => {
    // Add a slight delay for the door opening animation
    setTimeout(() => {
      navigate('/main');
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Door Component */}
      <div className="w-64 h-96 bg-amber-800 rounded-lg relative mb-8 shadow-2xl">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded">
          <h2 className="text-2xl font-bold text-black">PUSH</h2>
          {hasTriedPush && (
            <p className="text-sm text-gray-500 mt-2">It actually goes both ways...</p>
          )}
        </div>
        
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

      <div className="text-center text-gray-400 mt-4">
        <p>Click to push, right-click to pull</p>
      </div>
    </div>
  );
};

export default LandingPage;