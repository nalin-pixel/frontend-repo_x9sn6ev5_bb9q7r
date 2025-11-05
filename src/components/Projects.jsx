import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Serverless Media Pipeline',
    blurb: 'Event-driven processing on AWS with S3, Lambda, Step Functions, and CloudFront; FastAPI for signed URLs.',
    tags: ['AWS', 'Lambda', 'FastAPI', 'S3', 'IaC'],
    href: '#'
  },
  {
    title: 'Realtime Analytics Dashboard',
    blurb: 'Next.js + React charts streaming metrics from Kafka into TimescaleDB with WebSocket updates.',
    tags: ['Next.js', 'WebSockets', 'TimescaleDB', 'Kafka', 'Docker'],
    href: '#'
  },
  {
    title: 'Multi-cloud Infra Template',
    blurb: 'Portable Terraform modules to deploy a secure app baseline on AWS, Azure, and GCP with CI/CD.',
    tags: ['Terraform', 'AWS', 'Azure', 'GCP', 'CI/CD'],
    href: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Projects</h2>
          <p className="mt-2 text-slate-400">A few things I loved building recently.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition h-full flex flex-col">
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm flex-1">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] rounded-md bg-cyan-500/10 text-cyan-300 px-2 py-1 ring-1 ring-cyan-400/20">{t}</span>
                ))}
              </div>
              <div className="mt-5">
                <a href={p.href} className="inline-flex items-center gap-2 text-sm text-slate-200 hover:text-white transition">
                  View project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
