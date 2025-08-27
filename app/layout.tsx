import type React from "react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Rethink_Sans } from "next/font/google";
import "../styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });
const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rethink-sans",
});

export const metadata: Metadata = {
  title: "Yumin Song",
  description: "Yumin Homepage",
  generator: "v0.dev",
  icons: {
    icon: "/img/favicon.jpg",
    shortcut: "/img/favicon.jpg",
    apple: "/img/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rethinkSans.className} suppressHydrationWarning={true}>{children}</body>
      {/* <body className="font-rethink-sans" suppressHydrationWarning={true}>{children}</body> */}
    </html>
  );
}
