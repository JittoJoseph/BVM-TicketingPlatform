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
  keywords: [
    "BVM Holy Cross",
    "inter-college events",
    "coding challenge",
    "e-football",
    "PC building",
    "speed typing",
    "tech quiz",
    "college competition",
    "Cherpunkal",
    "student events",
  ],
  authors: [{ name: "BVM Holy Cross College" }],
  creator: "BVM Holy Cross College",
  publisher: "BVM Holy Cross College",
  metadataBase: new URL("https://bvm-fest-ticketing.vercel.app"), // Update this with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BVM Holy Cross — Inter-College Events",
    description:
      "Register for exciting inter-college events: E-Football, PC Building, Coding Challenge, Speed Typing, and Tech Quiz. Join the competition at BVM Holy Cross College!",
    type: "website",
    locale: "en_US",
    url: "https://bvm-fest-ticketing.vercel.app", // Update this with your actual domain
    siteName: "BVM Holy Cross Events",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "BVM Holy Cross College Inter-College Events - E-Football, PC Building, Coding Challenge, Speed Typing, Tech Quiz",
      },
      {
        url: "/logo.png", 
        width: 800,
        height: 600,
        alt: "BVM Holy Cross College Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BVM Holy Cross — Inter-College Events",
    description:
      "Register for exciting inter-college events: E-Football, PC Building, Coding Challenge, Speed Typing, and Tech Quiz.",
    images: ["/banner.png"],
    creator: "@bvmholycross", // Update with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "BVM Holy Cross Inter-College Events",
    "description": "Exciting inter-college competition featuring E-Football, PC Building, Coding Challenge, Speed Typing, and Tech Quiz events.",
    "organizer": {
      "@type": "Organization",
      "name": "BVM Holy Cross College",
      "url": "https://bvm-fest-ticketing.vercel.app"
    },
    "location": {
      "@type": "Place",
      "name": "BVM Holy Cross College",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cherpunkal",
        "addressCountry": "IN"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <html lang="en">
      <head>
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
