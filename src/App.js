import React from 'react';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <iframe
        className="w-full max-w-4xl aspect-video"
        src="https://www.youtube.com/embed/KwdYUIQzu-o"
        title="ITYSL Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default App;