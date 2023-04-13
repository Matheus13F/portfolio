import Image from "next/image";
import urlFor from "../../../lib/urlFor";

type Props = {
  testimonial: Testimonial[];
};

export function Testimonials({ testimonial }: Props) {
  return (
    <div className="flex relative flex-col text-left max-w-7xl px-5 justify-evenly mx-auto items-center h-fit py-10 space-y-10">
      <h3 className=" text-gray-800 font-bold text-2xl">Testimonials</h3>

      <h3 className="text-gray-800 text-lg text-center">
        People I&#39;ve worked with have said some nice things...
      </h3>

      {testimonial.map((review) => (
        <div
          key={review._id}
          className="flex flex-col space-y-14 items-center justify-center pb-36 pt-10"
        >
          <Image
            src={urlFor(review.image).url()}
            alt="profile"
            width={160}
            height={160}
            className="rounded-full w-24 h-24 object-cover"
          />

          <p className="max-w-2xl text-xl text-center">{review.description}</p>

          <div className="flex flex-col space-y-3 text-center">
            <a href={review.linkToPage} className="font-bold text-lg">
              {review.name}
            </a>
            <span className="text-gray-700">{review.role}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
