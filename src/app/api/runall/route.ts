import { NextResponse } from "next/server";

const RENDER_APIS = [
  "https://mock-1-vb4m.onrender.com/start-xray-loop",
  "https://mock-4-fbyo.onrender.com/start-xray-loop",
  "https://mock-3-ai21.onrender.com/start-xray-loop",
  "https://mock-9j9y.onrender.com/start-xray-loop",
  "https://mock-5-2gq2.onrender.com/start-xray-loop",
  "https://mock-6-2t29.onrender.com/start-xray-loop",
];

export async function GET() {
  const results = await Promise.all(
    RENDER_APIS.map(async (url) => {
      try {
        const res = await fetch(url);
        return { url, status: res.status };
      } catch (err: unknown) {
        if (err instanceof Error) {
          return { url, error: err.message };
        }
        return { url, error: "Unknown error" };
      }
    })
  );

  return NextResponse.json({ message: "Triggered all Render servers", results });
}
