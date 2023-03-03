import type { NextApiRequest, NextApiResponse } from "next";
import { NEXT_PUBLIC_CHANGELOG_URL } from "@/constants/constants";
const md2json = require("md-2-json");

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method === "POST") {
    res.status(503).json({ message: "Method not allowed" });
    return;
  }
  try {
    const response = await fetch(NEXT_PUBLIC_CHANGELOG_URL as string);
    const text = await response.text();
    const parsedContent = md2json.parse(text);

    res.status(200).json({
      markdown: text,
      json: parsedContent,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      message: "Error",
      error: e,
    });
    return;
  }
}
