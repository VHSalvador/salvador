import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const content = t('footer');

    return (
        <footer style={styles.footerWrapper}>
            {/* CTA Section */}
            <div style={styles.ctaSection}>
                <h2 style={styles.ctaTitle}>{content.ctaTitle}</h2>
                <p style={styles.ctaDesc}>{content.ctaDesc}</p>
                <button style={styles.ctaBtn}>{content.btn}</button>
            </div>

            {/* Main Footer Content */}
            <div style={styles.footerMain}>
                <div className="container" style={styles.container}>
                    <div style={styles.grid}>
                        {/* Column 1: Brand */}
                        <div style={styles.col}>
                            <h3 style={styles.colHeader}>{content.brand}</h3>
                            <ul style={styles.linkList}>
                                <li><a href="#about" style={styles.link}>{content.brandLinks.about}</a></li>
                                <li><a href="#work" style={styles.link}>{content.brandLinks.work}</a></li>
                                <li><a href="#contact" style={styles.link}>{content.brandLinks.contact}</a></li>
                            </ul>
                        </div>

                        {/* Column 2: Connect Links */}
                        <div style={styles.col}>
                            <h3 style={styles.colHeader}>{content.connect}</h3>
                            <div style={styles.socialIcons}>
                                <a href="#" onClick={(e) => e.preventDefault()} style={styles.iconLink}>GitHub</a>
                                <a href="#" onClick={(e) => e.preventDefault()} style={styles.iconLink}>LinkedIn</a>
                                <a href="#" onClick={(e) => e.preventDefault()} style={styles.iconLink}>Email</a>
                            </div>
                        </div>

                        {/* Column 3: Stats */}
                        <div style={styles.col}>
                            <h3 style={styles.colHeader}>{content.statsTitle}</h3>
                            <p style={styles.statItem}>{content.stats.students}</p>
                            <p style={styles.statItem}>{content.stats.community}</p>
                            <p style={styles.quote}>{content.stats.quote}</p>
                        </div>
                    </div>
                    <div style={styles.copyright}>
                        &copy; {content.copyright}
                    </div>
                </div>
            </div>
        </footer >
    );
};

const styles = {
    footerWrapper: {
        marginTop: '3rem',
    },
    ctaSection: {
        backgroundColor: '#6B8C9E', // Softer Blue
        padding: '3rem 1.5rem',
        textAlign: 'center',
        color: '#fff',
    },
    ctaTitle: {
        fontFamily: 'var(--font-serif)',
        fontSize: '2rem',
        marginBottom: '1rem',
        color: '#fff',
    },
    ctaDesc: {
        fontSize: '1rem',
        marginBottom: '1.5rem',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'rgba(255,255,255,0.9)',
    },
    ctaBtn: {
        backgroundColor: '#2A4B6B',
        color: '#fff',
        padding: '0.8rem 1.5rem',
        borderRadius: '50px',
        border: 'none',
        fontSize: '0.9rem',
        fontWeight: 'bold',
    },
    footerMain: {
        backgroundColor: '#6B8C9E', // Softer Blue
        padding: '2rem 0 1rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        color: '#fff',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem',
    },
    colHeader: {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.25rem',
        marginBottom: '1rem',
        color: '#fff',
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    link: {
        color: 'rgba(255,255,255,0.8)',
        textDecoration: 'none',
        transition: 'color 0.2s',
        fontSize: '0.9rem',
    },
    socialIcons: {
        display: 'flex',
        gap: '1rem',
        color: 'rgba(255,255,255,0.8)',
    },
    iconLink: {
        color: 'rgba(255,255,255,0.8)',
        textDecoration: 'none',
        fontSize: '0.9rem',
    },
    statItem: {
        marginBottom: '0.5rem',
        color: 'rgba(255,255,255,0.8)',
        fontSize: '0.9rem',
    },
    quote: {
        marginTop: '1rem',
        fontStyle: 'italic',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '0.9rem',
    },
    copyright: {
        textAlign: 'center',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.6)',
    },
};

export default Footer;
