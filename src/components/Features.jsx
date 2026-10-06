import React from 'react';
import { Layers, PackageCheck, Truck, ShieldCheck } from 'lucide-react';
import { useLang } from '../i18n';

const icons = [Layers, PackageCheck, Truck, ShieldCheck];

export default function Features() {
    const { t } = useLang();

    return (
        <section className="bg-brand-navy text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
                {t.features.map((f, i) => {
                    const Icon = icons[i];
                    return (
                        <div key={f.title} className="flex items-center gap-4">
                            <span className="w-12 h-12 flex-shrink-0 rounded-full border border-brand-gold/50 flex items-center justify-center text-brand-gold">
                                <Icon className="w-5 h-5" />
                            </span>
                            <div>
                                <p className="font-serif text-lg leading-tight">{f.title}</p>
                                <p className="text-sm text-white/60">{f.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
