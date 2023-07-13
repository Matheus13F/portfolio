import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Matheus",
  description: "Matheus Goes | Desenvolvedor",
  icons: {
    icon: "logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.className} scroll-smooth`}>
      <body className="bg-[#f1f1f1]">{children}</body>
    </html>
  );
}
