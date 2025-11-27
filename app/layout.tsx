import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
// <CHANGE> Import Navbar and Footer components
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for SiteZen Solutions
  title: "SiteZen Solutions | Design that speaks",
  description: "Ideas crafted into reality. Built for impact.",
  generator: "v0.app",
  // ... existing code ...
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {/* <CHANGE> Added Navbar and Footer wrapping all pages */}
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
