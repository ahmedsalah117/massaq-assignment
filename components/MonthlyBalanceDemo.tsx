import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
const MonthlyBalanceDemo = () => {
  return (
    <Card className=" rounded-xl border border-gray-300 bg-[#F4F4F4]  dark:border-[rgb(86,85,85)] dark:bg-[#161616]">
      <CardHeader>
        <CardTitle className="mb-2  text-2xl dark:text-[#FBFBFB]">$3453.00</CardTitle>
        <CardDescription className=" text-xl dark:text-[#9B9CA1]"></CardDescription>
      </CardHeader>
      <hr className="translate-x-10 border-black" />
      <CardContent className="space-y-2">
        <Skeleton className="h-3 w-[220px] rounded-full bg-[#BDBDBD]" />
        <Skeleton className="h-3 w-[220px] rounded-full bg-[#BDBDBD]" />
        <Skeleton className="h-3 w-[140px] rounded-full bg-[#BDBDBD]" />
      </CardContent>
    </Card>
  );
};

export default MonthlyBalanceDemo;
