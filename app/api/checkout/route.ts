import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Checkout request:", body);

  return NextResponse.json({
    url: "/order-success",
  });
}