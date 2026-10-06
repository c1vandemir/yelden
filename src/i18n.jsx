import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from './content';

// eslint-disable-next-line react-refresh/only-export-components
export { company, collections, routes, references, certifications, licensedFibres } from './content';

const LanguageContext = createContext(null);

function getInitialLang() {
    try {
        const saved = localStorage.getItem('lang');
        if (saved === 'tr' || saved === 'en') return saved;
    } catch {
        // localStorage may be unavailable
    }
    return 'tr';
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.title = translations[lang].meta.title;
        try {
            localStorage.setItem('lang', lang);
        } catch {
            // ignore
        }
    }, [lang]);

    const toggleLang = () => setLang((l) => (l === 'tr' ? 'en' : 'tr'));

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
    return useContext(LanguageContext);
}
