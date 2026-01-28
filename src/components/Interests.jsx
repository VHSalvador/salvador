import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Interests = () => {
    const { t } = useLanguage();
    const content = t('interests');

    return (
        <section id="fun-facts" className="section">
            <div className="container">
                <h2 style={styles.header}>
                    {content.title.split('&').map((part, i, arr) => (
                        <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && <span className="fancy-amp">&</span>}
                        </React.Fragment>
                    ))}
                </h2>
                <div style={styles.grid}>
                    <InterestCard title={content.climbingTitle} desc={content.climbingDesc} />
                    <InterestCard title={content.techTitle} desc={content.techDesc} />
                    <InterestCard title={content.creativeTitle} desc={content.creativeDesc} />
                </div>
            </div>
        </section>
    );
};

const InterestCard = ({ title, desc }) => (
    <div style={styles.card}>
        <div style={styles.imagePlaceholder}>
            {/* Image placeholder */}
        </div>
        <div style={styles.content}>
            <h3 style={styles.cardTitle}>{title}</h3>
            <p style={styles.cardDesc}>{desc}</p>
        </div>
    </div>
);

const styles = {
    header: {
        marginBottom: '3rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        height: '100%',
    },
    imagePlaceholder: {
        width: '100%',
        height: '200px',
        backgroundColor: '#E5E5E0',
    },
    content: {
        padding: '1.5rem',
    },
    cardTitle: {
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-serif)',
    },
    cardDesc: {
        color: 'var(--color-text-secondary)',
        fontSize: '0.9rem',
    },
};

export default Interests;
