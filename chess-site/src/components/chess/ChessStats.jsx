import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ChessStats = () => {
    const { t } = useLanguage();
    const chess = t('chess') || {};
    const stats = chess.stats || {};

    // Refs for observing visibility
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} style={styles.section}>
            {/* Quote Banner */}
            <div style={styles.quoteBanner}>
                <div className="container">
                    <p style={styles.bannerQuote}>{stats.quote}</p>
                </div>
            </div>

            <div className="container" style={styles.statsContainer}>
                <StatItem
                    number={50}
                    suffix="+"
                    label={stats.studentsLabel}
                    isVisible={isVisible}
                />
                <StatItem
                    number={3}
                    suffix=""
                    label={stats.locationsLabel}
                    isVisible={isVisible}
                />
                <StatItem
                    number={5}
                    suffix="+"
                    label={stats.experienceLabel}
                    isVisible={isVisible}
                />
            </div>
        </section>
    );
};

const StatItem = ({ number, suffix, label, isVisible }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const end = number;
        const duration = 2000;
        const incrementTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isVisible, number]);

    return (
        <div style={styles.statItem}>
            <div style={styles.statNumber}>
                {count}{suffix}
            </div>
            <div style={styles.statLabel}>{label}</div>
        </div>
    );
};

const styles = {
    section: {
        backgroundColor: '#FDFCF8',
    },
    quoteBanner: {
        backgroundColor: '#1E3A5F',
        // Simple dark blue banner if image fails or for cleaner look, 
        // using linear-gradient to ensure text readability if we add image later
        background: 'linear-gradient(135deg, #1E3A5F 0%, #0F2027 100%)',
        padding: '5rem 0',
        textAlign: 'center',
        color: '#fff',
        marginBottom: '4rem',
        borderRadius: '0 0 50% 50% / 4%', // Subtle curve at bottom
    },
    bannerQuote: {
        fontFamily: 'var(--font-serif)',
        fontSize: '2rem',
        fontStyle: 'italic',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 1rem',
    },
    statsContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '4rem', // increased gap
        paddingBottom: '4rem',
    },
    statItem: {
        textAlign: 'center',
        minWidth: '150px',
        padding: '1rem',
    },
    statNumber: {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        color: '#D97746',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-serif)',
        display: 'block',
    },
    statLabel: {
        fontSize: '0.9rem',
        color: '#555',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        fontWeight: '600',
    }
};

export default ChessStats;
