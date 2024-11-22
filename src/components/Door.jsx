import React, { useState, useEffect } from 'react';

const Door = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriedPush, setHasTriedPush] = useState(false);
  const [droolLevel, setDroolLevel] = useState(0);
  const [doorDamage, setDoorDamage] = useState(0);
  const [pushAttempts, setPushAttempts] = useState(0);
  const [showMessage, setShowMessage] = useState('');
  const [isDoorBreaking, setIsDoorBreaking] = useState(false);

  // Messages that appear based on user interaction
  const messages = [
    "It goes both ways...",
    "I was here yesterday, it goes both ways",
    "No, PULL... like this...",
    "You're not part of the Turbo Team!",
    "HOLD ON! Let me think about it for a minute!"
  ];

  const handlePush = () => {
    setHasTriedPush(true);
    setPushAttempts(prev => prev + 1);
    setShowMessage(messages[Math.min(pushAttempts, messages.length - 1)]);
    
    // Increase drool with each push
    if (pushAttempts > 2) {
      setDroolLevel(prev => Math.min(prev + 1, 5));
    }
  };

  const handlePull = () => {
    setIsDoorBreaking(true);
    setDoorDamage(prev => prev + 1);
    
    // After multiple pulls, the door breaks
    if (doorDamage >= 2) {
      setTimeout(() => {
        setIsOpen(true);
        setShowMessage("Hope to hear from you soon!");
      }, 500);
    }
  };

  // Add shaking effect when door is being broken
  useEffect(() => {
    if (isDoorBreaking) {
      setTimeout(() => setIsDoorBreaking(false), 500);
    }
  }, [isDoorBreaking]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 overflow-hidden">
      {/* Door Frame */}
      <div className="relative w-72 h-[28rem] bg-stone-700 rounded-t-lg p-1">
        {/* The Door */}
        <div 
          className={`relative w-full h-full bg-amber-800 rounded transition-all duration-1000
            ${isOpen ? 'translate-x-full' : ''}
            ${isDoorBreaking ? 'animate-[shake_0.5s_ease-in-out_infinite]' : ''}
            `}
        >
          {/* Door Texture */}
          <div className="absolute inset-0 p-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="border-b border-amber-900 opacity-30" />
              ))}
            </div>
          </div>

          {/* Push Sign */}
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded shadow-lg">
            <h2 className="text-2xl font-bold text-center">PUSH</h2>
            {showMessage && (
              <p className="text-sm text-gray-500 mt-2 text-center whitespace-nowrap">
                {showMessage}
              </p>
            )}
          </div>

          {/* Door Handle */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            {/* Handle Base */}
            <div className="w-6 h-16 bg-yellow-600 rounded-full shadow-lg hover:bg-yellow-500 cursor-pointer"
                 onClick={handlePush}
                 onContextMenu={(e) => {
                   e.preventDefault();
                   handlePull();
                 }} />
            {/* Handle Details */}
            <div className="absolute top-2 left-1 w-4 h-12 bg-yellow-700 rounded-full opacity-30" />
          </div>

          {/* Drool Effect */}
          {droolLevel > 0 && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div 
                className="w-2 bg-blue-200/50 rounded-t transition-all duration-500"
                style={{
                  height: `${droolLevel * 20}px`,
                  opacity: 0.6
                }}
              />
            </div>
          )}

          {/* Door Damage Cracks */}
          {doorDamage > 0 && (
            <div className="absolute inset-0">
              {[...Array(doorDamage)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute bg-black/10"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: '50%',
                    height: '2px',
                    width: `${40 + i * 20}px`,
                    transform: `translate(-50%, -50%) rotate(${45 - i * 30}deg)`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Welcome Screen */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center transition-opacity duration-1000">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold mb-4">
              Welcome to ITYSL
            </h1>
            <p className="text-gray-400 text-xl">
              Hope to hear from you soon...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Door;