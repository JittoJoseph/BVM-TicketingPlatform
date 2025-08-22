import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BVM Holy Cross — Inter‑College Events",
  description:
    "Register for E‑Football, Coding Challenge, and PC Building Competition at BVM Holy Cross College, Cherpunkal.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "BVM Holy Cross — Inter‑College Events",
    description:
      "Register for E‑Football, Coding Challenge, and PC Building Competition.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
