import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();
    const content = t('hero');

    return (
        <section className="container section" style={styles.section}>
            <div style={styles.grid}>
                <div style={styles.left}>
                    <small style={styles.tagline}>{content.tagline}</small>
                    <h1 style={styles.title}>{content.title}</h1>
                    <p style={styles.description}>{content.description}</p>

                    <div style={styles.buttons}>
                        <a href="#work" className="btn btn-dark">{content.btnLearn}</a>
                        <a href="#contact" className="btn btn-secondary">{content.btnTouch}</a>
                    </div>

                    <div style={styles.quoteBox}>
                        <div style={styles.quoteLine}></div>
                        <div style={styles.quoteContent}>
                            <p style={styles.quoteText}>{content.quote}</p>
                            <span style={styles.quoteAuthor}>{content.quoteAuthor}</span>
                        </div>
                    </div>
                </div>

                <div style={styles.right}>
                    <div style={styles.imagePlaceholder}>
                        <img
                            src="/img/hero-profile.jpg"
                            alt="Salvador Villarroel"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', borderRadius: '16px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '4rem',
        alignItems: 'center',
    },
    tagline: {
        color: 'var(--color-text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontSize: '0.8rem',
        display: 'block',
        marginBottom: '1rem',
        fontWeight: 'bold',
    },
    title: {
        marginBottom: '1.5rem',
        lineHeight: '1.1',
    },
    description: {
        fontSize: '1.1rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '2rem',
        maxWidth: '90%',
    },
    buttons: {
        display: 'flex',
        gap: '1rem',
        marginBottom: '3rem',
    },
    quoteBox: {
        display: 'flex',
        gap: '1rem',
        marginTop: '2rem',
        backgroundColor: '#FFFFFF',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    },
    quoteLine: {
        width: '4px',
        backgroundColor: 'var(--color-accent)',
        borderRadius: '2px',
    },
    quoteText: {
        fontStyle: 'italic',
        fontSize: '0.9rem',
        marginBottom: '0.5rem',
        color: '#555',
    },
    quoteAuthor: {
        fontSize: '0.7rem',
        textTransform: 'uppercase',
        color: '#888',
        fontWeight: 'bold',
    },
    right: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    imagePlaceholder: {
        width: '100%',
        aspectRatio: '0.8',
        backgroundColor: '#E5E5E0',
        borderRadius: '16px',
        boxShadow: '20px 20px 0px rgba(0,0,0,0.05)',
    },
};

export default Hero;
