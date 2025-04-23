import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/header/navbar";
import Footer from "@/components/layout/footer/footer";

const space_Grotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Positivus",
  description: "Positivus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${space_Grotesk.className} antialiased overflow-x-hidden min-h-screen flex flex-col justify-center items-center`}
      >
        <Navbar />
        <main className="w-full h-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
