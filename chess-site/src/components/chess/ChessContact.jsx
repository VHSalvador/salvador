import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import emailjs from '@emailjs/browser';
import { Check } from 'lucide-react';

const ChessContact = () => {
    const { t } = useLanguage();
    const chess = t('chess') || {};
    const contact = chess.contact || {};

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        kindergarten: '', // Optional: name of the institution/kindergarten
        message: ''
    });
    const [status, setStatus] = useState(null); // null, 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in the required fields (Name, Email, Message).');
            return;
        }

        setStatus('submitting');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Combine fields into the message parameter for the generic template
        // Assuming template accepts: from_name, from_email, message
        const emailParams = {
            to_name: 'Salvador',
            from_name: formData.name,
            from_email: formData.email,
            message: `
                Inquiry Type: Chess Coaching
                Kindergarten/Institution: ${formData.kindergarten || 'N/A'}
                
                Message:
                ${formData.message}
            `
        };

        try {
            await emailjs.send(serviceId, templateId, emailParams, publicKey);
            setStatus('success');
            setFormData({ name: '', email: '', kindergarten: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            setStatus('error');
            alert('Failed to send message. Please try again later.');
        }
    };

    return (
        <section id="contact" className="section" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.wrapper}>
                    {status === 'success' ? (
                        <div style={styles.successMessage}>
                            <Check size={64} color="#1E3A5F" />
                            <h3 style={styles.successTitle}>
                                {contact.successTitle || "Message Sent!"}
                            </h3>
                            <p style={styles.successText}>
                                {contact.successText || "Thank you for your inquiry. I will get back to you shortly."}
                            </p>
                            <button
                                onClick={() => setStatus(null)}
                                style={{ ...styles.submitBtn, width: 'auto', padding: '0.8rem 2rem' }}
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 style={styles.title}>{contact.headline}</h2>
                            <form style={styles.form} onSubmit={handleSubmit}>
                                <div style={styles.formGroup}>
                                    <label htmlFor="name" style={styles.label}>{contact.nameLabel} *</label>
                                    <input
                                        id="name"
                                        type="text"
                                        style={styles.input}
                                        placeholder={contact.nameLabel}
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label htmlFor="email" style={styles.label}>{contact.emailLabel} *</label>
                                    <input
                                        id="email"
                                        type="email"
                                        style={styles.input}
                                        placeholder={contact.emailLabel}
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label htmlFor="kindergarten" style={styles.label}>{contact.kindergartenLabel}</label>
                                    <input
                                        id="kindergarten"
                                        type="text"
                                        style={styles.input}
                                        placeholder={contact.kindergartenLabel}
                                        value={formData.kindergarten}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div style={styles.formGroup}>
                                    <label htmlFor="message" style={styles.label}>{contact.messageLabel} *</label>
                                    <textarea
                                        id="message"
                                        style={styles.textarea}
                                        placeholder={contact.messageLabel}
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn"
                                    style={{
                                        ...styles.submitBtn,
                                        opacity: status === 'submitting' ? 0.7 : 1,
                                        cursor: status === 'submitting' ? 'wait' : 'pointer'
                                    }}
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? 'Sending...' : contact.submitBtn}
                                </button>
                            </form>
                        </>
                    )}
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
        minHeight: '400px', // Prevent layout shifts
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
        transition: 'border-color 0.2s',
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
        transition: 'transform 0.2s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    successMessage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        padding: '2rem 0',
        animation: 'fadeIn 0.5s ease',
    },
    successTitle: {
        fontSize: '1.8rem',
        color: '#1E3A5F',
        fontFamily: 'var(--font-serif)',
        marginTop: '1.5rem',
        marginBottom: '1rem',
    },
    successText: {
        color: '#555',
        marginBottom: '2rem',
    }
};

export default ChessContact;
