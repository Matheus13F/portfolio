import { MailchimpForm } from "@/components/MailchimpForm";
import Image from "next/image";
import Link from "next/link";

export default function Newsletter() {
  return (
    <div className="flex flex-col max-w-4xl px-4 mx-auto w-full h-screen gap-4 justify-center space-y-4">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="profile"
          width={160}
          height={169}
          className="w-10 h-10 md:w-14 md:h-14 object-cover flex mx-auto"
        />
      </Link>
      <p className="text-center font-medium text-2xl md:text-4xl">
        Novas publicações sobre o universo da Tecnologia direto na sua inbox.
      </p>
      <span className="text-center text-gray-500 text-base md:text-lg">
        Não perca nenhum post sobre desenvolvimento web do blog{" "}
        <a
          href="www.codepeek.com.br"
          title="CodePeek"
          target="_blank"
          className="hover:text-yellow transition-colors duration-200"
        >
          Code Peek
        </a>
      </span>
      <MailchimpForm />
    </div>
  );
}
