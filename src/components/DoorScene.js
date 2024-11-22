import React, { useState, useEffect } from 'react';

const DoorScene = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sweatLevel, setSweatLevel] = useState(0);
  const [showOptions, setShowOptions] = useState(true);
  const [characterState, setCharacterState] = useState('idle');
  const [message, setMessage] = useState('');
  const [droolLevel, setDroolLevel] = useState(0);

  // Increase sweat over time when options are showing
  useEffect(() => {
    if (showOptions) {
      const interval = setInterval(() => {
        setSweatLevel(prev => Math.min(prev + 1, 5));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showOptions]);

  const handlePush = () => {
    setCharacterState('pushing');
    setMessage('But it goes both ways...');
    setDroolLevel(prev => prev + 1);
    setTimeout(() => {
      setCharacterState('idle');
      setSweatLevel(prev => prev + 2);
    }, 1000);
  };

  const handlePull = () => {
    setShowOptions(false);
    setCharacterState('pulling');
    setTimeout(() => {
      setIsOpen(true);
      setMessage('Hope to hear from you soon...');
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      {/* Main Scene Container */}
      <div className="relative w-full max-w-4xl h-[600px] bg-gray-800 rounded-lg overflow-hidden">
        
        {/* Door */}
        <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
          transition-transform duration-1000 ${isOpen ? 'translate-x-full' : ''}`}>
          <div className="w-72 h-[28rem] bg-amber-800 rounded-lg relative">
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 
              bg-white p-4 rounded shadow-lg">
              <h2 className="text-4xl font-bold text-center">PUSH</h2>
            </div>
            <div className="absolute right-4 top-1/2 w-6 h-16 bg-yellow-600 rounded-full" />
          </div>
        </div>

        {/* Character */}
        <div className={`absolute left-1/4 top-1/2 transform -translate-y-1/2 
          transition-all duration-500 ${characterState === 'pushing' ? 'translate-x-20' : ''}
          ${characterState === 'pulling' ? '-translate-x-20' : ''}`}>
          
          {/* Basic character shape - we'll replace this with better graphics */}
          <div className="w-40 h-80 relative">
            {/* Body */}
            <div className="absolute bottom-0 w-full h-48 bg-blue-600 rounded-t-full" />
            
            {/* Head */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
              w-32 h-32 bg-tan-400 rounded-full">
              {/* Face features */}
              <div className="absolute top-1/3 w-full flex justify-center space-x-8">
                <div className="w-4 h-4 bg-black rounded-full" />
                <div className="w-4 h-4 bg-black rounded-full" />
              </div>
              <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 
                w-8 h-2 bg-black rounded-full" />
              
              {/* Sweat drops */}
              {Array.from({ length: sweatLevel }).map((_, i) => (
                <div key={i} 
                  className="absolute animate-drip"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: '-10px',
                    width: '6px',
                    height: '6px',
                    background: 'rgba(147, 197, 253, 0.8)',
                    borderRadius: '50%',
                    animation: `drip ${1 + i * 0.5}s infinite`
                  }} />
              ))}
            </div>
          </div>
        </div>

        {/* Options Buttons */}
        {showOptions && (
          <div className="absolute left-1/2 bottom-20 transform -translate-x-1/2 
            flex space-x-8">
            <button 
              onClick={handlePush}
              className="px-8 py-4 bg-red-500 text-white rounded-lg 
                hover:bg-red-600 transform hover:scale-105 transition-all">
              PUSH
            </button>
            <button 
              onClick={handlePull}
              className="px-8 py-4 bg-green-500 text-white rounded-lg 
                hover:bg-green-600 transform hover:scale-105 transition-all">
              PULL
            </button>
          </div>
        )}

        {/* Message */}
        {message && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 
            text-white text-2xl font-bold">
            {message}
          </div>
        )}
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes drip {
          0% { transform: translateY(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(40px) scale(0.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default DoorScene;