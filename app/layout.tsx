import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "SiteZen Solutions | Design That Speaks",
  description:
    "We craft stunning digital experiences that captivate your audience and drive results. Ideas crafted into reality, built for impact.",

  keywords: [
    "freelancer",
    "website builder",
    "web developer",
    "developer",
    "UI design",
    "SiteZen",
    "SiteZen Solutions"
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "SiteZen Solutions | Design That Speaks",
    description:
      "We craft stunning digital experiences that captivate your audience and drive results.",
    url: "https://your-domain.com",
    siteName: "SiteZen Solutions",
    images: [
      {
        url: "/og-image.png", // since you said null, this is a placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SiteZen Solutions | Design That Speaks",
    description:
      "We craft stunning digital experiences that captivate your audience and drive results.",
    images: ["/og-image.png"],
  },

  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }
  ],

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SiteZen Solutions",
              url: "https://your-domain.com",
              description:
                "We craft stunning digital experiences that captivate your audience and drive results. Ideas crafted into reality, built for impact.",
              sameAs: [],
              creator: {
                "@type": "Organization",
                name: "SiteZen Solutions",
              }
            })
          }}
        />
        <meta title="SiteZen Solutions"
        content="Design that speaks, Ideas crafted into reality. Built for impact. hear ideas turn into reality." />
      </head>
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
