import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import MonthlyInvoiceDemo from "./MonthlyInvoiceDemo";
import MonthlyBalanceDemo from "./MonthlyBalanceDemo";

const MonthlyInvoiceCard = () => {
  return (
    <Card className="flex  flex-col justify-between rounded-xl border border-gray-300 bg-white p-4 pb-0 dark:border-[rgb(86,85,85)] dark:bg-[#161616]">
      <CardHeader>
        <CardTitle className="mb-2  dark:text-[#FBFBFB]">Real-time accounting at your fingertips.</CardTitle>
        <CardDescription className=" dark:text-[#9B9CA1]">
          Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. There`s
          now a new way of accounting.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between gap-6">
        <MonthlyBalanceDemo />
        <MonthlyInvoiceDemo />
      </CardContent>
    </Card>
  );
};

export default MonthlyInvoiceCard;
