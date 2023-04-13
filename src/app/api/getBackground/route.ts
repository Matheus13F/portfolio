import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import { NextResponse } from "next/server";

const query = groq`
 *[_type == "background"]
`;

export async function GET() {
  const background: Background[] = await client.fetch(query);

  return NextResponse.json({ background });
}
