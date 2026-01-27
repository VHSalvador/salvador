import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TimelineSkills = () => {
    const { t } = useLanguage();
    const timeline = t('timeline');
    const skills = t('skills');

    const renderFancyTitle = (title) => {
        return title.split('&').map((part, i, arr) => (
            <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="fancy-amp">&</span>}
            </React.Fragment>
        ));
    };

    const highlightNumbers = (text) => {
        const regex = /(50\+|10[\s,\.]?000\+|4\+)/g;
        const parts = text.split(regex);
        return parts.map((part, i) => {
            if (part.match(regex)) {
                return <span key={i} style={styles.highlight}>{part}</span>;
            }
            return part;
        });
    };

    return (
        <section className="container section">
            <div style={styles.grid}>
                {/* Timeline Column */}
                <div style={styles.column}>
                    <h2 style={styles.header}>Timeline</h2>
                    <div style={styles.timelineContainer}>
                        {timeline.map((item, index) => (
                            <div key={index} style={styles.timelineItem}>
                                <div style={styles.dot}></div>
                                <div style={styles.year}>{item.year}</div>
                                <div style={styles.eventTitle}>{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Column */}
                <div style={styles.column}>
                    <h2 style={styles.header}>{skills.title}</h2>

                    {/* Teaching & Coaching */}
                    <div style={styles.skillGroup}>
                        <h3 style={styles.skillHeader}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}>
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                            {renderFancyTitle(skills.teaching.title)}
                        </h3>
                        <ul style={styles.list}>
                            {skills.teaching.items.map((item, idx) => (
                                <li key={idx} style={styles.listItem}>
                                    <span style={styles.label}>{item.label}:</span> {highlightNumbers(item.text)}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Entrepreneurship */}
                    <div style={styles.skillGroup}>
                        <h3 style={styles.skillHeader}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}>
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            {renderFancyTitle(skills.entrepreneurship.title)}
                        </h3>
                        <ul style={styles.list}>
                            {skills.entrepreneurship.items.map((item, idx) => (
                                <li key={idx} style={styles.listItem}>
                                    <span style={styles.label}>{item.label}:</span> {highlightNumbers(item.text)}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technical */}
                    <div style={styles.skillGroup}>
                        <h3 style={styles.skillHeader}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}>
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                            {renderFancyTitle(skills.technical.title)}
                        </h3>
                        <ul style={styles.list}>
                            {skills.technical.items.map((item, idx) => (
                                <li key={idx} style={styles.listItem}>
                                    <span style={styles.label}>{item.label}:</span> {highlightNumbers(item.text)}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Soft Skills */}
                    <div style={styles.skillGroup}>
                        <h3 style={styles.skillHeader}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.icon}>
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                            </svg>
                            {renderFancyTitle(skills.soft.title)}
                        </h3>
                        <ul style={styles.list}>
                            {skills.soft.items.map((item, idx) => (
                                <li key={idx} style={styles.listItem}>
                                    <span style={styles.label}>{item.label}:</span> {highlightNumbers(item.text)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
    },
    header: {
        marginBottom: '2rem',
        color: 'var(--color-text-primary)',
    },
    // Timeline Styles
    timelineContainer: {
        borderLeft: '2px solid #E0E0E0',
        paddingLeft: '2rem',
        position: 'relative',
    },
    timelineItem: {
        marginBottom: '2rem',
        position: 'relative',
    },
    dot: {
        position: 'absolute',
        left: '-2.4rem',
        top: '0.4rem',
        width: '12px',
        height: '12px',
        backgroundColor: 'var(--color-text-primary)',
        borderRadius: '50%',
        border: '2px solid var(--color-bg)',
    },
    year: {
        color: 'var(--color-accent)',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        marginBottom: '0.2rem',
    },
    eventTitle: {
        color: 'var(--color-text-primary)',
        fontWeight: '500',
    },
    // Skills Styles
    skillGroup: {
        marginBottom: '3rem', // Increased spacing for cleaner look
    },
    skillHeader: {
        fontFamily: 'var(--font-serif)',
        color: 'var(--color-text-primary)',
        fontSize: '1.4rem', // Slightly larger for better hierarchy
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
    },
    icon: {
        color: 'var(--color-text-primary)', // Or a lighter shade if desired
        opacity: 0.8,
    },
    list: {
        listStyle: 'disc', // Restored bullet points
        paddingLeft: '1.5rem', // Indent for bullets
    },
    listItem: {
        position: 'relative',
        marginBottom: '0.8rem',
        color: 'var(--color-text-secondary)',
        lineHeight: '1.6',
    },
    label: {
        fontWeight: '600',
        color: 'var(--color-text-primary)',
        marginRight: '0.3rem',
    },
    highlight: {
        color: 'var(--color-accent)',
        fontWeight: 'bold',
    },
};

export default TimelineSkills;
