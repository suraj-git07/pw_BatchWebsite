import type { Metadata } from "next";
import Head from 'next/head';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/molecules/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PW: Physics Wallah",
  description: "Ongoing Batches of PW",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head> 
      <link
        rel="icon"
        href="./favicon.png"
        type="image/png"
        sizes="32x32"
/>
      </Head>
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
