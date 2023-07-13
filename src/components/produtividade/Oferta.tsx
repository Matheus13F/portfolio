import Image from "next/image";

function Oferta() {
  return (
    <div className="flex flex-col md:flex-row mx-auto w-full max-w-7xl px-10 justify-evenly py-5 md:py-20 gap-10 md:gap-5 bg-white my-20 rounded-md">
      <div className="flex flex-col space-y-5 gap-4 pr-6">
        <strong className="text-3xl md:text-5xl max-w-2xl font-bold text-gray-700 leading-tight text-center">
          Use o máximo da Inteligência Artificial para aumentar sua{" "}
          <span className="text-yellow">produtividade</span>
        </strong>
        <p className="inline-block p-0 m-0 text-center">
          de <span className="line-through">R$ 97,00</span> por apenas
        </p>
        <span className="inline-block max-w-4xl text-5xl md:text-6xl lg:text-7xl text-center font-bold">
          R$ 27,00
        </span>
        <span className="text-center">
          Cartão de crédito | Boleto | Google Pay | PayPal | Pix
        </span>
        <div className="w-full flex justify-center">
          <a
            href="https://pay.hotmart.com/G84637868O?checkoutMode=10"
            className="inline-block px-2 py-4 text-white  bg-yellow w-80 rounded-md hover:opacity-90 transition-colors ease-in text-center"
            target="_blank"
          >
            GARANTIR AGORA
          </a>
        </div>
      </div>
      <div>
        <Image
          className="w-[500px] h-[500px] object-contain flex-1 rounded-xl"
          src="/capa-oferecimento.png"
          width={1080}
          height={1080}
          alt="Matheus Goes"
        />
      </div>
    </div>
  );
}

export default Oferta;
