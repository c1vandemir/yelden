import React from 'react';
import { Phone, MapPin, Navigation, Instagram } from 'lucide-react';
import { useLang, company } from '../i18n';
import { whatsappLink, WhatsAppIcon } from './WhatsApp';

export default function Contact() {
    const { t, lang } = useLang();
    const q = encodeURIComponent(company.mapsQuery);

    return (
        <section className="bg-brand-navy-dark text-white pt-40 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
                                <span className="w-8 h-px bg-brand-gold"></span>{t.footer.contact}
                            </p>
                            <h1 className="font-serif text-4xl md:text-6xl">{t.footer.title}</h1>
                        </div>

                        <p className="font-semibold tracking-wide">{company.legalName}</p>

                        <div className="space-y-4 text-white/70">
                            <div className="flex items-start gap-4">
                                <span className="w-10 h-10 flex-shrink-0 rounded-full border border-white/15 flex items-center justify-center text-brand-gold"><MapPin className="w-4 h-4" /></span>
                                <p className="pt-2">{company.address}<br />{t.footer.country}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 flex-shrink-0 rounded-full border border-white/15 flex items-center justify-center text-brand-gold"><Phone className="w-4 h-4" /></span>
                                <a href={company.phoneHref} className="hover:text-white transition-colors">{company.phoneDisplay}</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 flex-shrink-0 rounded-full border border-white/15 flex items-center justify-center text-brand-gold"><WhatsAppIcon className="w-4 h-4" /></span>
                                <a href={whatsappLink(t.whatsapp.message)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t.whatsapp.short}: {company.phoneDisplay}</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 flex-shrink-0 rounded-full border border-white/15 flex items-center justify-center text-brand-gold"><Instagram className="w-4 h-4" /></span>
                                <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@{company.instagram}</a>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-brand-gold text-white px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider hover:bg-white hover:text-brand-navy transition-colors"
                            >
                                <Navigation className="w-4 h-4" /> {t.footer.directions}
                            </a>
                            <a
                                href={whatsappLink(t.whatsapp.message)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider hover:bg-[#1ebe5b] transition-colors"
                            >
                                <WhatsAppIcon className="w-4 h-4" /> {t.whatsapp.short}
                            </a>
                            <a
                                href={company.phoneHref}
                                className="inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider hover:border-white transition-colors"
                            >
                                <Phone className="w-4 h-4" /> {t.footer.call}
                            </a>
                        </div>
                    </div>

                    {/* Google Maps Iframe */}
                    <div className="h-80 lg:h-auto min-h-80 rounded-3xl overflow-hidden border border-white/10">
                        <iframe
                            src={`https://maps.google.com/maps?q=${q}&hl=${lang}&z=16&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '20rem' }}
                            allowFullScreen=""
                            loading="lazy"
                            title={t.footer.mapTitle}
                        ></iframe>
                    </div>
                </div>

            </div>
        </section>
    );
}
