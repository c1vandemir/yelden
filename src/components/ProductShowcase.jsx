import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Phone, X } from 'lucide-react';
import { useLang, company, collections, routes } from '../i18n';
import { whatsappLink, WhatsAppIcon } from './WhatsApp';

const groups = ['all', 'cotton', 'blend', 'technical'];

function CollectionModal({ item, onClose }) {
    const { lang, t } = useLang();
    const c = item[lang];

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && onClose();
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-brand-navy-dark/80 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label={c.name}>
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-5xl w-full max-h-[92vh] grid grid-cols-1 md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} aria-label={t.collections.close} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center text-brand-navy hover:bg-brand-navy hover:text-white transition-colors">
                    <X className="w-5 h-5" />
                </button>
                <div className="bg-brand-cream flex items-center justify-center overflow-auto max-h-[45vh] md:max-h-[92vh]">
                    <img src={`/images/posters/${item.id}.jpg`} alt={c.name} className="w-full h-full object-contain" />
                </div>
                <div className="p-8 md:p-10 flex flex-col overflow-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">{t.collections.groups[item.group]}</p>
                    <h3 className="font-serif text-3xl md:text-4xl text-brand-navy mb-4">{c.name}</h3>
                    <p className="text-brand-navy/70 leading-relaxed mb-8">{c.description}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/50 mb-3">{t.collections.specs}</p>
                    <ul className="space-y-2 mb-10">
                        {c.specs.map((s) => (
                            <li key={s} className="flex items-center gap-3 text-brand-navy">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>{s}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-auto flex flex-col gap-3">
                        <a href={whatsappLink(t.collections.whatsappAbout(c.name))} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full text-sm font-semibold tracking-wider hover:bg-[#1ebe5b] transition-colors">
                            <WhatsAppIcon className="w-5 h-5" /> {t.whatsapp.label}
                        </a>
                        <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white px-6 py-4 rounded-full text-sm font-semibold tracking-wider hover:bg-brand-gold transition-colors">
                            <Phone className="w-4 h-4" /> {t.collections.cta}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProductShowcase({ preview = false }) {
    const { lang, t } = useLang();
    const [filter, setFilter] = useState('all');
    const [selected, setSelected] = useState(null);

    const filtered = filter === 'all' ? collections : collections.filter((c) => c.group === filter);
    const visible = preview ? collections.slice(0, 6) : filtered;

    return (
        <section className={preview ? 'py-24 bg-white' : 'pt-12 pb-24 bg-white'}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
                    {preview ? (
                        <div>
                            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
                                <span className="w-8 h-px bg-brand-gold"></span>{t.collections.eyebrow}
                            </p>
                            <h2 className="font-serif text-4xl md:text-5xl text-brand-navy mb-3">{t.home.featuredTitle}</h2>
                            <p className="text-brand-navy/60 max-w-xl">{t.home.featuredSubtitle}</p>
                        </div>
                    ) : (
                        <p className="text-brand-navy/60 max-w-xl">{t.collections.subtitle}</p>
                    )}

                    {preview ? (
                        <Link to={routes.collections} className="self-start md:self-auto inline-flex items-center gap-2 border border-brand-navy/25 text-brand-navy px-6 py-3 rounded-full text-sm font-semibold tracking-wider hover:bg-brand-navy hover:text-white transition-colors">
                            {t.home.allCollections} <ArrowRight className="w-4 h-4" />
                        </Link>
                    ) : (
                    <div className="flex flex-wrap gap-2">
                        {groups.map((g) => (
                            <button
                                key={g}
                                onClick={() => setFilter(g)}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${filter === g ? 'bg-brand-navy text-white' : 'bg-brand-cream text-brand-navy hover:bg-brand-beige'}`}
                            >
                                {t.collections.groups[g]}
                            </button>
                        ))}
                    </div>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visible.map((item) => {
                        const c = item[lang];
                        return (
                            <button key={item.id} onClick={() => setSelected(item)} className="group text-left rounded-3xl overflow-hidden bg-brand-cream/60 border border-brand-beige hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img src={`/images/collections/${item.id}.jpg`} alt={c.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-brand-navy">
                                        {t.collections.groups[item.group]}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <h3 className="font-serif text-2xl text-brand-navy">{c.name}</h3>
                                        <span className="w-9 h-9 flex-shrink-0 rounded-full border border-brand-navy/20 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                    <p className="text-sm text-brand-navy/60 leading-relaxed mb-4">{c.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {c.specs.map((s) => (
                                            <span key={s} className="text-xs px-3 py-1 rounded-full bg-white border border-brand-beige text-brand-navy/80">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {selected && <CollectionModal item={selected} onClose={() => setSelected(null)} />}
        </section>
    );
}
