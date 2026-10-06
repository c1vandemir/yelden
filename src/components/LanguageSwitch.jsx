import React from 'react';
import { useLang } from '../i18n';

function FlagTR({ className }) {
    return (
        <svg viewBox="0 0 30 20" className={className} aria-hidden="true">
            <rect width="30" height="20" fill="#E30A17" />
            <circle cx="10.6" cy="10" r="5" fill="#fff" />
            <circle cx="11.85" cy="10" r="4" fill="#E30A17" />
            <polygon fill="#fff" points="15.4,10 19.97,8.52 17.15,12.41 17.15,7.59 19.97,11.48" />
        </svg>
    );
}

function FlagGB({ className }) {
    return (
        <svg viewBox="0 0 60 30" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
            <clipPath id="gb-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#gb-t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </svg>
    );
}

const options = [
    { code: 'tr', label: 'TR', name: 'Türkçe', Flag: FlagTR },
    { code: 'en', label: 'EN', name: 'English', Flag: FlagGB },
];

export default function LanguageSwitch({ compact = false }) {
    const { lang, setLang } = useLang();

    return (
        <div role="group" aria-label="Language / Dil" className="flex items-center rounded-full bg-brand-cream border border-brand-beige p-1">
            {options.map((opt) => {
                const { code, label, name } = opt;
                const FlagIcon = opt.Flag;
                const active = lang === code;
                return (
                    <button
                        key={code}
                        type="button"
                        onClick={() => setLang(code)}
                        aria-pressed={active}
                        aria-label={name}
                        title={name}
                        className={`flex items-center gap-1.5 rounded-full transition-all ${compact ? 'p-1' : 'px-2.5 py-1'} ${active ? 'bg-white shadow-sm text-brand-navy' : 'text-brand-navy/50 hover:text-brand-navy opacity-70 hover:opacity-100'}`}
                    >
                        <FlagIcon className="w-5 h-[14px] rounded-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.08)] flex-shrink-0" />
                        {!compact && <span className="text-[11px] font-semibold tracking-wider">{label}</span>}
                    </button>
                );
            })}
        </div>
    );
}
