import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { t, toggleLanguage, language } = useLanguage();
    const nav = t('nav');
    const location = useLocation();
    const isChessPage = location.pathname === '/chess-coaching';

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar" style={styles.nav}>
            <div className="container nav-container" style={styles.container}>
                <div style={styles.logo}>
                    <span style={styles.icon}>📖</span> Salvador Villarroel
                </div>

                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu" style={styles.hamburgerBtn}>
                    <span className={isMenuOpen ? "bar open" : "bar"}></span>
                    <span className={isMenuOpen ? "bar open" : "bar"}></span>
                    <span className={isMenuOpen ? "bar open" : "bar"}></span>
                </button>

                <div className={`nav-links ${isMenuOpen ? "active" : ""}`} style={styles.links}>
                    {!isChessPage ? (
                        <>
                            <a href="#about" onClick={() => setIsMenuOpen(false)}>{nav.about}</a>
                            <a href="#about" onClick={() => setIsMenuOpen(false)}>{nav.work}</a>
                            <a href="#fun-facts" onClick={() => setIsMenuOpen(false)}>{nav.funFacts}</a>
                            <Link to="/chess-coaching" style={{ ...styles.link, ...styles.highlight }} onClick={() => setIsMenuOpen(false)}>{nav.chessCoaching}</Link>
                            <button style={styles.langBtn} onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}>
                                {language === 'en' ? 'HU' : 'EN'}
                            </button>
                            <a href="#contact" className="btn btn-primary" style={styles.contactBtn} onClick={() => setIsMenuOpen(false)}>{nav.contact}</a>
                        </>
                    ) : (
                        <>
                            <a href="#methodology" onClick={() => setIsMenuOpen(false)}>{t('chess.nav.methodology')}</a>
                            <a href="#details" onClick={() => setIsMenuOpen(false)}>{t('chess.nav.details')}</a>
                            <a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('chess.nav.contact')}</a>
                            <button style={styles.langBtn} onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}>
                                {language === 'en' ? 'HU' : 'EN'}
                            </button>
                            <Link to="/" className="btn btn-primary" style={{ ...styles.contactBtn, marginLeft: '1rem' }} onClick={() => setIsMenuOpen(false)}>
                                {t('chess.nav.backToPortfolio')}
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        // backgroundColor, color, padding, position, top, zIndex MOVED TO CSS .navbar
    },
    container: {
        // display, justifyContent, alignItems MOVED TO CSS .nav-container
    },
    logo: {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    icon: {
        fontSize: '1.5rem',
    },
    links: {
        // display, gap, alignItems, fontSize MOVED TO CSS .nav-links
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    highlight: {
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        fontWeight: 'bold'
    },
    langBtn: {
        color: 'var(--color-bg)',
        border: '1px solid var(--color-bg)',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        fontSize: '0.8rem',
    },
    contactBtn: {
        backgroundColor: '#1E3A5F', // Dark Navy
        border: 'none',
    },
    hamburgerBtn: {
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
    }
};

export default Navbar;
