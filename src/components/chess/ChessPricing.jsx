import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ChessPricing = () => {
    const { t } = useLanguage();
    const chess = t('chess') || {};
    const pricing = chess.pricing || {};
    const cards = pricing.cards || [];

    return (
        <section id="details" className="section" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.title}>{pricing.detailsTitle}</h2>
                    <p style={styles.subtitle}>{pricing.detailsSubtitle}</p>
                </div>

                <div style={styles.cardsWrapper}>
                    {cards.map((card, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.cardHeader}>
                                <h3 style={styles.cardTitle}>{card.title}</h3>
                                <div style={styles.price}>{card.price}</div>
                            </div>
                            <div style={styles.cardBody}>
                                <ul style={styles.list}>
                                    {card.features.map((feature, idx) => (
                                        <li key={idx} style={styles.listItem}>
                                            <span style={styles.check}>✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        // padding handled by .section
        backgroundColor: '#FFFFFF',
    },
    container: {
        maxWidth: 'var(--spacing-container)',
        margin: '0 auto',
        padding: '0 2rem',
    },
    header: {
        textAlign: 'center',
        marginBottom: '4rem',
    },
    title: {
        fontSize: '2.5rem',
        color: '#1E3A5F',
        fontFamily: 'var(--font-serif)',
        marginBottom: '0.5rem',
    },
    subtitle: {
        color: '#6B8C9E',
        fontSize: '1.2rem',
    },
    cardsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#FDFCF8',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        flex: '1 1 350px',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
    },
    cardHeader: {
        backgroundColor: '#1E3A5F', // Dark Blue from request
        color: '#fff',
        padding: '2.5rem',
        textAlign: 'center',
        flexShrink: 0,
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#fff',
        fontFamily: 'var(--font-serif)',
    },
    price: {
        fontSize: '2rem',
        fontWeight: 'bold',
        fontFamily: 'var(--font-sans)',
        opacity: 0.9,
    },
    cardBody: {
        padding: '2.5rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '1.2rem',
        fontSize: '1.05rem',
        color: '#555',
        lineHeight: '1.5',
    },
    check: {
        color: '#D97746', // Accent color for check
        marginRight: '0.75rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        lineHeight: '1.5',
    }
};

export default ChessPricing;
