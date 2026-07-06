import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  title: "Milan Shah",
  description:
    "Senior at River Hill High School. President of FBLA, Collaborative Marketing Club, and the River Hill Pickleball Club. 3× Maryland FBLA State Champion, NHL Youth Advisory Board alum, Wharton Global Youth Scholar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>{children}</body>
    </html>
  );
}
