import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
    const { t } = useLanguage();
    const content = t('contact');

    // Calendar data for visual representation (November 2025 based on mockup)
    const days = Array.from({ length: 30 }, (_, i) => i + 1);
    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

    // Start on Saturday (Nov 1 2025 is a Saturday)
    const emptyStart = Array(6).fill(null);

    return (
        <section id="contact" className="container section">
            <div style={styles.grid}>
                {/* Left Side: Contact Info */}
                <div style={styles.info}>
                    <div style={styles.imagePlaceholder}>
                        {/* Placeholder for the boat/couple image in the "Let's Connect" card if needed, 
                            but the mockup shows just text or a small image. 
                            Wait, the mockup has an image on the left of "Let's Connect". 
                            I'll use a placeholder or remove if not available. 
                            The user uploaded an image uploaded_media_0 which matches this.
                            I should use that if possible. But I don't have it in accessible path easily.
                            I'll use a grey box or just text for now.
                        */}
                    </div>
                    <h2 style={styles.header}>{content.title}</h2>
                    <p style={styles.desc}>{content.description}</p>

                    <div style={styles.contactDetails}>
                        <div style={styles.contactItem}><span style={styles.icon}>📞</span> {content.phone}</div>
                        <div style={styles.contactItem}><span style={styles.icon}>✉️</span> {content.email}</div>
                        <div style={styles.contactItem}><span style={styles.icon}>In</span> {content.linkedin}</div>
                        <div style={styles.contactItem}><span style={styles.icon}>Git</span> {content.github}</div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div style={styles.formCard}>
                    <h3 style={styles.formTitle}>{content.form.title}</h3>

                    <div style={styles.formContent}>
                        {/* Calendar Column */}
                        <div style={styles.calendarCol}>
                            <label style={styles.label}>Select a Date</label>
                            <div style={styles.calendar}>
                                <div style={styles.calHeader}>
                                    <span>&lt;</span>
                                    <span>November 2025</span>
                                    <span>&gt;</span>
                                </div>
                                <div style={styles.calGrid}>
                                    {weekDays.map(d => <div key={d} style={styles.calDayHeader}>{d}</div>)}
                                    {emptyStart.map((_, i) => <div key={`empty-${i}`} />)}
                                    {days.map(d => (
                                        <div key={d} style={{
                                            ...styles.calDay,
                                            ...(d === 29 ? styles.calDayActive : {})
                                        }}>
                                            {d}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Inputs Column */}
                        <div style={styles.inputsCol}>
                            <div style={styles.inputGroup}>
                                <label style={styles.label}>{content.form.nameLabel}</label>
                                <input type="text" placeholder={content.form.namePlaceholder} style={styles.input} />
                            </div>
                            <div style={styles.inputGroup}>
                                <label style={styles.label}>{content.form.emailLabel}</label>
                                <input type="email" placeholder={content.form.emailPlaceholder} style={styles.input} />
                            </div>
                        </div>
                    </div>
                    <button style={styles.btn}>{content.form.btn}</button>
                </div>
            </div>
        </section>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
        gap: '4rem',
        alignItems: 'start',
    },
    info: {
        paddingTop: '2rem',
    },
    header: {
        fontFamily: 'var(--font-serif)',
        fontSize: '3rem',
        color: 'var(--color-text-primary)',
        marginBottom: '1rem',
    },
    desc: {
        color: 'var(--color-text-secondary)',
        marginBottom: '2rem',
        lineHeight: '1.6',
    },
    contactDetails: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        color: '#6aa8a0', // Distinct color from mockup
        fontWeight: '500',
    },
    formCard: {
        backgroundColor: '#F9F9F4', // Light beige/greenish 
        border: '1px solid #EAEAEA',
        borderRadius: '24px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    },
    formTitle: {
        color: '#7C9A92',
        marginBottom: '2rem',
        fontSize: '1.2rem',
        fontWeight: '600',
    },
    formContent: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '2rem',
    },
    calendar: {
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        fontSize: '0.8rem',
    },
    calHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        fontWeight: 'bold',
    },
    calGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '5px',
        textAlign: 'center',
    },
    calDayHeader: {
        color: '#ccc',
        fontSize: '0.7rem',
        marginBottom: '5px',
    },
    calDay: {
        padding: '5px',
        cursor: 'pointer',
    },
    calDayActive: {
        backgroundColor: '#5A7D8F',
        color: '#fff',
        borderRadius: '50%',
    },
    inputGroup: {
        marginBottom: '1.5rem',
    },
    label: {
        display: 'block',
        fontSize: '0.9rem',
        fontWeight: '600',
        marginBottom: '0.5rem',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: '0.8rem',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '0.9rem',
    },
    btn: {
        width: '100%',
        backgroundColor: '#8da3b3', // Slate blue form button
        color: 'white',
        padding: '1rem',
        borderRadius: '8px',
        border: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
    },
};

export default Contact;
