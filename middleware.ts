import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { defaultLocale } from "./constants/locales";
import { i18n } from "./i18n-config";
import { cookies } from "next/headers";

let headers = { "accept-language": "en-US,en;q=0.9,ar-EG;q=0.8,ar;q=0.7" };
let languages = new Negotiator({ headers }).languages();
let locales = ["en-US", "ar-EG", "ar"];

match(languages, locales, defaultLocale); // -> 'en-US'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the current path is the login page
  const isLoginPage = pathname.endsWith("/login");

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Determine the locale
  let locale;
  if (pathnameHasLocale) {
    locale = pathname.split("/")[1];
  } else {
    locale = match(languages, i18n.locales, defaultLocale);
  }

  // Check for authentication
  const accessToken = request.cookies.get("token")?.value;

  // If not authenticated and not already on the login page, redirect to login
  if (!accessToken && !isLoginPage) {
    const loginUrl = new URL(`/${locale}/login`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  // If authenticated or already on login page, and no locale in path, add locale
  if (!pathnameHasLocale) {
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // If authenticated or on login page, and locale is present, continue as normal
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)"
    // Optional: only run on root (/) URL
    // '/'
  ]
};
