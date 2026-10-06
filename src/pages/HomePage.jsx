import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import References from '../components/References';
import ProductShowcase from '../components/ProductShowcase';
import About from '../components/About';
import ContactCta from '../components/ContactCta';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Features />
            <References />
            <ProductShowcase preview />
            <About showMore />
            <ContactCta />
        </>
    );
}
