import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/features/common/components/footer";
import Link from "next/link";
import AudioProvider from "@/lib/context/audio-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Voice Recorder",
  description: "Voice Recorder Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col lg:overflow-hidden`}
      >
        <Link href={"/"} className="cursor-pointer">
          <div className="text-sm font-bold my-5 mx-5">VoiceLogo</div>
        </Link>
        <main className="flex-grow mx-5">
          <AudioProvider>{children}</AudioProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
