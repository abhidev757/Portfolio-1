import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen selection:bg-white/20">
      <ScrollyCanvas />
      <Skills />
      <Projects />
      
      {/* Footer */}
      <footer className="w-full border-t border-white/5 py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-2">ABHISHEK S</h3>
            <p className="text-white/40 font-light text-sm">MERN Stack Developer | Full Stack Engineer</p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/abhidev757" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors p-2"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abhishek-s-mern" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors p-2"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:abhisheksajeev757@gmail.com" 
              className="text-white/50 hover:text-white transition-colors p-2"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 text-center md:text-left text-white/30 text-xs font-light">
          <p>&copy; {new Date().getFullYear()} Abhishek S. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
