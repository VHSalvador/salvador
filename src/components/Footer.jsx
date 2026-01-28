import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Github, Linkedin, Mail } from 'lucide-react';

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
                    <div style={styles.socialIcons}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="GitHub Profile">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="LinkedIn Profile">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:salvador.vh05@gmail.com`} style={styles.iconLink} aria-label="Send Email">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
                <div style={styles.copyright}>
                    &copy; {content.copyright}
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
        backgroundColor: '#6B8C9E',
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
        cursor: 'pointer',
    },
    footerMain: {
        backgroundColor: '#6B8C9E',
        padding: '2rem 0',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        color: '#fff',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcons: {
        display: 'flex',
        gap: '2rem',
        color: '#fff',
        marginBottom: '1rem',
    },
    iconLink: {
        color: 'rgba(255,255,255,0.8)',
        textDecoration: 'none',
        transition: 'color 0.2s, transform 0.2s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    copyright: {
        textAlign: 'center',
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.6)',
    },
};

export default Footer;
