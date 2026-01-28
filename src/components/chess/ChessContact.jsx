import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ChessContact = () => {
    const { t } = useLanguage();
    const chess = t('chess') || {};
    const contact = chess.contact || {};

    return (
        <section id="contact" className="section" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.wrapper}>
                    <h2 style={styles.title}>{contact.headline}</h2>
                    <form style={styles.form}>
                        <div style={styles.formGroup}>
                            <label htmlFor="name" style={styles.label}>{contact.nameLabel}</label>
                            <input id="name" type="text" style={styles.input} placeholder={contact.nameLabel} />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="email" style={styles.label}>{contact.emailLabel}</label>
                            <input id="email" type="email" style={styles.input} placeholder={contact.emailLabel} />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="kindergarten" style={styles.label}>{contact.kindergartenLabel}</label>
                            <input id="kindergarten" type="text" style={styles.input} placeholder={contact.kindergartenLabel} />
                        </div>
                        <div style={styles.formGroup}>
                            <label htmlFor="message" style={styles.label}>{contact.messageLabel}</label>
                            <textarea id="message" style={styles.textarea} placeholder={contact.messageLabel} rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn" style={styles.submitBtn}>
                            {contact.submitBtn}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        // padding handled by .section
        backgroundColor: '#F3F3E9', // Match main theme bg for contact
    },
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 2rem',
    },
    wrapper: {
        backgroundColor: '#fff',
        padding: '3rem',
        borderRadius: '24px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    },
    title: {
        fontSize: '2rem',
        color: '#1E3A5F',
        fontFamily: 'var(--font-serif)',
        marginBottom: '2rem',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        fontSize: '0.9rem',
        color: '#555',
        marginBottom: '0.5rem',
        fontWeight: '500',
    },
    input: {
        padding: '0.8rem',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        fontFamily: 'var(--font-sans)',
    },
    textarea: {
        padding: '0.8rem',
        borderRadius: '8px',
        border: '1px solid #ddd',
        fontSize: '1rem',
        fontFamily: 'var(--font-sans)',
        resize: 'vertical',
    },
    submitBtn: {
        backgroundColor: '#1E3A5F',
        color: '#fff',
        border: 'none',
        marginTop: '1rem',
        cursor: 'pointer',
    }
};

export default ChessContact;
