import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import { NextResponse } from 'next/server';

const query = groq`
 *[_type == "social"] | order(_createdAt desc)
`;

export async function GET() {
  const socials: Social[] = await client.fetch(query);

  return NextResponse.json({ socials });
}
