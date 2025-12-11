"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Smartphone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="border-t border-border bg-card"
    >
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-lg font-bold text-foreground">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SiteZen Solutions
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">Crafted with passion by SiteZen Solutions.</p>

            <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link href="/projects" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Projects
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
            <div className="max-w-6xl px-12 py-8">
              <div className="flex flex-col items-center md:flex-row">
              <Smartphone size={20} /> <a className="flex flex-col items-center pl-2 md:items-start text-sm hover:cursor-pointer">+91 89839-39755</a>
            </div>
            <div className="flex flex-col items-center mt-2 md:flex-row">
              <Mail size={20} /> <a className="flex flex-col items-center pl-2 md:items-start text-sm hover:cursor-pointer">info.sitezen@gmail.com</a>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <MapPin size={20} /> <a className="flex flex-col items-center pl-1 md:items-start mt-2 text-sm hover:cursor-pointer">Pune, Maharashtra India</a>
            </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-4 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SiteZen Solutions. All rights reserved.
          </p>
        </div>
    </motion.footer>
  )
}
