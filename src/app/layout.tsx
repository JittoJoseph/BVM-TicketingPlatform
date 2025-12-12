import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COREX 2026 | BVM Holy Cross College",
  description:
    "Register for COREX 2026 - The Ultimate Tech Fest at BVM Holy Cross College. Esports, Coding, Workshops, and more.",
  keywords: [
    "COREX 2026",
    "BVM Holy Cross",
    "Tech Fest",
    "Esports",
    "Coding",
    "College Fest",
  ],
  openGraph: {
    title: "COREX 2026 | BVM Holy Cross College",
    description:
      "Register for COREX 2026 - The Ultimate Tech Fest at BVM Holy Cross College. Esports, Coding, Workshops, and more.",
    images: "/card.jpeg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COREX 2026 | BVM Holy Cross College",
    description:
      "Register for COREX 2026 - The Ultimate Tech Fest at BVM Holy Cross College. Esports, Coding, Workshops, and more.",
    images: "/card.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
