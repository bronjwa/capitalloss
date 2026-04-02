import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Capitalloss",
    template: "%s — Capitalloss",
  },
  description:
    "An editorial archive of mistakes, losses, and lessons from ambitious lives.",
  openGraph: {
    title: "Capitalloss",
    description:
      "An editorial archive of mistakes, losses, and lessons from ambitious lives.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@capitalloss",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: "#0a0a0a" }}>
        {children}
      </body>
    </html>
  );
}
