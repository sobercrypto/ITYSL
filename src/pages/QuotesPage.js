import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const QuotesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const quotes = [
    {
      text: "I don't know what any of this shit is and I'm fucking scared.",
      character: "Karl Havoc",
      episode: "S2E3",
      category: "panic"
    },
    {
      text: "TABLES!",
      character: "Tables Guy",
      episode: "S1E1",
      category: "rage"
    },
    {
      text: "It's illegal for you to ask me that.",
      character: "Hot Dog Car Guy",
      episode: "S1E5",
      category: "defensive"
    },
    // Add more quotes here
  ];

  const categories = ['all', 'panic', 'rage', 'defensive'];

  const filteredQuotes = selectedCategory === 'all' 
    ? quotes 
    : quotes.filter(q => q.category === selectedCategory);

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4">
        {/* Category Tabs */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all
                ${selectedCategory === category 
                  ? 'bg-blue-600 text-white transform scale-105' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((quote, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform hover:scale-105 
                transition-all hover:shadow-xl"
            >
              <p className="text-xl mb-4 font-medium italic">"{quote.text}"</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{quote.character}</span>
                <span>{quote.episode}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default QuotesPage;