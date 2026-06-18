import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
