import React from "react";
import { FaCheck } from "react-icons/fa6";
import { Button } from "./ui/button";
import { GiStarShuriken } from "react-icons/gi";
interface Props {
  type: "Basic" | "Pro" | "Enterprise";
  description: string;
  price: number;
  features: string[];
}
const PriceCard = ({ type, description, price, features }: Props) => {
  return (
    <div
      className={`flex flex-col items-center rounded-xl border bg-lighterGray p-10 pt-8  text-center dark:bg-darkerBlack dark:text-white`}
    >
      <div className="flex w-full justify-end">
        <p
          className={`flex w-fit items-center ${
            type !== "Pro" && "opacity-0"
          } gap-1 rounded-full border-2 border-[#236456] bg-[#112220] p-2 pt-1 text-[#33C6AB]`}
        >
          <GiStarShuriken />
          Popular
        </p>
      </div>
      <p
        className={`text-2xl ${type === "Pro" ? "text-[#729F19]" : ""} ${
          type === "Enterprise" && "dark:text-[#729F19]"
        } `}
      >
        {type}
      </p>
      <p className="mt-4">{description}</p>
      {/* price */}
      <div className="mt-8">
        <p className="text-2xl font-bold">
          ${price}
          <sub>/month</sub>
        </p>
      </div>
      {/* features */}

      <ul className="mt-10">
        {features.map((feature, index) => {
          return (
            <li
              key={feature + index}
              className="mt-1 flex items-center gap-2"
            >
              <FaCheck className="text-black dark:text-white" />
              {feature}
            </li>
          );
        })}
      </ul>
      <div className="mt-8 flex flex-grow flex-col justify-end">
        <Button
          size={"lg"}
          className={`w-[300px] rounded-full border border-b-0 border-black bg-white dark:bg-darkBlack dark:text-white   dark:hover:border-white dark:hover:bg-black dark:hover:text-white ${
            type === "Pro"
              ? "border-0 bg-darkestBlack text-white hover:border hover:border-black hover:text-black dark:bg-white dark:text-black"
              : ""
          } ${type === "Enterprise" ? "border-0 bg-mainGreen hover:border hover:border-black dark:bg-mainGreen" : ""} `}
        >
          {type === "Enterprise" ? "Contact Us" : "Get Started"}
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
