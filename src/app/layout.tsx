import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/ui/layouts";
import "../../public/assets/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escrow exchange",
  description: "Breaching the fradulent act between a buyer and a seller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
