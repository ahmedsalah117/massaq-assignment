import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Person from "@/public/person.png";
const UpdateYourExperienceSection = () => {
  return (
    <section className="flex items-center justify-between gap-6 rounded-xl bg-white p-10 dark:bg-darkerBlack">
      <div className="flex flex-col gap-7">
        <h3 className="text-5xl font-bold dark:text-white">
          Let’s Upgrade your <br /> finances experience <br /> by using FinBiz
        </h3>
        <div className="flex gap-3">
          <Button
            size={"lg"}
            variant={"outline"}
            className="rounded-full border-0 bg-mainGreen dark:hover:border dark:hover:text-white"
          >
            Request Demo
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            className="rounded-full bg-darkestBlack text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
          >
            Watch Video
          </Button>
        </div>
      </div>
      <div className="flex flex-grow justify-end overflow-hidden ">
        <Image
          src={Person}
          alt="Person looking at some drawings"
          className="w-[500px] rounded-xl object-cover"
        />
      </div>
    </section>
  );
};

export default UpdateYourExperienceSection;
