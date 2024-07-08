import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const MenuBar = () => {
  return (
    <div className="">
      {/* The menubar items */}
      <div className=" rounded-full border p-3">
        <ul className="flex items-center justify-between gap-4 dark:text-white">
          <li>
            <Link href={"/ui-page"}>Login</Link>
          </li>
          <li>
            <Link href={"/ui-page"}>Integration</Link>
          </li>
          <li>
            <Link href={"/ui-page"}>Demo</Link>
          </li>
          <li>
            <Link href={"/ui-page"}>Pricing</Link>
          </li>
          <li>
            <Link href={"/ui-page"}>
              <Button
                variant={"outline"}
                className="rounded-full bg-white text-black"
              >
                Login
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
