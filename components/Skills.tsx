"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud, GraduationCap, Trophy } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 text-white/50" />,
    skills: ["React.js", "Redux Toolkit", "Context API", "Tailwind CSS", "Bootstrap", "jQuery", "EJS"]
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-white/50" />,
    skills: ["Node.js", "Express.js", "RESTful APIs", "WebRTC", "Socket.io", "JWT", "OAuth 2.0"]
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 text-white/50" />,
    skills: ["MongoDB", "PostgreSQL", "Mongoose", "SQL"]
  },
  {
    title: "Tools & DevOps",
    icon: <Cloud className="w-5 h-5 text-white/50" />,
    skills: ["Docker", "AWS (EC2, S3)", "Git/GitHub", "CI/CD", "Postman", "Figma", "Vercel"]
  }
];

export default function Skills() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Column: Skills */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-white/60 font-light mb-16 max-w-md">
            Proficient in modern web technologies, specializing in the MERN stack with a strong focus on real-time and scalable systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx} 
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-lg font-medium text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-mono tracking-wide text-white/70 bg-white/5 border border-white/10 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Achievements */}
        <div className="flex-1 lg:max-w-md">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-white/50" />
              Education
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-white/10 before:to-transparent">
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#121212] border-2 border-white/20" />
                <h4 className="text-lg font-medium text-white">Full-Stack MERN Development</h4>
                <p className="text-sm font-mono text-white/40 mt-1 mb-2">Brototype Bootcamp | Nov 2024 - Jan 2026</p>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  1-year intensive training focused on modern web architecture, responsive design, and scalable backend systems.
                </p>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-[#121212] border-2 border-white/20" />
                <h4 className="text-lg font-medium text-white">Diploma in Electrical & Electronics</h4>
                <p className="text-sm font-mono text-white/40 mt-1 mb-2">St. Mariyam Polytechnic | 2017 - 2020</p>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Developed strong analytical skills and technical troubleshooting foundations.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-white/50" />
              Achievements
            </h2>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-lg font-medium text-white mb-2">LeetCode: 500+ Problems</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed mb-4">
                Solved 500+ algorithmic problems (Easy to Hard), focusing on Arrays, Linked Lists, Trees, and Dynamic Programming.
              </p>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-white/80" 
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
