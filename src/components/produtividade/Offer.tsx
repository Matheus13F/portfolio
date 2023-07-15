import Image from "next/image";
import {
  FaBarcode,
  FaCcMastercard,
  FaCcVisa,
  FaGooglePay,
  FaPaypal,
} from "react-icons/fa";
import { FaPix } from "react-icons/fa6";

export default function Offer() {
  return (
    <div className="flex flex-col md:flex-row mx-auto w-full max-w-7xl px-10 justify-evenly py-5 md:py-20 gap-10 md:gap-5 bg-white my-20 rounded-md">
      <div className="flex flex-col space-y-5 gap-4 pr-6">
        <strong className="text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl max-w-2xl font-bold text-gray-700 leading-tight text-center">
          Use o máximo da Inteligência Artificial para aumentar sua
          produtividade
        </strong>
        <p className="inline-block p-0 m-0 text-center">
          de <span className="line-through">R$ 97,00</span> por apenas
        </p>
        <span className="inline-block max-w-4xl text-5xl md:text-6xl lg:text-7xl text-center font-bold text-yellow">
          R$ 27,00
        </span>
        <p className="inline-block p-0 m-0 text-center">ou em 3 x de R$ 9,53</p>
        <span className="flex gap-2 items-center justify-center">
          <FaCcMastercard size={35} />
          <FaCcVisa size={35} />
          <FaBarcode size={35} />
          <FaGooglePay size={35} />
          <FaPaypal size={35} />
          <FaPix size={35} />
        </span>
        <div className="w-full flex justify-center">
          <a
            href="https://pay.hotmart.com/G84637868O?checkoutMode=10"
            className="inline-block px-3 py-6 text-white  bg-yellow w-80 rounded-md hover:opacity-90 transition-colors ease-in text-center"
            target="_blank"
          >
            GARANTIR AGORA
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          className="w-[400px] h-[400px] 2xl:w-[500px] 2xl:h-[500px] object-contain flex-1 rounded-xl"
          src="/capa-oferecimento.png"
          width={1080}
          height={1080}
          alt="Matheus Goes"
        />
      </div>
    </div>
  );
}
