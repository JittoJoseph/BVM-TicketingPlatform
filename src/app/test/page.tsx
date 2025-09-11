import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Test - BVM Events",
  description: "Testing WhatsApp sharing with JPG image",
  openGraph: {
    title: "WhatsApp Test - BVM Events",
    description: "Testing WhatsApp sharing with JPG image",
    images: ["https://bvm-fest-ticketing.vercel.app/banner.jpg"],
  },
};

export default function TestPage() {
  return (
    <div className="p-8">
      <h1>WhatsApp Sharing Test</h1>
      <p>Share this URL in WhatsApp to test image preview:</p>
      <code>https://bvm-fest-ticketing.vercel.app/test</code>
      <br />
      <br />
      <img src="/banner.jpg" alt="Banner" className="max-w-md" />
    </div>
  );
}
