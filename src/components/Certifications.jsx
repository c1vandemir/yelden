import React from 'react';
import { useLang, certifications, licensedFibres } from '../i18n';

const tones = {
    organic: 'bg-[#4c8c2b]',
    recycled: 'bg-[#1f7a8c]',
    lenzing: 'bg-[#8dc63f]',
};

// A white, softly lit tile, like the light boxes on the storefront sign
function Badge({ item }) {
    return (
        <li
            lang="en"
            title={item.name}
            className="h-[4.5rem] px-3 rounded-xl bg-white/95 shadow-[0_0_18px_rgba(217,194,154,0.15)] flex items-center justify-center"
        >
            {item.logo ? (
                <span className="flex items-center gap-2">
                    <img src={`/images/certificates/${item.logo}`} alt={item.name} className="h-12 w-auto max-w-[7.5rem] object-contain flex-shrink-0" loading="lazy" />
                    {item.caption && <span className="text-[10px] font-bold uppercase leading-tight tracking-wider text-brand-navy/80 max-w-[5.5rem]">{item.caption}</span>}
                </span>
            ) : (
                <span className="flex items-center gap-2.5 text-left">
                    <span className={`w-1.5 self-stretch rounded-full ${tones[item.tone]}`}></span>
                    <span className="leading-tight">
                        <span className="block text-sm font-bold text-brand-navy whitespace-nowrap">{item.code}</span>
                        <span className="block text-[10px] text-brand-navy/60 whitespace-nowrap">{item.name}</span>
                    </span>
                </span>
            )}
        </li>
    );
}

export default function Certifications() {
    const { t } = useLang();

    return (
        <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-10">
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">{t.siteFooter.certifications}</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3">
                    {certifications.map((c) => <Badge key={c.id} item={c} />)}
                </ul>
            </div>
            <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">{t.siteFooter.fibres}</p>
                <ul className="grid grid-cols-2 gap-3">
                    {licensedFibres.map((c) => <Badge key={c.id} item={c} />)}
                </ul>
            </div>
        </div>
    );
}
