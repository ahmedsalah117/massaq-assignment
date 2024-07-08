import { IoStatsChartSharp } from "react-icons/io5";
import React from "react";

interface props {
  title: string;
  percentage: number;
  colorCode: "+" | "-" | "neutral";
  amount: number;
}
const StatisticsCard = ({ title, percentage, colorCode, amount }: props) => {
  return (
    <div className="flex min-w-fit grow flex-col gap-4 rounded-xl border border-[#E0E0E0] bg-white px-6 py-3 dark:border-[#565555] dark:bg-[#1A1A1A]">
      <div className="flex items-center justify-between gap-5">
        <p className="text-xl text-black dark:text-white">{title}</p>
        <p
          className={`${
            colorCode === "neutral" ? "text-[#003FDB]" : colorCode === "+" ? "text-[#72A700]" : "text-red-500"
          } font-bold `}
        >
          {colorCode !== "neutral" && colorCode}
          {percentage}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold dark:text-white">${amount.toFixed(3)}</p>
        {/* Icon */}
        <IoStatsChartSharp
          className={`${
            colorCode === "neutral" ? "text-[#003FDB]" : colorCode === "+" ? "text-[#72A700]" : "text-red-500"
          }`}
          size={24}
        />
      </div>
    </div>
  );
};

export default StatisticsCard;
