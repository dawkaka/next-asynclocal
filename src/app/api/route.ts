import { APItoolkitAppRouterWrapper } from "apitoolkit-next";
import { NextRequest, NextResponse } from "next/server";
// import { APItoolkitAppRouterWrapper } from "apitoolkit-next";
async function handleRequest(req: NextRequest) {
  console.log(req.method);
  return NextResponse.json({ message: "hello world" });
}

export const GET = APItoolkitAppRouterWrapper(handleRequest);
