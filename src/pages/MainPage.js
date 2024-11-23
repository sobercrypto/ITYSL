import React from 'react';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">I Think You Should Leave</h1>
          <p className="text-xl text-gray-400">The greatest show that's ever blessed this earth</p>
        </header>

        {/* Main Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Quotes",
              desc: "The best lines from the show",
              icon: "📜"
            },
            {
              title: "Characters",
              desc: "Meet the legends",
              icon: "👥"
            },
            {
              title: "Episodes",
              desc: "Season by season",
              icon: "🎬"
            },
            {
              title: "Discord",
              desc: "Join our community",
              icon: "💬"
            },
            {
              title: "Gallery",
              desc: "TC Tuggers and more",
              icon: "🖼️"
            },
            {
              title: "About",
              desc: "What's your job?",
              icon: "ℹ️"
            }
          ].map((item) => (
            <div 
              key={item.title}
              className="bg-gray-800 p-8 rounded-lg cursor-pointer
                hover:bg-gray-700 transition-all duration-300
                transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;