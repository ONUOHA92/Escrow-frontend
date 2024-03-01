import React from "react";
import Hero from "@/components/ui/organisms/homepage/hero";
import SupportLogo from "@/components/ui/organisms/homepage/logo";
import Feature from "@/components/ui/organisms/homepage/feature";
import FrequncyQuestion from "@/components/ui/organisms/homepage/faq";
import Testimonials from "@/components/ui/organisms/homepage/Testimonials";
import ListOfServices from "@/components/ui/organisms/homepage/listServices";

const HomePageTemplate = () => {
  return (
    <main>
      <Hero />
      <Feature />
      <FrequncyQuestion />
      <Testimonials />
    </main>
  );
};

export default HomePageTemplate;
