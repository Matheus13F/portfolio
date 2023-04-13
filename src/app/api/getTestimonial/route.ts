import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import { NextResponse } from "next/server";

const query = groq`
 *[_type == "testimonial"]
`;

export async function GET() {
  const testimonial: Testimonial[] = await client.fetch(query);

  return NextResponse.json({ testimonial });
}
