import React from "react";

export const metadata = { title: "Comments", description: "The Comments page of FinBiz" };

const CommentsLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default CommentsLayout;
