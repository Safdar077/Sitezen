"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6">
        {/* Background gradient effect */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.1),transparent_70%)]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
          >
            Welcome to SiteZen Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Design that{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">speaks.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl"
          >
            We craft stunning digital experiences that captivate your audience and drive results. Ideas crafted into
            reality, built for impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                View Projects
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg border border-border bg-secondary px-8 py-3 font-medium text-secondary-foreground transition-all hover:bg-muted"
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        />
      </section>

      {/* Features Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Why Choose Us</h2>
            <p className="mt-4 text-muted-foreground">Built for impact. Designed for success.</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Creative Design",
                description: "Unique, modern designs that make your brand stand out from the competition.",
                icon: "✦",
              },
              {
                title: "Clean Code",
                description: "Well-structured, maintainable code that scales with your business needs.",
                icon: "◈",
              },
              {
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising on quality or attention to detail.",
                icon: "◇",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl text-primary">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Ready to start your project?</h2>
          <p className="mt-4 text-lg text-muted-foreground">{"Let's build something great together."}</p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20"
            >
              Start a Conversation
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
