import React from "react";
import Avatar from "@/public/avatar1.jpg";
import Image from "next/image";
const AvatarGroup = () => {
  return (
    <div className="flex items-center space-x-[-10px]">
      <Image
        className="!-ml-[10px] h-12 w-12 rounded-full border-2 border-white"
        src={Avatar}
        alt="Avatar 1"
      />
      <Image
        className="h-12 w-12 rounded-full border-2 border-white"
        src={Avatar}
        alt="Avatar 2"
      />
      <Image
        className="h-12 w-12 rounded-full border-2 border-white"
        src={Avatar}
        alt="Avatar 3"
      />
      <Image
        className="h-12 w-12 rounded-full border-2 border-white"
        src={Avatar}
        alt="Avatar 4"
      />
    </div>
  );
};

export default AvatarGroup;
