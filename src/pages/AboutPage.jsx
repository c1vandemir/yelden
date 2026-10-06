import React from 'react';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import Features from '../components/Features';
import References from '../components/References';
import ContactCta from '../components/ContactCta';
import { useLang } from '../i18n';

export default function AboutPage() {
    const { t } = useLang();

    return (
        <>
            <PageHeader eyebrow={t.about.eyebrow} title={t.aboutPage.title} subtitle={t.aboutPage.subtitle} />
            <About bg="bg-white" />
            <Features />
            <References />
            <ContactCta />
        </>
    );
}
