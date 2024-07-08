"use client";
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SimpleAnalyticsGraph from "./SimpleAnalyticsGraph";
import BoostingBusinesssGraph from "./BoostingBusinesssGraph";
import EasyCollaborationGraph from "./EasyCollaborationGraph";

const InfoCardsSection = () => {
  return (
    <section className="flex justify-between gap-3">
      {/* Simple Analytics */}
      <Card className="flex w-[24%] flex-col justify-between rounded-xl border border-gray-300 bg-white pt-16 dark:border-[rgb(86,85,85)] dark:bg-[#161616]">
        <CardHeader>
          <CardTitle className="mb-2 text-center dark:text-[#FBFBFB]">Simple analytics</CardTitle>
          <CardDescription className="text-center dark:text-[#9B9CA1]">
            Make informed decisions backed by data through our analytics tools.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SimpleAnalyticsGraph />
        </CardContent>
      </Card>
      {/* Boosting Business. 
Today and Tomorrow. */}
      <Card className="flex w-[50%] flex-col justify-between rounded-xl border border-gray-300 bg-white pt-16 dark:border-[rgb(86,85,85)] dark:bg-[#161616]">
        <CardHeader>
          <CardTitle className="mb-2 text-center dark:text-[#FBFBFB]">Boosting Business. Today and Tomorrow.</CardTitle>
          <CardDescription className="text-center dark:text-[#9B9CA1]">
            Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of
            mind for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <BoostingBusinesssGraph />
        </CardContent>
      </Card>
      {/* Easy collaboration   */}
      <Card className="flex w-[24%] flex-col justify-between rounded-xl  border border-gray-300 bg-white pt-16 dark:border-[rgb(86,85,85)] dark:bg-[#161616]">
        <CardHeader>
          <CardTitle className="mb-2 text-center dark:text-[#FBFBFB]">Easy collaboration </CardTitle>
          <CardDescription className="text-center dark:text-[#9B9CA1]">
            Seamlessly collaborate with your team members like never before.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <EasyCollaborationGraph />
        </CardContent>
      </Card>
    </section>
  );
};

export default InfoCardsSection;
