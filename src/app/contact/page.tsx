"use client";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../components/Header";

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
        <h4 className="text-base sm:text-2xl md:text-4xl font-semibold text-center">
          I&#39;ve got just what you need.{" "}
          <span className="underline decoration-[#EBA417]/50">Lets talk.</span>
        </h4>

        <div className="space-y-0 md:space-y-10 flex flex-col">
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#EBA417] h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-2xl">asdasd</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#EBA417] h-7 w-7 animate-pulse" />
            <p className="text-base sm:text-2xl">asdasd</p>
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
            className="bg-[#EBA417] py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
