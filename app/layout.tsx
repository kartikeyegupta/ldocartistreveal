import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const loveCraft = localFont({
  src: '../public/fonts/LoveCraft.ttf',
  variable: '--font-love-craft',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duke LDOC Artist Reveal 2025",
  description: "Who's it gonna be?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${loveCraft.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
