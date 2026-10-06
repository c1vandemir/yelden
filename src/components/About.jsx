import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Instagram, ArrowRight } from 'lucide-react';
import { useLang, company, routes } from '../i18n';

export default function About({ showMore = false, bg = 'bg-brand-cream' }) {
    const { t } = useLang();

    return (
        <section className={`py-24 ${bg}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[2.5rem] border border-brand-gold/40 hidden sm:block"></div>
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                            <img src="/images/about-swatch-book.jpg" alt={t.about.imageAlt} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-8 right-6 bg-brand-navy text-white rounded-2xl shadow-xl px-6 py-5">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-serif text-4xl leading-none">{company.rating}</span>
                                <Star className="w-6 h-6 text-brand-gold fill-brand-gold" />
                            </div>
                            <p className="text-xs uppercase tracking-[0.2em] text-white/70">{t.about.rating} · {t.about.reviews(company.reviewCount)}</p>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-6 pt-8 lg:pt-0">
                        <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                            <span className="w-8 h-px bg-brand-gold"></span>{t.about.eyebrow}
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl text-brand-navy leading-tight">{t.about.title}</h2>
                        {/* The home page shows a short teaser; the About page shows the full text */}
                        {(showMore ? t.about.body.slice(0, 2) : t.about.body).map((para, i) => (
                            <p key={i} className={`text-brand-navy/70 leading-relaxed ${i === 0 ? 'text-lg' : ''}`}>{para}</p>
                        ))}
                        <div className="flex flex-wrap items-center gap-6 pt-2">
                        {showMore && (
                            <Link to={routes.about} className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3.5 rounded-full text-sm font-semibold tracking-wider hover:bg-brand-gold transition-colors">
                                {t.home.aboutMore} <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                        <a href={company.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-brand-navy font-medium hover:text-brand-gold transition-colors">
                            <span className="w-11 h-11 rounded-full bg-white shadow flex items-center justify-center"><Instagram className="w-5 h-5" /></span>
                            <span>{t.about.follow}<br /><span className="text-sm text-brand-navy/50">@{company.instagram}</span></span>
                        </a>
                        </div>
                    </div>
                </div>

                {!showMore && (
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: t.about.usesTitle, items: t.about.uses },
                            { title: t.about.fabricsTitle, items: t.about.fabrics },
                        ].map((group) => (
                            <div key={group.title} className="rounded-3xl bg-brand-cream border border-brand-beige p-8">
                                <h3 className="font-serif text-2xl text-brand-navy mb-5">{group.title}</h3>
                                <ul className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <li key={item} className="px-4 py-2 rounded-full bg-white border border-brand-beige text-sm text-brand-navy/80">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
