import Image from "next/image";
import Link from "next/link";
import React from "react";

function notFound() {
  return (
    <div className="flex items-center h-[calc(100vh-5rem)] place-content-center">
      <div className="text-center">
        <Image src="/4042.svg" width={500} height={500} alt="error 404" />

        <p className="mt-4 text-gray-500">
          Não conseguimos encontrar e carregar essa página.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded bg-yellow px-5 py-3 text-sm font-bold text-white hover:opacity-90 focus:outline-none focus:ring"
        >
          Volte para o inicio
        </Link>
      </div>
    </div>
  );
}

export default notFound;
