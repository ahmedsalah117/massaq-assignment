import React from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { MdOutlineSort } from "react-icons/md";
const MonthlyInvoiceDemo = () => {
  return (
    <Card className="rounded-xl border border-gray-300 bg-[#F4F4F4]  dark:border-[rgb(86,85,85)] dark:bg-[#161616]">
      <CardHeader>
        <CardTitle className="mb-2  text-2xl dark:text-[#FBFBFB]">MonthlyInvoice</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {/* pdf card */}
        <div className="flex justify-between gap-3 dark:text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FBADE0]">
            <p className="flex h-6 w-6 items-center justify-center rounded-full border border-black">
              <MdOutlineSort color="black" />
            </p>
          </div>
          <div>
            <p className="text-xs">John Client_download.Pdf</p>
            <Skeleton className="mt-2 h-3 w-[140px] rounded-full bg-[#BDBDBD]" />
          </div>
          <p>
            <PiDotsThreeVerticalBold />
          </p>
        </div>
        {/* pdf card */}
        <div className="flex justify-between gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6893FF]">
            <p className="flex h-6 w-6 items-center justify-center rounded-full border border-black">
              <MdOutlineSort color="black" />
            </p>
          </div>
          <div>
            <p className="text-xs">John Client_download.Pdf</p>
            <Skeleton className="mt-2 h-3 w-[140px] rounded-full bg-[#BDBDBD]" />
          </div>
          <p>
            <PiDotsThreeVerticalBold />
          </p>
        </div>
        {/* pdf card */}
        <div className="flex justify-between gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFFF9D]">
            <p className="flex h-6 w-6 items-center justify-center rounded-full border border-black">
              <MdOutlineSort color="black" />
            </p>
          </div>
          <div>
            <p className="text-xs">John Client_download.Pdf</p>
            <Skeleton className="mt-2 h-3 w-[140px] rounded-full bg-[#BDBDBD]" />
          </div>
          <p>
            <PiDotsThreeVerticalBold />
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonthlyInvoiceDemo;
