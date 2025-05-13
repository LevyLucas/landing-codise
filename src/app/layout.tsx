import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContactButton from '@/components/layout/FloatingContactButton';
import { LanguageProvider } from '@/contexts/LanguageContext';
import "./globals.css";

export const metadata: Metadata = {
  title: "Agência Codise",
  description: "Agência de Desenvolvimento Web e Design",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <FloatingContactButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
