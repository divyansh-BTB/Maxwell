import type { Metadata } from "next";
import { Inter, Marcellus } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: "400",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maxwell Hospitality Private Limited",
  description:
    "Premium hospitality and food services across healthcare institutions, food courts, restaurants, and catering operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
