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
