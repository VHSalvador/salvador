import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ChessInstructors = () => {
    const { t } = useLanguage();
    const chess = t('chess') || {};
    const instructors = chess.instructors || {};
    const items = instructors.items || [];

    return (
        <section id="instructors" className="section" style={styles.section}>
            <div className="container">
                <div style={styles.header}>
                    <h2 style={styles.title}>{instructors.title}</h2>
                    <p style={styles.subtitle}>{instructors.subtitle}</p>
                </div>

                <div style={styles.grid}>
                    {items.map((instructor, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.imageContainer}>
                                <div style={styles.placeholderImage}>
                                    {/* Placeholder for now */}
                                    <span style={{ fontSize: '3rem' }}>♟️</span>
                                </div>
                            </div>
                            <div style={styles.content}>
                                <h3 style={styles.name}>{instructor.name}</h3>
                                <p style={styles.role}>{instructor.role}</p>
                                <p style={styles.desc}>{instructor.description}</p>
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
        backgroundColor: '#FFFFFF',
        padding: '5rem 0',
    },
    header: {
        textAlign: 'center',
        marginBottom: '4rem',
    },
    title: {
        fontSize: '2.5rem',
        color: '#1E3A5F',
        fontFamily: 'var(--font-serif)',
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: '#6B8C9E',
        maxWidth: '700px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        padding: '0 1rem',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#FDFCF8', // Light paper-like background
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        border: '1px solid #eee',
    },
    imageContainer: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '1.5rem',
        border: '4px solid #fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#eee', // Placeholder bg
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderImage: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6e6e6',
        color: '#aaa',
    },
    content: {
        maxWidth: '400px',
    },
    name: {
        fontSize: '1.8rem',
        color: '#1E3A5F',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-serif)',
        fontWeight: 'bold',
    },
    role: {
        fontSize: '1rem',
        color: '#D97746', // Accent color
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    desc: {
        fontSize: '1.05rem',
        color: '#555',
        lineHeight: '1.7',
    }
};

export default ChessInstructors;
