import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';
import ChessCoaching from './pages/ChessCoaching';

function App() {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <Router basename={import.meta.env.BASE_URL}>
                    <div className="app">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/chess-coaching" element={<ChessCoaching />} />
                            <Route path="*" element={<div style={{ padding: 50, fontSize: 24 }}>404 - No Route Matched. Path: {window.location.pathname}</div>} />
                        </Routes>
                    </div>
                </Router>
            </LanguageProvider>
        </HelmetProvider>
    )
}

export default App
