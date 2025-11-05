import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 flex items-center min-h-[85vh] lg:min-h-[90vh]">
        <div className="max-w-3xl text-white">
          <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 ring-1 ring-white/15 backdrop-blur-sm">Open to Remote • Freelance & Full-time</p>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Software Engineer crafting cloud-native apps
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">with AWS, Azure, GCP, and modern web.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl">
            I build scalable backends with Python and Node, and delightful frontends with React & Next.js. I care about performance, DX, and shipping polished products.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition shadow-sm ring-1 ring-white/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition shadow-sm"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-white bg-transparent border border-white/20 hover:border-white/40 transition"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-6 flex items-center gap-5 text-slate-300">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
