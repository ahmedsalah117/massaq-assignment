import React from "react";
import { Button } from "./ui/button";

const TotalBalanceCard = () => {
  return (
    <div className="flex grow flex-col gap-4 rounded-xl border border-[#E0E0E0] bg-white p-4 dark:border-[rgb(86,85,85)] dark:bg-[#1A1A1A]">
      <div className="flex flex-col gap-2 dark:text-white">
        <p className="text-right text-sm">Total Balance</p>
        <p className="text-3xl font-bold">$350.0</p>
        <p className="w-full">
          <Button className="w-full rounded-xl bg-black text-white hover:border hover:border-black hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white">
            Transfer
          </Button>
        </p>
      </div>
      <hr className="dark:border-[#565555]" />
      <div className="flex flex-col gap-2 dark:text-white">
        <p className="text-right text-sm capitalize">Total Income</p>
        <p className="text-3xl font-bold">$320.0</p>
      </div>
      <hr className="dark:border-[#565555]" />
      <div className="flex flex-col gap-2 dark:text-white">
        <p className="text-right text-sm capitalize">Total Expense</p>
        <p className="text-3xl font-bold">$220.0</p>
      </div>
    </div>
  );
};

export default TotalBalanceCard;
