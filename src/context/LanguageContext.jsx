import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../content/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('hu'); // Default to Hungarian

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'hu' ? 'en' : 'hu'));
    };

    const t = (path) => {
        const keys = path.split('.');
        let current = translations[language];
        for (const key of keys) {
            if (current[key] === undefined) return path;
            current = current[key];
        }
        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);
