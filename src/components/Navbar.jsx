import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const { t, toggleLanguage, language } = useLanguage();
    const nav = t('nav');
    const location = useLocation();
    const isChessPage = location.pathname === '/chess-coaching';

    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <div style={styles.logo}>
                    <span style={styles.icon}>📖</span> Salvador Villarroel
                </div>
                <div style={styles.links}>
                    {!isChessPage ? (
                        <>
                            <a href="#about">{nav.about}</a>
                            <a href="#work">{nav.work}</a>
                            <a href="#fun-facts">{nav.funFacts}</a>
                            <Link to="/chess-coaching" style={{ ...styles.link, ...styles.highlight }}>{nav.chessCoaching}</Link>
                            <button style={styles.langBtn} onClick={toggleLanguage}>
                                {language === 'en' ? 'HU' : 'EN'}
                            </button>
                            <a href="#contact" className="btn btn-primary" style={styles.contactBtn}>{nav.contact}</a>
                        </>
                    ) : (
                        <>
                            <a href="#methodology">{t('chess.nav.methodology')}</a>
                            <a href="#details">{t('chess.nav.details')}</a>
                            <a href="#contact">{t('chess.nav.contact')}</a>
                            <button style={styles.langBtn} onClick={toggleLanguage}>
                                {language === 'en' ? 'HU' : 'EN'}
                            </button>
                            <Link to="/" className="btn btn-primary" style={{ ...styles.contactBtn, marginLeft: '1rem' }}>
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
        backgroundColor: 'var(--color-text-primary)', // Slate Blue
        color: 'var(--color-bg)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        fontSize: '0.9rem',
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
    }
};

export default Navbar;
