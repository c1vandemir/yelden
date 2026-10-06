import React from 'react';
import PageHeader from '../components/PageHeader';
import ProductShowcase from '../components/ProductShowcase';
import ContactCta from '../components/ContactCta';
import { useLang } from '../i18n';

export default function CollectionsPage() {
    const { t } = useLang();

    return (
        <>
            <PageHeader eyebrow={t.collections.eyebrow} title={t.collections.title} />
            <ProductShowcase />
            <ContactCta />
        </>
    );
}
