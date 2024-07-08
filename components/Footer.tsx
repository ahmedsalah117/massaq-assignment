import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import SocialLink from "./SocialLink";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Footer = () => {
  return (
    <footer className=" bg-lightGray pb-6 pt-12 dark:bg-darkerBlack">
      <div className="m-auto w-[85%] ">
        {/*  the upper part of the footer. */}
        <div className="flex justify-between gap-9 border-b pb-4">
          {/* the logo part */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-darkestBlack dark:text-white">FinBiz</h3>
            <p className="dark:text-[#B9B3B3]">
              Data analysis software is a type of software tool used <br /> for data analysis and reporting.
            </p>
            {/* social links */}
            <div className="mt-4 flex gap-4">
              <SocialLink icon={<FaTwitter className={`text-black dark:text-white`} />} />
              <SocialLink
                isFacebook={true}
                icon={<FaFacebookF className={`text-white dark:text-white`} />}
              />
              <SocialLink icon={<FaInstagram className={`text-black dark:text-white`} />} />
              <SocialLink icon={<FaGithub className={`text-black dark:text-white`} />} />
            </div>
          </div>
          {/* the company part */}
          <div>
            <h3 className="text-3xl font-bold text-darkestBlack dark:text-white">Company</h3>
            <ul className="mt-4 flex flex-col gap-3 dark:text-[#B9B3B3]">
              <li>Service</li>
              <li>Resources</li>
              <li>About us</li>
            </ul>
          </div>
          {/* The Help part */}
          <div>
            <h3 className="text-3xl font-bold text-darkestBlack dark:text-white">Help</h3>
            <ul className="mt-4 flex flex-col gap-3 dark:text-[#B9B3B3]">
              <li>Customer Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* The news letter part... */}
          <div>
            <h3 className="text-3xl font-bold text-darkestBlack dark:text-white">Subscribe to Newsletter</h3>
            <div className="relative mt-4 rounded-xl border-0 bg-white">
              <Input
                placeholder="Enter email address"
                type="email"
                className="border-0"
              />
              <Button
                variant={"outline"}
                className="absolute bottom-0 left-0 rounded-l-xl bg-mainGreen text-white"
              >
                Join
              </Button>
            </div>
          </div>
        </div>
        {/* bottom part of the footer */}
        <div className="mt-4">
          <p className="text-center dark:text-[#B9B3B3]">© Copyright 2024, All Rights Reserved by FinBiz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
