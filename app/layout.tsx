import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

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
  title: "Duke LDOC 2025",
  description: "Hannon Stern. Penelope Road. Rich the Kid. Natasha Bedingfield. 04/23/2025.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#fcd598]">
      <GoogleAnalytics gaId="G-34XVKGNHD5"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${loveCraft.variable} antialiased`} 
      >
        {children}
      </body>
    </html>
  );
}
