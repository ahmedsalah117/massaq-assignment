// app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import { AuthProvider } from "@/contextes";
import { AppProvider } from "@/contextes/AppContext";
import { storeWrapper } from "@/store";
import { ReactNode } from "react";

export function Providers({ children, session, store }: { children: ReactNode; session: any; store: any }) {
  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>
        <AuthProvider>
          <AppProvider>{children}</AppProvider>
        </AuthProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
