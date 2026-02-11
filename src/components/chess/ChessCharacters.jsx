import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ChessCharacters = () => {
    const { t } = useLanguage();
    const chess = t('chess') || {};
    const characters = chess.characters || {};
    const items = characters.items || [];

    return (
        <section id="characters" className="section" style={styles.section}>
            <div className="container">
                <div style={styles.header}>
                    <h2 style={styles.title}>{characters.title}</h2>
                    <p style={styles.subtitle}>{characters.subtitle}</p>
                </div>

                <div style={styles.grid}>
                    {items.map((char, index) => (
                        <div key={index} style={{ ...styles.card, borderColor: char.color || '#ddd' }}>
                            <div style={styles.iconWrapper}>
                                <span style={styles.icon}>{char.icon}</span>
                            </div>
                            <h3 style={styles.charName}>{char.name}</h3>
                            <p style={styles.charRole}>{char.role}</p>
                            <div style={styles.divider}></div>
                            <p style={styles.charDesc}>{char.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        backgroundColor: '#FDFCF8',
        padding: '4rem 0',
    },
    header: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    title: {
        fontSize: '2.5rem',
        color: '#1E3A5F',
        fontFamily: 'var(--font-serif)',
        marginBottom: '0.5rem',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#6B8C9E',
        maxWidth: '700px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        padding: '0 1rem',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        padding: '2rem',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
        borderWidth: '2px',
        borderStyle: 'solid',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    iconWrapper: {
        fontSize: '3rem',
        marginBottom: '1rem',
        backgroundColor: '#F0F4F8',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        lineHeight: '1',
    },
    charName: {
        fontSize: '1.5rem',
        color: '#1E3A5F',
        marginBottom: '0.2rem',
        fontFamily: 'var(--font-serif)',
        fontWeight: 'bold',
    },
    charRole: {
        fontSize: '0.9rem',
        color: '#D97746',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    divider: {
        width: '40px',
        height: '3px',
        backgroundColor: '#eee',
        marginBottom: '1rem',
    },
    charDesc: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.6',
    }
};

export default ChessCharacters;
