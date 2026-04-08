import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const ChessNavbar = () => {
    const { t, toggleLanguage, language } = useLanguage();
    // Safely access nested properties with fallbacks
    const chessNav = t('chess')?.nav || {};

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <div style={styles.logo}>
                    <span style={styles.icon}>♟️</span> {chessNav.title || 'Salvador Chess'}
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <span className={isMenuOpen ? "bar open" : "bar"}></span>
                    <span className={isMenuOpen ? "bar open" : "bar"}></span>
                    <span className={isMenuOpen ? "bar open" : "bar"}></span>
                </div>

                <div className={`chess-nav-links ${isMenuOpen ? "active" : ""}`}>
                    <Link to="/" style={styles.backLink} onClick={() => setIsMenuOpen(false)}>
                        {chessNav.backToPortfolio || 'Back to Portfolio'}
                    </Link>
                    <button style={styles.langBtn} onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}>
                        {language === 'en' ? 'HU' : 'EN'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: '#FFFFFF',
        color: '#1E3A5F', // Dark blue text for chess theme
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: '#1E3A5F',
    },
    icon: {
        fontSize: '1.5rem',
    },
    links: {
        // Moved to CSS .chess-nav-links
    },
    backLink: {
        color: '#D97746', // Accent color
        fontWeight: '500',
        textDecoration: 'none',
        border: '1px solid #D97746',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
    },
    langBtn: {
        color: '#1E3A5F',
        border: '1px solid #1E3A5F',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        fontSize: '0.8rem',
        cursor: 'pointer',
        background: 'transparent',
    }
};

export default ChessNavbar;
