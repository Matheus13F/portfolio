import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import { NextResponse } from 'next/server';

const query = groq`
 *[_type == "experience"] | order(_createdAt desc) {
  ...,
  technologies[]->
 }
`;

export async function GET() {
  const experiences: Experience[] = await client.fetch(query);

  return NextResponse.json({ experiences });
}
