import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { useLang, company, routes } from '../i18n';
import { whatsappLink, WhatsAppIcon } from './WhatsApp';
import LanguageSwitch from './LanguageSwitch';

function SocialButtons({ size = 'w-10 h-10' }) {
    const { t } = useLang();
    return (
        <>
            <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title={`@${company.instagram}`}
                className={`${size} rounded-full flex items-center justify-center text-white bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-110 transition-transform shadow-sm`}
            >
                <Instagram className="w-5 h-5" />
            </a>
            <a
                href={whatsappLink(t.whatsapp.message)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.whatsapp.label}
                title={t.whatsapp.label}
                className={`${size} rounded-full flex items-center justify-center text-white bg-[#25D366] hover:scale-110 transition-transform shadow-sm`}
            >
                <WhatsAppIcon className="w-5 h-5" />
            </a>
        </>
    );
}

export default function Navbar() {
    const { t } = useLang();
    const { pathname } = useLocation();
    // The mobile menu stays open only on the page where it was opened
    const [openOn, setOpenOn] = useState(null);
    const isOpen = openOn === pathname;
    const close = () => setOpenOn(null);

    const links = [
        { to: routes.home, label: t.nav.home },
        { to: routes.collections, label: t.nav.collections },
        { to: routes.about, label: t.nav.about },
        { to: routes.contact, label: t.nav.contact },
    ];

    const linkClass = ({ isActive }) =>
        `relative uppercase text-xs font-medium tracking-[0.2em] transition-colors py-2 ${isActive ? 'text-brand-navy after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-brand-gold' : 'text-brand-navy/60 hover:text-brand-navy'}`;

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center gap-6">
                    {/* Logo */}
                    <Link to={routes.home} className="flex flex-col items-center leading-none flex-shrink-0">
                        <span className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.12em] text-brand-navy">YELDEN</span>
                        <span className="flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.45em] text-brand-gold mt-1.5">
                            <span className="w-4 sm:w-5 h-px bg-brand-gold"></span>FABRICS<span className="w-4 sm:w-5 h-px bg-brand-gold"></span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-9">
                        {links.map((link) => (
                            <NavLink key={link.to} to={link.to} end className={linkClass}>{link.label}</NavLink>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <SocialButtons />
                        <LanguageSwitch />
                        <a href={company.phoneHref} className="hidden xl:inline-flex items-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider hover:bg-brand-gold transition-colors">
                            <Phone className="w-3.5 h-3.5" /> {company.phoneDisplay}
                        </a>
                    </div>

                    {/* Mobile controls */}
                    <div className="lg:hidden flex items-center gap-2">
                        <SocialButtons size="w-9 h-9" />
                        <LanguageSwitch compact />
                        <button onClick={() => setOpenOn(isOpen ? null : pathname)} aria-label="Menu" className="w-9 h-9 flex items-center justify-center text-brand-navy focus:outline-none">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute w-full bg-white border-b border-gray-100 shadow-sm">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end
                                onClick={close}
                                className={({ isActive }) => `block px-3 py-3 text-sm uppercase tracking-[0.2em] rounded-md ${isActive ? 'bg-brand-cream text-brand-navy font-semibold' : 'text-brand-navy hover:bg-brand-cream'}`}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <a href={company.phoneHref} className="mt-3 flex items-center justify-center gap-2 bg-brand-navy text-white px-5 py-3 rounded-full text-sm font-semibold">
                            <Phone className="w-4 h-4" /> {company.phoneDisplay}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
