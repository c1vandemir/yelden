import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Star, PackageCheck } from 'lucide-react';
import { useLang, company, collections, routes } from '../i18n';

export default function Hero() {
    const { t } = useLang();

    return (
        <section className="relative overflow-hidden bg-brand-cream pt-36 pb-16 md:pt-44 md:pb-24">
            {/* Decorative background */}
            <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-brand-beige/70 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-gold/10 blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                {/* Text */}
                <div>
                    <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-6">
                        <span className="w-8 h-px bg-brand-gold"></span>{t.hero.eyebrow}
                    </p>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-brand-navy leading-[1.05] mb-6">
                        {t.hero.titleStart}<br /><span className="italic text-brand-gold">{t.hero.titleAccent}</span>
                    </h1>
                    <p className="text-lg text-brand-navy/70 leading-relaxed max-w-xl mb-10">{t.hero.subtitle}</p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link to={routes.collections} className="inline-flex items-center gap-2 bg-brand-navy text-white px-7 py-4 rounded-full text-sm font-semibold tracking-wider hover:bg-brand-gold transition-colors">
                            {t.hero.cta} <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href={company.phoneHref} className="inline-flex items-center gap-2 border border-brand-navy/25 text-brand-navy px-7 py-4 rounded-full text-sm font-semibold tracking-wider hover:border-brand-navy transition-colors">
                            <Phone className="w-4 h-4" /> {t.hero.call}
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-brand-navy/70">
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />)}
                            </div>
                            <span><strong className="text-brand-navy">{company.rating}</strong> · {t.hero.reviews(company.reviewCount)}</span>
                        </div>
                        <span className="w-px h-5 bg-brand-navy/20"></span>
                        <span><strong className="text-brand-navy">{collections.length}</strong> {t.hero.collectionsLabel}</span>
                    </div>
                </div>

                {/* Image */}
                <div className="relative w-full aspect-[500/467]">
                    <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                        <img src="/images/storefront.jpg" alt={t.hero.showroomAlt} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute left-4 bottom-6 sm:-left-6 sm:bottom-8 flex items-center gap-3 bg-white/95 backdrop-blur rounded-2xl shadow-xl px-5 py-4">
                        <span className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center"><PackageCheck className="w-5 h-5" /></span>
                        <div>
                            <p className="font-serif text-lg text-brand-navy leading-tight">{t.features[1].title}</p>
                            <p className="text-xs text-brand-navy/60">{t.features[2].title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
