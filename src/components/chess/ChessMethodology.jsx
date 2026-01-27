import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Brain, Target, Handshake } from 'lucide-react';

const ChessMethodology = () => {
    const { t } = useLanguage();
    const chess = t('chess') || {};
    const method = chess.methodology || {};
    const cards = method.cards || [];

    const icons = [Brain, Target, Handshake];

    return (
        <section id="methodology" style={styles.section}>
            <div className="container">
                <h2 style={styles.title}>{method.title}</h2>
                <div style={styles.separator}></div>
                <p style={styles.quote}>{method.quote}</p>

                <div style={styles.grid}>
                    {cards.map((card, index) => {
                        const Icon = icons[index] || Brain;
                        return (
                            <div key={index} style={styles.card}>
                                <div style={styles.icon}>
                                    <Icon size={24} color="#1E3A5F" />
                                </div>
                                <h3 style={styles.cardTitle}>{card.title}</h3>
                                <p style={styles.cardDesc}>{card.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '5rem 0',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: '2.5rem',
        color: '#1E3A5F',
        fontFamily: 'var(--font-serif)',
        marginBottom: '1rem',
    },
    separator: {
        width: '60px',
        height: '3px',
        backgroundColor: '#D97746',
        marginBottom: '2rem',
    },
    quote: {
        fontSize: '1.2rem',
        color: '#6B8C9E',
        fontStyle: 'italic',
        maxWidth: '800px',
        marginBottom: '4rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: '#FDFCF8',
        padding: '2rem',
        borderRadius: '16px',
        textAlign: 'left',
        transition: 'transform 0.3s ease',
    },
    icon: {
        fontSize: '2rem',
        marginBottom: '1rem',
        backgroundColor: '#fff',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    },
    cardTitle: {
        fontSize: '1.25rem',
        color: '#1E3A5F',
        marginBottom: '0.5rem',
    },
    cardDesc: {
        fontSize: '1rem',
        color: '#555',
        lineHeight: '1.6',
    }
};

export default ChessMethodology;
