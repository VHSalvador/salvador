import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const { t, toggleLanguage, language } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const nav = t('nav');

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navRef = React.useRef(null);

    React.useEffect(() => {
        if (!isMenuOpen) return;
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav ref={navRef} className="navbar" style={styles.nav}>
            <div className="container nav-container" style={styles.container}>
                <div style={styles.logo}>
                    <span style={styles.icon} role="img" aria-label="book icon">📖</span> Salvador Villarroel
                </div>

                <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu" style={styles.hamburgerBtn}>
                    <span className={isMenuOpen ? "bar open" : "bar"}></span>
                    <span className={isMenuOpen ? "bar open" : "bar"}></span>
                    <span className={isMenuOpen ? "bar open" : "bar"}></span>
                </button>

                <div className={`nav-links ${isMenuOpen ? "active" : ""}`} style={styles.links}>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>{nav.about}</a>
                    <a href="#work" onClick={() => setIsMenuOpen(false)}>{nav.work}</a>
                    <a href="#fun-facts" onClick={() => setIsMenuOpen(false)}>{nav.funFacts}</a>
                    <button style={styles.langBtn} aria-label={language === 'en' ? 'Switch to Hungarian' : 'Switch to English'} onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}>
                        {language === 'en' ? 'HU' : 'EN'}
                    </button>
                    <a href="#contact" className="btn btn-primary" style={styles.contactBtn} onClick={() => setIsMenuOpen(false)}>{nav.contact}</a>
                </div>
                <button style={styles.themeBtn} onClick={() => { toggleTheme(); }} aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
                    {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                </button>
            </div>
        </nav>
    );
};

const navControlBtn = {
    color: 'var(--color-bg)',
    border: '1px solid var(--color-bg)',
    borderRadius: '4px',
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
    langBtn: {
        ...navControlBtn,
        padding: '0.25rem 0.5rem',
        fontSize: '0.8rem',
    },
    themeBtn: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        backgroundColor: 'var(--color-blue-dark)',
        color: 'var(--color-bg)',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        transition: 'transform 0.2s',
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
