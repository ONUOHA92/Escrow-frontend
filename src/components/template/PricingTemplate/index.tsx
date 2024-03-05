import React from "react";
import Banner from "@/components/ui/organisms/pricing/Banner/inndex";
import GetStarted from "@/components/ui/organisms/pricing/getStarted";
import KnowMore from "@/components/ui/organisms/pricing/safeGraud";
import FrequncyQuestion from "@/components/ui/organisms/homepage/faq";

const PricingTemplate = () => {
  return (
    <main>
      <Banner />
      <KnowMore />
      <GetStarted />
      <FrequncyQuestion />
    </main>
  );
};

export default PricingTemplate;
