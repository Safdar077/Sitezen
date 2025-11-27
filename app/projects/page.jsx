"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Contact Manager",
    description:
      "A comprehensive contact management application featuring intuitive UI, advanced search capabilities, and seamless organization tools for managing personal and business contacts efficiently.",
    video: "/contact-manager.mp4",
    tags: ["Next.js", "Json server"],
  },
  {
    title: "TechNova Digital Portfolio Website",
    description:
      "A stunning portfolio website for TechNova, showcasing their innovative digital products and services with immersive animations and modern design aesthetics.",
    video: "/tech-nova.mp4",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
]

export default function ProjectsPage() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Our Work</p>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Completed{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Explore our portfolio of successful projects. Each one represents our commitment to quality and innovation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group"
            >
              <div className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Video Container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`flex w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/20 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-4 text-2xl font-bold text-foreground md:text-3xl"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mb-6 text-muted-foreground"
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <p className="text-xl text-muted-foreground">Have a project in mind?</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 inline-block rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground shadow-lg shadow-primary/20"
          >
            {"Let's Talk"}
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
