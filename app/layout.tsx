import type { Metadata } from "next";
import { Radio_Canada_Big } from "next/font/google";
import "./globals.css";

const radioCanada = Radio_Canada_Big({
  variable: "--font-radio-canada",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Resistance Cinema Fest",
  description:
    "A creative intervention and caravan film fest hosted by Activate Rights, featuring solidarity screenings of films on people's resistance around the world.",
  openGraph: {
    title: "Resistance Cinema Fest",
    description:
      "Films, conversations, and artivism centering resistance, memory, and justice.",
    url: "https://resistancecinefest.activaterights.org/",
    siteName: "Resistance Cinema Fest",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Resistance Cinema Fest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resistance Cinema Fest",
    description:
      "Films, conversations, and artivism centering resistance, memory, and justice.",
    images: ["/og-image.jpg"],
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
      className={`${radioCanada.variable} h-full scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full bg-cream font-body text-charcoal antialiased"
      >
        {children}
      </body>
    </html>
  );
}
