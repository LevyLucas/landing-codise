import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContactButton from '@/components/layout/FloatingContactButton';
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agência Codise",
  description: "Agência de Desenvolvimento Web e Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)] font-[var(--font-sans)]">
        <Header />
        {children}
        <FloatingContactButton />
        <Footer />
      </body>
    </html>
  );
}
