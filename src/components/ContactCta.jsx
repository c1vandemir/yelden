import React from 'react';
import { Phone } from 'lucide-react';
import { useLang, company } from '../i18n';
import { whatsappLink, WhatsAppIcon } from './WhatsApp';

export default function ContactCta() {
    const { t } = useLang();

    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[2rem] bg-brand-navy px-8 py-14 md:px-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-brand-gold/15 blur-2xl"></div>
                    <div className="relative">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">{t.home.ctaTitle}</h2>
                        <p className="text-white/60">{t.home.ctaText}</p>
                    </div>
                    <div className="relative flex flex-wrap gap-4">
                        <a href={whatsappLink(t.whatsapp.message)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-7 py-4 rounded-full text-sm font-semibold tracking-wider hover:bg-[#1ebe5b] transition-colors">
                            <WhatsAppIcon className="w-5 h-5" /> {t.whatsapp.short}
                        </a>
                        <a href={company.phoneHref} className="inline-flex items-center gap-2 bg-white text-brand-navy px-7 py-4 rounded-full text-sm font-semibold tracking-wider hover:bg-brand-gold hover:text-white transition-colors">
                            <Phone className="w-4 h-4" /> {company.phoneDisplay}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
