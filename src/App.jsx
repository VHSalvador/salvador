import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import ChessCoaching from './pages/ChessCoaching';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chess-coaching" element={<ChessCoaching />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
