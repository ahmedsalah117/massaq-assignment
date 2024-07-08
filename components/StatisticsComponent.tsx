"use client";
import React, { useContext } from "react";
import StatisticsCard from "./StatisticsCard";
import TotalBalanceCard from "./TotalBalanceCard";
import StatisticsGraph from "./StatisticsGraph";
import StatisticsSkeleton from "./StatisticsSkeleton";
import { AppContext } from "@/contextes";

const StatisticsComponent = () => {
  const { mode } = useContext(AppContext);
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-[#F6F6F6] p-6 shadow-3xl dark:bg-[#161616]">
      <div className="flex items-center justify-between gap-3">
        <StatisticsCard
          title="Total Profit"
          amount={350.24}
          colorCode="+"
          percentage={18.23}
        />
        <StatisticsCard
          title="Total Revenue"
          amount={400.69}
          colorCode="-"
          percentage={28.35}
        />
        <StatisticsCard
          title="Product Sold"
          amount={200}
          colorCode="neutral"
          percentage={28.35}
        />
      </div>

      {/* Total Balance Card & the chart Graph section */}
      <div className="flex flex-grow  justify-between gap-5 ">
        <TotalBalanceCard />
        <div className="flex flex-grow flex-col rounded-xl border bg-white  px-4 py-2 dark:border-[#565555] dark:bg-[#1A1A1A]">
          <div className="my-4 flex items-center justify-between text-gray-300">
            <p>Spend Overview</p>
            <div className="flex justify-between gap-2 text-xs">
              <p>Daily</p>
              <p>Weekly</p>
              <p>Monthly</p>
              <p>Yearly</p>
            </div>
          </div>
          <div className="flex flex-grow justify-center dark:!text-white ">
            <StatisticsGraph mode={mode} />
          </div>
        </div>
        <div className="flex flex-grow flex-col justify-between">
          <StatisticsSkeleton title="Employee" />
          <StatisticsSkeleton title="Independent Contractor" />
          <StatisticsSkeleton title="Contracted Employee" />
          <StatisticsSkeleton title="Stakeholders" />
        </div>
      </div>
    </div>
  );
};

export default StatisticsComponent;
