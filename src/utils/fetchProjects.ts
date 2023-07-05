export async function fetchProjects() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  const projects: Project[] = data.projects;

  return projects;
}
