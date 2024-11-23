import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">AI Think You Should Leave</h1>
          <p className="text-xl text-gray-400">The greatest show that's ever blessed this earth</p>
        </header>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Quotes",
              desc: "The best lines from the show",
              icon: "📜",
              link: "/quotes"
            },
            {
              title: "Characters",
              desc: "Meet the legends",
              icon: "👥",
              link: "/characters"
            },
            {
              title: "Episodes",
              desc: "Season by season",
              icon: "🎬",
              link: "/episodes"
            },
            {
              title: "Discord",
              desc: "Join our community",
              icon: "💬",
              link: "/discord"
            },
            {
              title: "Gallery",
              desc: "TC Tuggers and more",
              icon: "🖼️",
              link: "/gallery"
            },
            {
              title: "About",
              desc: "What's your job?",
              icon: "ℹ️",
              link: "/about"
            }
          ].map((item) => (
            <Link 
              key={item.title}
              to={item.link}
              className="bg-gray-800 p-8 rounded-lg cursor-pointer
                hover:bg-gray-700 transition-all duration-300
                transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-400">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;