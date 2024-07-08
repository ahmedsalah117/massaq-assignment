import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const StatisticsSkeleton = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col space-y-3 dark:text-white">
      <p className="mb-1"> {title}</p>
      <div className="space-y-2">
        <Skeleton className="h-3 w-[150px] rounded-full bg-[#828282]" />
        <Skeleton className="h-3 w-[200px] rounded-full bg-[#BDBDBD]" />
      </div>
    </div>
  );
};

export default StatisticsSkeleton;
