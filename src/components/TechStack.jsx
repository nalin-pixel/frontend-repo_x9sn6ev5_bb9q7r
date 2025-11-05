import React from 'react';

const skills = [
  'AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform',
  'Python', 'FastAPI', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'Tailwind CSS',
  'CI/CD', 'Vercel', 'CloudFront', 'S3', 'Lambda', 'API Gateway'
];

export default function TechStack() {
  return (
    <section id="tech" className="relative w-full py-16 bg-slate-950">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Cloud & Tech Stack</h2>
          <p className="mt-2 text-slate-400">Tools I use to architect, build, and ship reliable products.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
