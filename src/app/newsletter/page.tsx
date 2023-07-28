import { MailchimpForm } from "@/components/MailchimpForm";
import Image from "next/image";

export default function Newsletter() {
  return (
    <div className="flex flex-col max-w-4xl px-4 mx-auto w-full h-screen gap-2 justify-center space-y-4">
      <Image
        src="/logo.png"
        alt="profile"
        width={160}
        height={169}
        className="w-10 h-10 md:w-14 md:h-14 object-cover flex mx-auto"
      />
      <p className="text-center font-bold text-3xl md:text-4xl">
        Novas publicações sobre o universo JavaScript direto na sua inbox.
      </p>
      <span className="text-center text-gray-500 text-base md:text-lg">
        Não perca nenhum post sobre o universo do desenvolvimento frontend.
      </span>
      <MailchimpForm />
    </div>
  );
}
