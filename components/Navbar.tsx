"use client";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import React, { useContext } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AppContext } from "@/contextes/AppContext";
import { useRouter } from "next/navigation";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "//primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "//primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "//primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "//primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "//primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "//primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
];
const Navbar = () => {
  const { mode, handleSetMode } = useContext(AppContext);
  const router = useRouter();
  return (
    <nav className="sticky left-0 right-0 top-0 z-50 bg-white p-4 dark:bg-black dark:text-white">
      <div className="m-auto flex w-[85%]  items-center justify-between">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          <Link href={`/`}>FinBiz</Link>
        </h2>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                <NavigationMenuContent className="z-50 rounded-xl border-none !bg-white dark:!bg-black dark:text-white">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <Link
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Integrations</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/comments"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Comments</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/ui-page"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Tailwind page</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex gap-6">
          <Button
            onClick={() => {
              router.push("/login");
            }}
            variant={"outline"}
            className="dark:text-[#FBFBFB  rounded-full border-b-0 bg-[#F6F6F6] dark:bg-[#1F1F1F]"
          >
            Get Started
          </Button>
          <Popover>
            <PopoverTrigger>{mode === "light" ? <CiLight /> : <MdDarkMode />}</PopoverTrigger>
            <PopoverContent className="w-fit bg-white  p-2 dark:bg-black">
              <ul className="flex flex-col p-0">
                <li
                  className="w-full cursor-pointer rounded-xl border border-transparent px-6 py-2 hover:bg-slate-200 hover:text-black dark:text-white dark:hover:text-black"
                  onClick={() => {
                    handleSetMode("light");
                  }}
                >
                  Light
                </li>
                <li
                  className="w-full cursor-pointer rounded-xl border border-transparent px-6 py-2 hover:bg-slate-200 hover:text-black dark:text-white dark:hover:text-black"
                  onClick={() => {
                    handleSetMode("dark");
                  }}
                >
                  Dark
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
