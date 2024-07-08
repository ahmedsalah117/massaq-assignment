import React from "react";
import AvatarGroup from "./AvatarGroup";

const EasyCollaborationGraph = () => {
  return (
    <main className=" darK:to-[#171717] flex h-[250px] w-[250px] flex-col items-center justify-center rounded-full border bg-gradient-to-b from-[#f7faf5] to-[#e5e7eb] dark:border-[rgb(86,85,85)] dark:bg-[#171717] dark:bg-gradient-to-b dark:from-[#171717]">
      <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full border bg-[#E5EADB] dark:border-[rgb(86,85,85)] dark:bg-[#1A1A1A]">
        <AvatarGroup />
      </div>
    </main>
  );
};

export default EasyCollaborationGraph;
