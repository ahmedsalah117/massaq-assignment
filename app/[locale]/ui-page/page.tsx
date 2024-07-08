import HeroSection from "@/components/HeroSection";
import InfoCardsSection from "@/components/InfoCardsSection";
import MenuBar from "@/components/MenuBar";
import MonthlyInvoiceCard from "@/components/MonthlyInvoiceCard";
import OptimizeExpenseCard from "@/components/OptimizeExpenseCard";
import PricingPlansSection from "@/components/PricingPlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UpdateYourExperienceSection from "@/components/UpdateYourExperienceSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FinBiz",
  description: "FinBiz is a data analysis software is a type of software tool used for data analysis and reporting."
};
const page = () => {
  return (
    <div className="bg-[#F6F6F6] dark:bg-[#1D1C20]">
      <div className="m-auto  w-[85%]">
        <HeroSection />
      </div>
      <section className="flex justify-center bg-[#F2F2F2] pt-[480px] dark:bg-[#0F0F0F]">
        <div className="">
          <MenuBar />
        </div>
      </section>
      {/* The make informed decisions section... */}
      <section className="  bg-[#F2F2F2] py-12 dark:bg-[#0F0F0F]">
        <div className="m-auto w-[85%]">
          <InfoCardsSection />
          <div className="mt-6 flex justify-between gap-4">
            <MonthlyInvoiceCard />
            <OptimizeExpenseCard />
          </div>
        </div>
      </section>
      {/* The Testimonials section */}
      <section className="bg-[#F2F2F2] py-12 pb-20 dark:bg-[#0F0F0F]">
        <div className="m-auto  w-[85%]">
          <TestimonialsSection />
        </div>
      </section>
      {/* The pricing section */}
      <section className="bg-[#F6F6F6] py-12 dark:bg-[#1D1C20]">
        <div className="m-auto w-[85%]">
          <PricingPlansSection />
        </div>
      </section>
      {/* The upgrade your experience section */}
      <section className="bg-[#F6F6F6] py-12 dark:bg-[#1D1C20]">
        <div className="m-auto w-[85%]">
          <UpdateYourExperienceSection />
        </div>
      </section>
    </div>
  );
};

export default page;
