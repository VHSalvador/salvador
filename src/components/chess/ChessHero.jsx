import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ChessHero = () => {
    const { t } = useLanguage();
    // Safely access nested properties
    const chess = t('chess') || {};
    const hero = chess.hero || {};

    // Provide defaults if translation is missing (prevents crash during dev)
    const headline = hero.headline || "Where the pieces come to life.";
    const subheadline = hero.subheadline || "Helping kids develop logic and patience.";
    const ctaPrimary = hero.ctaPrimary || "Free Trial";
    const ctaSecondary = hero.ctaSecondary || "View Groups";

    return (
        <section style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.content}>
                    <h1 style={styles.title}>{headline}</h1>
                    <p style={styles.subtitle}>{subheadline}</p>
                    <div style={styles.btnGroup}>
                        <a href="#contact" className="btn" style={styles.btnPrimary}>{ctaPrimary}</a>
                        <a href="#details" className="btn" style={styles.btnSecondary}>{ctaSecondary}</a>
                    </div>
                </div>
                <div style={styles.imageContainer}>
                    {/* Placeholder for the chess image - using a nice gradient/colored div for now if no image, 
                        but effectively we should use the uploaded image if possible or a stock one. 
                        I'll use a placeholder style that fits the theme. */}
                    <div style={styles.placeholderImg}>
                        <img
                            src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Chess Education"
                            style={styles.img}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '6rem 0',
        backgroundColor: '#FDFCF8',
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '4rem',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: '1 1 400px', // key for responsiveness
        maxWidth: '600px',
    },
    badge: {
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontSize: '0.8rem',
        color: '#6B8C9E',
        marginBottom: '1rem',
        fontWeight: '600',
    },
    title: {
        fontSize: '3.5rem',
        marginBottom: '1.5rem',
        color: '#1E3A5F',
        fontFamily: 'var(--font-serif)',
        lineHeight: '1.1',
    },
    subtitle: {
        fontSize: '1.1rem',
        color: '#555555',
        marginBottom: '2rem',
        lineHeight: '1.6',
    },
    btnGroup: {
        display: 'flex',
        gap: '1rem',
    },
    btnPrimary: {
        backgroundColor: '#1E3A5F',
        color: '#fff',
        border: 'none',
        textDecoration: 'none',
    },
    btnSecondary: {
        backgroundColor: 'transparent',
        color: '#555',
        border: '1px solid #ccc',
        textDecoration: 'none',
    },
    imageContainer: {
        position: 'relative',
        zIndex: 1,
    },
    placeholderImg: {
        width: '100%',
        height: '400px',
        borderRadius: '32px', // More pleasant rounding
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)', // Softer, deeper shadow
        border: '1px solid rgba(0,0,0,0.05)',
    },
    img: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }
};

export default ChessHero;
