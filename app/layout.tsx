import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// importação de componentes:
import { Header } from "@/components/pagina/header";
import { Rodape } from "@/components/pagina/footer";

// importação de componentes shadcn:
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sand.br",
  description: "Enciclopédia brasileira das obras do Brandon Sanderson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth scrollbar-thin">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden `}
      >
        <Header />
        {children}
        <Rodape />
        <Toaster />
      </body>
    </html>
  );
}
