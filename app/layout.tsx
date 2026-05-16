import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter_Tight, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
});
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Milan Shah — Portfolio",
  description:
    "Junior at River Hill High School. President of FBLA, Collaborative Marketing Club, and the River Hill Pickleball Club. 3× Maryland FBLA State Champion. NHL Youth Marketing Advisor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${bricolage.variable} ${interTight.variable} ${jetbrains.variable} ${newsreader.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
