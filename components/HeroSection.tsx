import { FaArrowRight } from "react-icons/fa";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import AvatarGroup from "./AvatarGroup";
import StatisticsComponent from "./StatisticsComponent";

const HeroSection = () => {
  return (
    <section className=" relative h-[100vh] pt-24">
      <div className="flex items-center justify-center">
        <div className="flex w-fit cursor-pointer items-center gap-3 rounded-full border border-b-0  border-black bg-white p-1 dark:border-2 dark:border-b-0 dark:border-[#364C09] dark:bg-[#171F05]">
          <Button
            variant={"outline"}
            className="border-b-none rounded-full border-transparent bg-[#A3DC2F] text-white dark:hover:border-white dark:hover:text-white"
          >
            New
          </Button>
          <span className="font-bold text-black dark:text-[#A3DC2F]">Introducing AI Automation</span>
          <FaArrowRight className="text-[#A3DC2F]" />
        </div>
      </div>
      {/* The finance solutions for your business */}
      <h1 className="mt-6 text-center text-[50px] font-bold capitalize text-black dark:text-white">
        The Finance Solutions
        <br /> for your business
      </h1>
      {/* sub heading */}
      <p className="mt-3 text-center text-[#828282]">
        Empower your finance team. The onestop plateform for all financial management of <br /> small and medium-sized
        business.
      </p>
      {/* News letter input */}
      <div className="relative m-auto mt-8 w-[30%] rounded-full border-0 bg-white dark:bg-[#242424]">
        <Input
          className="border-0 focus:rounded-full focus:border dark:placeholder:text-[#7C7C7C] dark:focus:border-yellow-100"
          placeholder="Enter your email address"
          type="email"
        />
        <Button
          variant={"outline"}
          className="absolute left-0 top-0 rounded-full bg-black text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
        >
          Book a demo
        </Button>
      </div>
      {/* The reviews avatar group component */}
      <div className="m-auto mt-8 w-fit">
        <AvatarGroup />
        <p className="mt-3 text-center text-xs text-[#9B9CA1]">1,200+ reviews (4.9 of 5)</p>
      </div>
      {/* The statistics component */}
      <div className="absolute bottom-[-430px] left-[50%] w-full translate-x-[50%]">
        <StatisticsComponent />
      </div>
    </section>
  );
};

export default HeroSection;
