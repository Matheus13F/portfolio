export async function fetchBackground() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getBackground`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  const background: Background[] = data.background;

  return background;
}
