import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/header/navbar";
import Footer from "@/components/layout/footer/footer";
import "./globals.css";

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
      <body className={`${space_Grotesk.className} antialiased w-full`}>
        <div className="w-full flex flex-col items-center">
          <Navbar />
          <main className="w-full max-w-[1200px] px-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
