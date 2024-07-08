import React from "react";

interface props {
  icon: React.ReactNode;
  isFacebook?: boolean;
}
const SocialLink = ({ icon, isFacebook }: props) => {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 dark:bg-[#605C5C] dark:text-white ${
        isFacebook && "!bg-[#2B59FF] dark:!bg-[#2B59FF]"
      }`}
    >
      {icon}
    </div>
  );
};

export default SocialLink;
