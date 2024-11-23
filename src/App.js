<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import QuotesPage from './pages/QuotesPage';
import CharactersPage from './pages/CharactersPage';
import EpisodesPage from './pages/EpisodesPage';
import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/quotes" element={<QuotesPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
=======
import Door from './components/Door';

function App() {
  return (
    <div className="App">
      <Door />
    </div>
>>>>>>> ddccfe72a0f7b78b414b4f349937d3ec162dbbaf
  );
}

export default App;
