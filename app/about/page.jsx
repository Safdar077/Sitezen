"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">About Us</p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Shaping digital experiences{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              with creativity.
            </span>
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
          <motion.div variants={itemVariants} className="rounded-xl border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Who We Are</h2>
            <p className="leading-relaxed text-muted-foreground">
              SiteZen Solutions is a forward-thinking digital agency dedicated to transforming ideas into impactful
              digital experiences. Founded on the principles of creativity, innovation, and excellence, we partner with
              businesses of all sizes to bring their visions to life.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-xl border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">Our Mission</h2>
            <p className="leading-relaxed text-muted-foreground">
              We believe that great design has the power to inspire, engage, and convert. Our mission is to create
              websites and digital products that not only look stunning but also deliver measurable results for our
              clients.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-xl border border-border bg-card p-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">What We Do</h2>
            <ul className="grid gap-4 text-muted-foreground md:grid-cols-2">
              {[
                "Web Design & Development",
                "Full-Stack website",
                "UI Design",
                "E-commerce Websites",
                "Backend Development",
              ].map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs text-primary">
                    ✓
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
