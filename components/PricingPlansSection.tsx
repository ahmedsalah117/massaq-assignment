import React from "react";
import { ImPriceTag } from "react-icons/im";
import { Button } from "./ui/button";
import PriceCard from "./PriceCard";
import { basicPricePlanFeatures, enterprisePricePlanFeatures, proPricePlanFeatures } from "@/constants/constants";
const PricingPlansSection = () => {
  return (
    <section className="dark:text-white">
      <div className="flex justify-center">
        <Button
          variant={"outline"}
          className="flex items-center gap-2 rounded-full bg-white text-black dark:bg-[#171F05] dark:text-mainGreen"
        >
          <ImPriceTag />
          Pricing
        </Button>
      </div>
      <h3 className="mt-4 text-center text-4xl font-bold">Find the right plan</h3>
      <p className="mt-3 text-center text-sm">
        &quot;Invest in your company&apos;s future with our comprehensive financial solution. Contact us for pricing
        details and see how we can <br /> help you streamline your finances and reach your business goals.&quot;
      </p>
      {/* Pricing Cards */}
      <div className="mt-10 flex justify-center gap-8">
        {/* basic price plan card */}
        <PriceCard
          type="Basic"
          description="Get a professional website designed according to your needs."
          features={basicPricePlanFeatures}
          price={499}
        />
        {/* Pro price plan card */}
        <PriceCard
          type="Pro"
          description="Get a professional website designed according to your needs."
          features={proPricePlanFeatures}
          price={499}
        />
        {/* enterprise price plan card */}
        <PriceCard
          type="Enterprise"
          description="Get a professional website designed according to your needs."
          features={enterprisePricePlanFeatures}
          price={999}
        />
      </div>
    </section>
  );
};

export default PricingPlansSection;
