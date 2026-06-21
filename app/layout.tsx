import type { Metadata } from "next";
import { Radio_Canada_Big } from "next/font/google";
import "./globals.css";

const radioCanada = Radio_Canada_Big({
  variable: "--font-radio-canada",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Resistance Cinema Fest 2026",
  description:
    "A Creative Intervention on Torture Prevention, Transitional Justice, and Solidarity",
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
