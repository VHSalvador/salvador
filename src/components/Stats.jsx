import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Stats = () => {
    const { t } = useLanguage();
    const stats = t('stats');

    return (
        <section className="container">
            <div className="stats-container">
                <StatCard number={stats.students} label={stats.studentsLabel} />
                <StatCard number={stats.members} label={stats.membersLabel} />
                <StatCard number={stats.years} label={stats.yearsLabel} />
                <StatCard number={stats.langs} label={stats.langsLabel} />
            </div>
        </section>
    );
};

const StatCard = ({ number, label }) => (
    <div className="stat-item" style={styles.card}>
        <div style={styles.number}>{number}</div>
        <div style={styles.label}>{label}</div>
    </div>
);

const styles = {
    // grid styles moved to .stats-container
    card: {
        backgroundColor: '#FFFFFF',
        padding: '2rem 1rem',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s',
    },
    number: {
        fontSize: '2.5rem',
        fontFamily: 'var(--font-serif)',
        color: 'var(--color-accent)',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    label: {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: 'var(--color-text-secondary)',
        fontWeight: '600',
    }
};

export default Stats;
