import React from 'react';
import Hero from '@/components/ui/organisms/homepage/hero';
import SupportLogo from '@/components/ui/organisms/homepage/logo';
import Feature from '@/components/ui/organisms/homepage/feature';
import FrequncyQuestion from '@/components/ui/organisms/homepage/faq';


const HomePageTemplate = () => {
    return (
        <main>
            <Hero />
            <SupportLogo />
            <Feature />
            <FrequncyQuestion />

        </main>
    );
};

export default HomePageTemplate;