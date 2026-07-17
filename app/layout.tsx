import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SageSilver | Melbourne IT Consultancy",
  description: "Melbourne-based technology consulting, quality engineering, AI automation and digital product delivery.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
