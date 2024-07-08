import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
const OptimizeExpenseCard = () => {
  return (
    <Card className="flex flex-col justify-between rounded-xl border border-gray-300 bg-white p-4 dark:border-[rgb(86,85,85)] dark:bg-[#161616]">
      <CardHeader className="flex flex-col gap-12">
        <CardTitle className="text-4xl dark:text-[#FBFBFB]">
          Optimize expense
          <br /> Management as a team
        </CardTitle>
        <CardDescription className="text-xl dark:text-[#9B9CA1]">
          Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of
          mind for you.
        </CardDescription>
      </CardHeader>
      <CardContent className="justify-self-start">
        <Button
          size={"lg"}
          variant={"outline"}
          className="rounded-full bg-black text-white"
        >
          Explore more
        </Button>
      </CardContent>
    </Card>
  );
};

export default OptimizeExpenseCard;
