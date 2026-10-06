import React from 'react';

export default function PageHeader({ eyebrow, title, subtitle }) {
    return (
        <section className="relative overflow-hidden bg-brand-cream pt-40 pb-16 md:pt-44 md:pb-20">
            <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] rounded-full bg-brand-beige/70 blur-3xl"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {eyebrow && (
                    <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
                        <span className="w-8 h-px bg-brand-gold"></span>{eyebrow}
                    </p>
                )}
                <h1 className="font-serif text-5xl md:text-6xl text-brand-navy mb-4">{title}</h1>
                {subtitle && <p className="text-lg text-brand-navy/60 max-w-2xl">{subtitle}</p>}
            </div>
        </section>
    );
}
