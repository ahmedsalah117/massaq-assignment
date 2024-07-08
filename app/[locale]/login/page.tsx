import { useEffect, useState } from "react";
import Link from "next/link";
import { setCookie } from "cookies-next";

import { InferGetServerSidePropsType, NextPage } from "next";
import { toast } from "react-toastify";

import { useTranslations } from "next-intl";
import { type } from "os";
import { getDictionary } from "../dictionaries";
import LoginForm from "@/components/LoginForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "The login page of FinBiz"
};
const Login = async ({ params: { locale } }: { params: { locale: string } }) => {
  const dict = await getDictionary(locale);

  return (
    <LoginForm
      dict={dict}
      locale={locale}
    />
  );
};

export default Login;
