import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yumin Song - Personal Homepage",
  description: "Academic portfolio of Yumin Song, Master's student at SNU",
  authors: [{ name: "Yumin Song" }],
  keywords: ["Human-Computer Interaction", "HCI", "AI", "Research", "Academic"],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
