export async function fetchExepriences() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,
    {
      cache: "default",
    }
  );

  const data = await res.json();

  const experiences: Experience[] = data.experiences;

  return experiences;
}
