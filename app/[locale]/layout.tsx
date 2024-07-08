import MainLayout from "@/components/MainLayout";
import "@/styles/globals.scss";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export const metadata: Metadata = {
  title: "Home",
  description: "FinBiz is a data analysis software is a type of software tool used for data analysis and reporting."
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body dir={locale === "en" ? "ltr" : "rtl"}>
        <MainLayout locale={locale}>{children}</MainLayout>
      </body>
    </html>
  );
}
