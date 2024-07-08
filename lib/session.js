import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const sessionOptions = {
  password: "Welcome@2024@ahmedSalahMohamedBahnasy",
  cookieName: "test-session-cookie",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production"
  }
};

export function withSessionRoute(handler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}

export function withSessionSsr(handler) {
  return withIronSessionSsr(handler, sessionOptions);
}
