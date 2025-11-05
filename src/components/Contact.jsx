import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-16 bg-slate-900">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something great</h2>
          <p className="mt-2 text-slate-300">
            I’m available for consulting, freelance, and full‑time roles. Tell me about your project or team.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition shadow-sm"
          >
            <Mail className="h-4 w-4" /> Email Me
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
