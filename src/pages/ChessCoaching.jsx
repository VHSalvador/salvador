import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ChessHero from '../components/chess/ChessHero';
import ChessMethodology from '../components/chess/ChessMethodology';
import ChessStats from '../components/chess/ChessStats';
import ChessPricing from '../components/chess/ChessPricing';
import ChessContact from '../components/chess/ChessContact';
import ChessFooter from '../components/chess/ChessFooter';

const ChessCoaching = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="chess-page">
            <Navbar />
            <ChessHero />
            <ChessMethodology />
            <ChessStats />
            <ChessPricing />
            <ChessContact />
            <ChessFooter />
        </div>
    );
};

export default ChessCoaching;
