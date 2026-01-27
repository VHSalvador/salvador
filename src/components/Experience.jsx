import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
    const { t } = useLanguage();
    const content = t('experience');

    return (
        <section id="work" className="container section">
            <h2 style={styles.header}>
                {content.title.split('&').map((part, i, arr) => (
                    <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="fancy-amp">&</span>}
                    </React.Fragment>
                ))}
            </h2>
            <div style={styles.grid}>
                <div style={styles.item}>
                    <h3 style={styles.subHeader}>
                        {content.teachingTitle.split('&').map((part, i, arr) => (
                            <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && <span className="fancy-amp">&</span>}
                            </React.Fragment>
                        ))}
                    </h3>
                    <p style={styles.desc}>{content.teachingDesc}</p>
                </div>
                <div style={styles.item}>
                    <h3 style={styles.subHeader}>
                        {content.communityTitle.split('&').map((part, i, arr) => (
                            <React.Fragment key={i}>
                                {part}
                                {i < arr.length - 1 && <span className="fancy-amp">&</span>}
                            </React.Fragment>
                        ))}
                    </h3>
                    <p style={styles.desc}>{content.communityDesc}</p>
                </div>
            </div>
        </section>
    );
};

const styles = {
    header: {
        marginBottom: '3rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
    },
    subHeader: {
        color: 'var(--color-text-primary)',
        marginBottom: '1rem',
        fontFamily: 'var(--font-serif)',
    },
    desc: {
        color: 'var(--color-text-secondary)',
        lineHeight: '1.7',
    },
};

export default Experience;
