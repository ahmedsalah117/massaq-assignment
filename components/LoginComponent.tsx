import React from "react";
import LoginForm from "./LoginForm";
import { getDictionary } from "@/app/[locale]/dictionaries";

const LoginComponent = ({ locale, dict }: { locale: string; dict: any }) => {
  return (
    <div>
      <LoginForm
        dict={dict}
        locale={locale}
      />
    </div>
  );
};

export default LoginComponent;
