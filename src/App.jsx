import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
            <LanguageProvider>
                <Router basename={import.meta.env.BASE_URL}>
                    <div className="app">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<div style={{ padding: 50, fontSize: 24 }}>404 - Page not found.</div>} />
                        </Routes>
                    </div>
                </Router>
            </LanguageProvider>
            </ThemeProvider>
        </HelmetProvider>
    )
}

export default App
