import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Checkout request:", body);

  // 👉 现在先返回假数据（模拟 Stripe）
  return NextResponse.json({
    url: "/order-success",
  });
}