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
    "Milan Shah, senior at River Hill High School. FBLA chapter president, NHL Youth Advisory Board alum, Coldwell Banker intern. Sports business, real estate, marketing.",
  metadataBase: new URL("https://milanshah.org"),
  alternates: { canonical: "/" },
  icons: { icon: "/assets/favicon.png", apple: "/assets/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    url: "https://milanshah.org/",
    title: "Milan Shah",
    description:
      "Milan Shah, senior at River Hill High School. FBLA chapter president, NHL Youth Advisory Board alum, Coldwell Banker intern.",
    images: [{ url: "/assets/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Milan Shah", images: ["/assets/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={newsreader.variable}>
      <body>{children}</body>
    </html>
  );
}
