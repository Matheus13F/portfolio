import { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Suspense } from "react";
import Analytics from "@/components/Analytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Matheus Goes",
  description: "Matheus Goes | Desenvolvedor & Criador de conteudo",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    images: ["/minimum.png"],
    title: "Matheus Goes",
    description: "Matheus Goes | Desenvolvedor & Criador de conteudo",
    type: "website",
    url: "https://www.matheusgoes.tech/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Goes",
    description: "Matheus Goes | Desenvolvedor & Criador de conteudo",
    creator: "@oi_mattheww",
    images: ["/minimum.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} scroll-smooth`}>
      <body className="bg-[#f1f1f1]">
        <Suspense>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
