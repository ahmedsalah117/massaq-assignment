"use client";
import { useContext, useState } from "react";
import { AppContext, AuthContext } from "@/contextes";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function logoutHandler() {
    try {
      setIsLoading(true);
      const response = await axios(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: {}
      });

      if (response.status === 200 && response.data?.message === "Logout successful") {
        router.push("/login");
      }
    } catch (error) {
      toast("Something went wrong. Please try again later!", {
        type: "error"
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <main>
      <div className=" flex h-screen items-center justify-center">
        <Button
          size={"lg"}
          disabled={isLoading}
          variant={"outline"}
          onClick={() => {
            logoutHandler();
          }}
          className="group relative rounded-full bg-black p-2 text-white"
        >
          {isLoading ? "Logging out..." : "logout"}
        </Button>
      </div>
    </main>
  );
}
