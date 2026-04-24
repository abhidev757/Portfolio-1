"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "FitSync",
    category: "Full-Stack Fitness Platform",
    year: "2024",
    description: "Built with React, Node.js, and MongoDB. Features WebRTC peer-to-peer video coaching, Socket.io real-time chat, Google Fit integration, and Stripe payments.",
    link: "https://fitsync-app-rho.vercel.app"
  },
  {
    id: 2,
    title: "Hero Club",
    category: "E-Commerce Platform",
    year: "2024",
    description: "Multi-vendor platform built with Node.js and EJS. Features comprehensive cart management, Razorpay payment processing, and AWS EC2 deployment.",
    link: "https://ecommerce-project-k2yl.onrender.com"
  }
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Selected Work
            </h2>
            <p className="text-white/60 font-light max-w-md">
              A collection of projects blending technical precision with creative design.
            </p>
          </div>
          <button className="text-sm font-medium tracking-widest uppercase text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={project.id}
              className="group relative flex flex-col justify-between p-8 md:p-10 min-h-[400px] rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden cursor-pointer block"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000 ease-in-out" />
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/[0.05] blur-[80px] rounded-full" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
                  {project.year} {'//'} {project.category}
                </span>
                <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:bg-white text-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10 mt-auto pt-16">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed max-w-sm group-hover:text-white/70 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
