import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, Linkedin, Github, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { t } = useLanguage();
    const content = t('contact');

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [bookingStatus, setBookingStatus] = useState(null); // null, 'submitting', 'success', 'error'
    const [bookedSlots, setBookedSlots] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('bookedSlots');
            return saved ? JSON.parse(saved) : {};
        }
        return {};
    });

    // Calendar Helper Functions
    const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const getFirstDayOfMonth = (date) => {
        const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return day === 0 ? 6 : day - 1; // 0 = Monday, 6 = Sunday
    };

    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const weekDays = content.weekDays || ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        setSelectedDate(null);
        setSelectedTime(null);
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
        setSelectedDate(null);
        setSelectedTime(null);
    };

    const handleDateClick = (day) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(newDate);
        setSelectedTime(null);
    };

    const generateTimeSlots = (date) => {
        if (!date) return [];
        const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        const slots = [];

        if (isWeekend) {
            // Weekends: All day (e.g., 10:00 to 20:00)
            for (let hour = 10; hour < 20; hour++) {
                slots.push(`${hour}:00`);
            }
        } else {
            // Weekdays: 16:00 to 20:00
            for (let hour = 16; hour < 20; hour++) {
                slots.push(`${hour}:00`);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots(selectedDate);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime || !formData.name || !formData.email) {
            alert('Please fill in all fields and select a date/time.');
            return;
        }

        setBookingStatus('submitting');

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const confirmationTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRMATION_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || !confirmationTemplateId) {
            console.error('EmailJS environment variables are missing.');
            alert('System Error: Email configuration is missing. Please check .env file.');
            setBookingStatus('error');
            return;
        }

        // Check for placeholder values
        if (serviceId.includes('your_service_id') || serviceId.includes('az_te_service_id') ||
            templateId.includes('template_id') || publicKey.includes('public_key')) {
            alert('Configuration Error: It looks like you are using placeholder API keys. Please update your .env file with actual EmailJS credentials.');
            setBookingStatus('error');
            return;
        }

        const adminParams = {
            to_name: 'Salvador',
            from_name: formData.name,
            from_email: formData.email,
            date: selectedDate.toLocaleDateString(),
            time: selectedTime,
            message: `New booking request for ${selectedDate.toDateString()} at ${selectedTime}`,
        };

        const clientParams = {
            to_name: formData.name,
            to_email: formData.email,
            date: selectedDate.toLocaleDateString(),
            time: selectedTime,
        };

        try {
            await Promise.all([
                emailjs.send(serviceId, templateId, adminParams, publicKey),
                emailjs.send(serviceId, confirmationTemplateId, clientParams, publicKey)
            ]);

            setBookingStatus('success');

            // Send confirmation auto-reply (optional: usually handled by EmailJS "Auto-Reply" setting in dashboard, 
            // but if we want to trigger another template, we would call send() again here).
            // For now, we assume the Template in EmailJS is configured to send to both or we use the auto-reply feature there.

            setTimeout(() => {
                const newBookedSlots = { ...bookedSlots };
                const dateKey = selectedDate.toDateString();
                if (!newBookedSlots[dateKey]) {
                    newBookedSlots[dateKey] = [];
                }
                newBookedSlots[dateKey].push(selectedTime);
                setBookedSlots(newBookedSlots);
                localStorage.setItem('bookedSlots', JSON.stringify(newBookedSlots));

                setBookingStatus(null);
                setFormData({ name: '', email: '' });
                setSelectedDate(null);
                setSelectedTime(null);
            }, 5000);

        } catch (error) {
            console.error('Failed to send email:', error);
            const errorMessage = error.text || error.message || JSON.stringify(error);
            alert(`Failed to send booking request. Error details: ${errorMessage}`);
            setBookingStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="grid-2-cols">
                    {/* Left Side: Contact Info */}
                    <div style={styles.info}>
                        <h2 style={styles.header}>{content.title}</h2>
                        <p style={styles.desc}>{content.description}</p>

                        <div style={styles.contactDetails}>
                            <div style={styles.contactItem}>
                                <Phone size={24} color="#6aa8a0" />
                                <span>{content.phone}</span>
                            </div>
                            <div style={styles.contactItem}>
                                <Mail size={24} color="#6aa8a0" />
                                <span>{content.email}</span>
                            </div>
                            <div style={styles.contactItem}>
                                <Linkedin size={24} color="#6aa8a0" />
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.linkText}>{content.linkedin}</a>
                            </div>
                            <div style={styles.contactItem}>
                                <Github size={24} color="#6aa8a0" />
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.linkText}>{content.github}</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div style={styles.formCard}>
                        {bookingStatus === 'success' ? (
                            <div style={styles.successMessage}>
                                <Check size={48} color="#4CAF50" />
                                <h3>Booking Confirmed!</h3>
                                <p>A confirmation email has been sent to {formData.email}.</p>
                            </div>
                        ) : (
                            <>
                                <h3 style={styles.formTitle}>{content.form.title}</h3>

                                <div className="contact-form-grid">
                                    {/* Calendar Column */}
                                    <div style={styles.calendarCol}>
                                        <div style={styles.calendar}>
                                            <div style={styles.calHeader}>
                                                <button onClick={handlePrevMonth} style={styles.navBtn} aria-label={t('contact.calendar.prevMonth') || "Previous month"}><ChevronLeft size={20} /></button>
                                                <span>{currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</span>
                                                <button onClick={handleNextMonth} style={styles.navBtn} aria-label={t('contact.calendar.nextMonth') || "Next month"}><ChevronRight size={20} /></button>
                                            </div>
                                            <div style={styles.calGrid}>
                                                {weekDays.map(d => <div key={d} style={styles.calDayHeader}>{d}</div>)}
                                                {Array(firstDay).fill(null).map((_, i) => <div key={`empty-${i}`} />)}
                                                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => {
                                                    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), d);
                                                    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                                                    const isToday = date.toDateString() === new Date().toDateString();

                                                    return (
                                                        <div
                                                            key={d}
                                                            onClick={() => handleDateClick(d)}
                                                            style={{
                                                                ...styles.calDay,
                                                                ...(isSelected ? styles.calDayActive : {}),
                                                                ...(isToday && !isSelected ? styles.calDayToday : {})
                                                            }}
                                                        >
                                                            {d}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Inputs Column */}
                                    <div style={styles.inputsCol}>
                                        {selectedDate && (
                                            <div style={styles.timeSlots}>
                                                <label style={styles.label}>{content.form.availableTimes} ({selectedDate.toLocaleDateString()})</label>
                                                <div style={styles.slotGrid}>
                                                    {timeSlots.map(time => {
                                                        const isBooked = bookedSlots[selectedDate.toDateString()]?.includes(time);
                                                        return (
                                                            <button
                                                                key={time}
                                                                type="button"
                                                                disabled={isBooked}
                                                                onClick={() => !isBooked && setSelectedTime(time)}
                                                                style={{
                                                                    ...styles.timeSlot,
                                                                    ...(selectedTime === time ? styles.timeSlotActive : {}),
                                                                    ...(isBooked ? styles.timeSlotDisabled : {})
                                                                }}
                                                            >
                                                                {time}
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        <div style={styles.inputGroup}>
                                            <label style={styles.label}>{content.form.nameLabel}</label>
                                            <input
                                                type="text"
                                                placeholder={content.form.namePlaceholder}
                                                style={styles.input}
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div style={styles.inputGroup}>
                                            <label style={styles.label}>{content.form.emailLabel}</label>
                                            <input
                                                type="email"
                                                placeholder={content.form.emailPlaceholder}
                                                style={styles.input}
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button style={styles.btn} onClick={handleSubmit} disabled={bookingStatus === 'submitting'}>
                                    {bookingStatus === 'submitting' ? 'Scheduling...' : content.form.btn}
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    info: {
        paddingTop: '2rem',
    },
    header: {
        fontFamily: 'var(--font-serif)',
        fontSize: '3rem',
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
        gap: '1.5rem',
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        color: '#6aa8a0',
        fontWeight: '500',
    },
    linkText: {
        color: '#6aa8a0',
        textDecoration: 'none',
    },
    formCard: {
        backgroundColor: '#F9F9F4',
        border: '1px solid #EAEAEA',
        borderRadius: '24px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        minHeight: '500px', // Prevent layout jump
    },
    formTitle: {
        marginBottom: '2rem',
        fontSize: '1.2rem',
        fontWeight: '600',
    },
    calendar: {
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        fontSize: '0.8rem',
        marginBottom: '1.5rem',
    },
    calHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        fontWeight: 'bold',
        color: '#333',
    },
    navBtn: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '4px',
        display: 'flex',
        alignItems: 'center',
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
        padding: '8px',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'background 0.2s',
    },
    calDayActive: {
        backgroundColor: '#5A7D8F',
        color: '#fff',
    },
    calDayToday: {
        border: '1px solid #5A7D8F',
        color: '#5A7D8F',
        fontWeight: 'bold',
    },
    timeSlots: {
        marginBottom: '1.5rem',
        animation: 'fadeIn 0.3s ease',
    },
    slotGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.5rem',
    },
    timeSlot: {
        padding: '0.5rem',
        borderRadius: '6px',
        border: '1px solid #ddd',
        backgroundColor: '#fff',
        cursor: 'pointer',
        fontSize: '0.8rem',
    },
    timeSlotActive: {
        backgroundColor: '#5A7D8F',
        color: '#fff',
        borderColor: '#5A7D8F',
    },
    timeSlotDisabled: {
        backgroundColor: '#f0f0f0',
        color: '#ccc',
        borderColor: '#eee',
        cursor: 'not-allowed',
        textDecoration: 'line-through'
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
        backgroundColor: '#8da3b3',
        color: 'white',
        padding: '1rem',
        borderRadius: '8px',
        border: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
    },
    successMessage: {
        textAlign: 'center',
        padding: '2rem',
        color: '#333',
    }
};

export default Contact;
