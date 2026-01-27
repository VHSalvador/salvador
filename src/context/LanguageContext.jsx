import React, { createContext, useContext, useState } from 'react';
import { translations } from '../content/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('hu'); // Default to Hungarian

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

export const useLanguage = () => useContext(LanguageContext);
