import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "COREX 2026",
  description:
    "Register for COREX 2026 - The Ultimate Tech Fest at BVM Holy Cross College. Esports, Coding, Workshops, and more.",
  openGraph: {
    title: "COREX 2026 | BVM Holy Cross College",
    description:
      "Register for COREX 2026 - The Ultimate Tech Fest at BVM Holy Cross College. Esports, Coding, Workshops, and more.",
    type: "website",
    images: [
      {
        url: "https://bvm-fest-ticketing.vercel.app/card.jpeg",
        width: 1422,
        height: 800,
        alt: "COREX 2026 - BVM Holy Cross College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COREX 2026 | BVM Holy Cross College",
    description:
      "Register for COREX 2026 - The Ultimate Tech Fest at BVM Holy Cross College. Esports, Coding, Workshops, and more.",
    images: ["https://bvm-fest-ticketing.vercel.app/card.jpeg"],
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
      className={`scroll-smooth ${bebasNeue.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
