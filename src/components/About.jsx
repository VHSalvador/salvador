import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
    const { t } = useLanguage();
    const content = t('about');

    return (
        <section id="about" className="section" style={styles.section}>
            <div className="container">
                <h2 style={styles.header}>{content.title}</h2>
                <div className="about-grid">
                    <div className="about-quote" style={styles.quoteBox}>
                        <p style={styles.quote}>{content.quote}</p>
                    </div>

                    <div className="about-text" style={styles.text}>
                        <p>{content.p1}</p>
                        <br />
                        <p>{content.p2}</p>
                    </div>

                    <div className="about-image">
                        <div style={styles.imagePlaceholder}>
                            {/* Placeholder for Headshot */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        paddingTop: '2rem',
    },
    header: {
        marginBottom: '3rem',
    },
    quoteBox: {
        borderLeft: '4px solid var(--color-accent)',
        paddingLeft: '1.5rem',
        marginBottom: '2rem',
        backgroundColor: 'rgba(217, 119, 70, 0.1)', // Light orange tint
        padding: '1.5rem',
        borderRadius: '0 8px 8px 0',
    },
    quote: {
        fontStyle: 'italic',
        fontFamily: 'var(--font-serif)',
        fontSize: '1.1rem',
        color: 'var(--color-text-secondary)',
    },
    text: {
        color: 'var(--color-text-secondary)',
        lineHeight: '1.8',
    },
    imagePlaceholder: {
        width: '100%',
        aspectRatio: '1',
        backgroundColor: '#E5E5E0', // Light grey placeholder
        borderRadius: '12px',
        boxShadow: '-20px 20px 0px rgba(0,0,0,0.05)',
    },
};

export default About;
