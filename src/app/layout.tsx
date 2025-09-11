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
  title: "BVM Holy Cross — Inter-College Events",
  description:
    "Register for exciting inter-college events at BVM Holy Cross College, Cherpunkal. Join E-Football, PC Building, Coding Challenge, Speed Typing, and Tech Quiz competitions. One participant. One ticket. One epic day.",
  metadataBase: new URL("https://bvm-fest-ticketing.vercel.app"),
  openGraph: {
    title: "BVM Holy Cross — Inter-College Events",
    description:
      "Register for exciting inter-college events: E-Football, PC Building, Coding Challenge, Speed Typing, and Tech Quiz. Join the competition at BVM Holy Cross College!",
    images: ["https://bvm-fest-ticketing.vercel.app/banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://bvm-fest-ticketing.vercel.app/banner.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico", 
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "BVM Holy Cross Inter-College Events",
    description:
      "Exciting inter-college competition featuring E-Football, PC Building, Coding Challenge, Speed Typing, and Tech Quiz events.",
    organizer: {
      "@type": "Organization",
      name: "BVM Holy Cross College",
      url: "https://bvm-fest-ticketing.vercel.app",
    },
    location: {
      "@type": "Place",
      name: "BVM Holy Cross College",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cherpunkal",
        addressCountry: "IN",
      },
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <html lang="en">
      <head>
        {/* Minimal WhatsApp-specific meta tags */}
        <meta property="og:image" content="https://bvm-fest-ticketing.vercel.app/banner.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
