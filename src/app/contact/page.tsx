"use client";

import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mattew.marketing@gmail.com?subject=${formData.subject}&body=Hi, my name 
    is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg sm:text-xl">
        Contact me
      </h3>

      <div className="flex flex-col px-5 mt-16 gap-5">
        <div className="mb-10" />
        <h4 className="text-base sm:text-2xl md:text-4xl text-center max-w-2xl">
          Thanks for taking the time to reach out.
          <span className="underline decoration-yellow/50">
            {" "}
            How can I help you today?.
          </span>
        </h4>

        <div className="space-y-0 md:space-y-10 flex flex-col">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-yellow h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-2xl">Sao Paulo / Brasil</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-yellow h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-2xl">mattew-marketing@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto max-w-4xl w-full px-5 mt-5"
        >
          <input
            {...register("name")}
            className="contactInput"
            placeholder="Name"
            required
            type="text"
          />
          <input
            {...register("email")}
            className="contactInput"
            placeholder="Email"
            required
            type="email"
          />

          <input
            {...register("subject")}
            className="contactInput"
            placeholder="Subject"
            required
            type="text"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="bg-yellow py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
