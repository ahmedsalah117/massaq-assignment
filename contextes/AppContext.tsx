"use client";
import Cookies from "js-cookie";
import React, { ReactNode, createContext, useEffect, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface AppContextType {
  accessToken: string | null;
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>;
  mode: "light" | "dark";
  handleSetMode: (mode: "light" | "dark") => void;
}

const AppContext = createContext<AppContextType>({
  accessToken: "",
  setAccessToken: () => {},
  mode: "light",
  handleSetMode: () => {}
});

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [mode, setMode] = useState<"light" | "dark">("light");

  const valueObj: AppContextType = {
    accessToken,
    setAccessToken,
    mode,
    handleSetMode
  };

  function handleSetMode(mode: "light" | "dark") {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMode(mode);
    localStorage.setItem("mode", mode);
  }

  useEffect(() => {
    const appMode = localStorage.getItem("mode");
    const myCookie = Cookies.get("token");
    if (myCookie) {
      setAccessToken(myCookie);
    }
    if (appMode) {
      handleSetMode(appMode as "light" | "dark");
    }
  }, []);

  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
