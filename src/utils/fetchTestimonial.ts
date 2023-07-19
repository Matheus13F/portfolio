export async function fetchTestimonial() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTestimonial`,
    {
      cache: "default",
    }
  );

  const data = await res.json();

  const testimonial: Testimonial[] = data.testimonial;

  return testimonial;
}
