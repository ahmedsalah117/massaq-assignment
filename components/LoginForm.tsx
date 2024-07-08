"use client";
import React, { useContext } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { type } from "os";
import { errors } from "jose";
import { AppContext } from "@/contextes/AppContext";
import { toast } from "react-toastify";
import { revalidatePath } from "next/cache";
import axios from "axios";

interface props {
  dict: any;
  locale: string;
}
const LoginForm = ({ dict, locale }: props) => {
  const { setAccessToken } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<"username" | "password" | "global", string>>({
    username: "",
    password: "",
    global: ""
  });

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    if (!username) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      return;
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      return;
    }
    try {
      const response = await axios(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${locale}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { username, password }
      });

      if (response.status === 200) {
        const { token } = response.data;
        if (token) {
          setAccessToken(token);
          router.push("/");
        }
      } else {
        const { message, status } = response.data;
        if (response.status === 401 && message === "Invalid credentials") {
          toast("Invalid credentials", {
            type: "error"
          });
        }
      }
    } catch (error) {
      toast("Something went wrong. Please try again later!", {
        type: "error"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
        <Link
          className="text-lg font-bold"
          href="/"
        >
          {dict?.home}
        </Link>
        <div className="mb-2">
          <label className="block text-sm font-semibold leading-7">{dict.select_language}</label>
          <select
            value={locale}
            onChange={(e) => {
              router.push(`/${e.target.value}/login`);
              const locale = e.target.value;

              setCookie("lang", locale, {
                path: "/",
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production"
              });
            }}
            className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
          >
            <option value="ar">{dict.arabic}</option>
            <option value="en">{dict.english}</option>
          </select>
        </div>
        <h1 className="font-semibold tracking-normal">{dict.login_title}</h1>
        <p className="text-xs/4 font-light text-slate-500">{dict.login_description}</p>
        <div className="pt-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-2"
          >
            <div>
              <label className="block text-xs font-medium leading-7">{dict.username}</label>
              <input
                placeholder={dict.username as string}
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.username && <p className="text-sm font-bold italic text-red-500">{errors.username}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium leading-7">{dict.password}</label>
              <input
                placeholder={dict.password as string}
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.password && <p className="text-sm font-bold italic text-red-500">{errors.password}</p>}
            </div>
            {errors.global && <p className="text-sm font-bold italic text-red-500">{errors.global}</p>}
            <div className="flex justify-end text-xs focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1">
              <button
                disabled={isLoading}
                type="submit"
                className="mt-1 rounded-full bg-blue-600 px-2.5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1"
              >
                {isLoading ? "loading..." : dict.login}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
