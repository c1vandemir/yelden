import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { useLang, company, routes } from '../i18n';
import { whatsappLink, WhatsAppIcon } from './WhatsApp';
import Certifications from './Certifications';

export default function SiteFooter() {
    const { t } = useLang();

    const links = [
        { to: routes.home, label: t.nav.home },
        { to: routes.collections, label: t.nav.collections },
        { to: routes.about, label: t.nav.about },
        { to: routes.contact, label: t.nav.contact },
    ];

    return (
        <footer className="bg-brand-navy-dark text-white/70 pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <Link to={routes.home} className="inline-flex flex-col items-center leading-none mb-5">
                            <span className="font-serif text-3xl font-bold tracking-[0.12em] text-white">YELDEN</span>
                            <span className="flex items-center gap-2 text-[11px] tracking-[0.45em] text-brand-gold mt-1.5">
                                <span className="w-4 h-px bg-brand-gold"></span>FABRICS<span className="w-4 h-px bg-brand-gold"></span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">{company.legalName}</p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">{t.siteFooter.pages}</p>
                        <ul className="space-y-2">
                            {links.map((l) => (
                                <li key={l.to}><Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">{t.siteFooter.contact}</p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-gold" />{company.address}</li>
                            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-brand-gold" /><a href={company.phoneHref} className="hover:text-white">{company.phoneDisplay}</a></li>
                        </ul>
                        <div className="flex gap-3 mt-5">
                            <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href={whatsappLink(t.whatsapp.message)} target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp.label} className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-colors">
                                <WhatsAppIcon className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                <Certifications />

                <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} {company.name}. {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
}
