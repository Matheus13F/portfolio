export async function fetchSocials() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`,
    {
      cache: "default",
    }
  );
  const data = await res.json();

  const socials: Social[] = data.socials;

  return socials;
}
