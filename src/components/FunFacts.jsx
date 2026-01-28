import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FunFacts = () => {
    const { t } = useLanguage();
    const content = t('funFacts');

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
                    {content.items.map((item, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.imageContainer}>
                                <img
                                    src={`${import.meta.env.BASE_URL}img/${item.imgKey}.png`}
                                    alt={item.title}
                                    style={styles.image}
                                    onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.style.backgroundColor = '#E5E5E0' }}
                                />
                            </div>
                            <div style={styles.content}>
                                <h3 style={styles.title}>
                                    {item.title.split('&').map((part, i, arr) => (
                                        <React.Fragment key={i}>
                                            {part}
                                            {i < arr.length - 1 && <span className="fancy-amp">&</span>}
                                        </React.Fragment>
                                    ))}
                                </h3>
                                <p style={styles.desc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    header: {
        textAlign: 'center',
        marginBottom: '3rem',
        fontFamily: 'var(--font-serif)',
        fontSize: '2.5rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
    },
    imageContainer: {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        borderRadius: '12px',
        marginBottom: '1rem',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
    },
    textContainer: {
        padding: '0 0.5rem',
    },
    title: {
        fontFamily: 'var(--font-serif)',
        fontSize: '1.25rem',
        marginBottom: '0.5rem',
        color: 'var(--color-text-primary)',
    },
    desc: {
        fontSize: '0.9rem',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.6',
    },
};

export default FunFacts;
