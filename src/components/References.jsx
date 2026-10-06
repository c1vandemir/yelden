import React from 'react';
import { useLang, references } from '../i18n';

function LogoRow({ hidden = false }) {
    return (
        <ul className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 flex-shrink-0" aria-hidden={hidden || undefined}>
            {references.map((r) => (
                <li key={r.id} className="flex-shrink-0">
                    <img
                        src={`/images/references/${r.id}.svg`}
                        alt={hidden ? '' : r.name}
                        style={{ height: r.h }}
                        className="w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
                        draggable="false"
                    />
                </li>
            ))}
        </ul>
    );
}

export default function References() {
    const { t } = useLang();

    return (
        <section className="bg-white py-20 border-b border-brand-beige">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
                    <span className="w-8 h-px bg-brand-gold"></span>{t.references.eyebrow}<span className="w-8 h-px bg-brand-gold"></span>
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-navy">{t.references.title}</h2>
            </div>

            {/* Two identical rows side by side; the track slides by half its width and loops seamlessly */}
            <div className="marquee overflow-hidden">
                <div className="marquee-track flex w-max items-center py-4">
                    <LogoRow />
                    <LogoRow hidden />
                </div>
            </div>
        </section>
    );
}
