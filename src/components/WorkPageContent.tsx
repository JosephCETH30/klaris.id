'use client';

import React, { MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SubPageHero from '@/components/SubPageHero';
import SectionHeader from '@/components/SectionHeader';
import PageDivider from '@/components/PageDivider';
import { projects, processSteps } from '@/lib/content';

const WorkPageContent = () => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <>
      <SubPageHero
        label="/work"
        title="Selected Works"
        description="Real products shipped for real clients. No mockups, no filler — just work that went live."
      />

      <section className="relative w-full px-6 md:px-12 pb-20 bg-background overflow-hidden">
        <SectionHeader
          label="/portfolio"
          title="ALL PROJECTS"
          description="Every project started with a problem worth solving. Here's how we solved them."
        />

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.slug}`} className="w-full flex flex-col group">
              <div
                className="w-full relative overflow-hidden bg-[#111111] mb-6 md:mb-8 rounded-sm group/img cursor-none h-[300px] md:h-[650px]"
                onMouseMove={handleMouseMove}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover/img:scale-105 z-10"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

                <div
                  className="pointer-events-none absolute left-0 top-0 z-30 opacity-0 group-hover/img:opacity-100"
                  style={{
                    transform: 'translate(var(--mouse-x, 50%), var(--mouse-y, 50%))',
                    transition: 'transform 0.15s ease-out, opacity 0.3s ease-out',
                  }}
                >
                  <div className="w-28 h-28 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex flex-col items-center justify-center scale-50 group-hover/img:scale-100 transition-transform duration-[0.6s] ease-[0.16,1,0.3,1]">
                    <span className="font-heading text-xs md:text-sm font-bold text-[#0D0D0D] uppercase tracking-wider text-center leading-tight">
                      View
                      <br />
                      Project
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex flex-col gap-4 max-w-xl">
                  <div className="flex items-center gap-4">
                    <span className="font-heading font-bold text-3xl text-[#2A2A2A]">{project.id}</span>
                    <span className="font-body text-sm text-[#7B7D7E] uppercase tracking-wide">
                      {project.category} · {project.year}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[#FFFFFF] uppercase text-[40px] leading-none">
                    {project.title}
                  </h3>
                  <p className="font-body font-medium text-[#7B7D7E] text-sm md:text-[18px] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-6 md:max-w-sm md:text-right">
                  <div>
                    <p className="font-body text-xs text-[#7B7D7E] uppercase tracking-wide mb-2">Outcome</p>
                    <p className="font-body text-sm md:text-base text-[#FFFFFF] leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[#7B7D7E] uppercase tracking-wide mb-2">Stack</p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-body text-xs md:text-sm text-[#FFFFFF] border border-white/10 bg-[#16191B] px-3 py-1.5 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <PageDivider>Now Imagine What We Can Build For You.</PageDivider>

      <section className="relative w-full px-6 md:px-12 pt-32 pb-20 bg-background overflow-hidden">
        <SectionHeader
          label="/process"
          title="HOW WE SHIP"
          description="A repeatable process that keeps projects moving without losing quality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`p-8 md:p-12 border-white/10 ${
                index % 2 === 0 ? 'md:border-r' : ''
              } ${index < 2 ? 'border-b' : ''}`}
            >
              <span className="font-heading font-bold text-5xl text-[#2A2A2A] block mb-6">{step.id}</span>
              <h3 className="font-heading font-bold text-2xl md:text-[32px] text-[#FFFFFF] uppercase mb-4 tracking-wide leading-none">
                {step.title}
              </h3>
              <p className="font-body text-[#7B7D7E] text-sm md:text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <PageDivider>Ready to start your project?</PageDivider>

      <section className="relative w-full px-6 md:px-12 py-32 bg-background">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#FFFFFF] tracking-tight leading-none max-w-2xl">
            Got something worth building?
          </h2>
          <a
            href="mailto:work@klaris.id"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-md bg-[#16191B] text-[#FFFFFF] font-body text-sm font-medium hover:border-white/30 transition-colors"
          >
            Lets Talk
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default WorkPageContent;
