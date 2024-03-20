import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import { NextResponse } from 'next/server';

const query = groq`
 *[_type == "project"] | order(_createdAt desc) {
  ...,
  technologies[]->
 }
`;

export async function GET() {
  const projects: Project[] = await client.fetch(query);

  return NextResponse.json({ projects });
}
