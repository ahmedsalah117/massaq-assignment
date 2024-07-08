import { sign } from "@/lib/jwt";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { username, password } = await request.json();

  // Replace this with your actual authentication logic
  if (username === "user" && password === "password") {
    const token = await sign({ username });
    const serialized = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60, // 1 hour
      path: "/"
    });

    return new NextResponse(JSON.stringify({ message: "Login successful", token }), {
      status: 200,
      headers: { "Set-Cookie": serialized }
    });
  }

  return new NextResponse(JSON.stringify({ message: "Invalid credentials" }), {
    status: 401
  });
}
