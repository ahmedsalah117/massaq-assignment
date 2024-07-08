import { AppContext, AppProvider } from "@/contextes/AppContext";
import React, { useContext, useLayoutEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import LoginComponent from "./LoginComponent";
import { useRouter } from "next/navigation";

const MainLayout = ({ children, locale }: { children: React.ReactNode; locale: string }) => {
  return (
    <AppProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={"colored"}
      />

      <div className="relative">
        <Navbar />
        <p className="h-[15px] border-b border-[#E0E0E0] dark:border-black dark:bg-black" />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>

      <ToastContainer />
    </AppProvider>
  );
};

export default MainLayout;
