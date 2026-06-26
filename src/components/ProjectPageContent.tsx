'use client';

import React, { MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SubPageHero from '@/components/SubPageHero';
import SectionHeader from '@/components/SectionHeader';
import PageDivider from '@/components/PageDivider';
import { projects, testimonials, type Project } from '@/lib/content';

type ProjectPageContentProps = {
  project: Project;
};

const ProjectPageContent = ({ project }: ProjectPageContentProps) => {
  const relatedProjects = projects.filter((item) => item.slug !== project.slug);
  const testimonial = testimonials.find((item) => item.id === project.testimonialId);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <>
      <div className="px-6 md:px-12 pt-[140px]">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-body text-sm text-[#7B7D7E] hover:text-[#FFFFFF] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Work
        </Link>
      </div>

      <SubPageHero
        label={`/work / ${project.slug}`}
        title={project.title}
        description={project.description}
      />

      <section className="relative w-full px-6 md:px-12 pb-20 bg-background overflow-hidden">
        <div
          className="w-full relative overflow-hidden bg-[#111111] mb-12 md:mb-16 rounded-sm h-[300px] md:h-[650px]"
          onMouseMove={handleMouseMove}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top z-10"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16 mb-16 md:mb-24">
          <div className="flex items-center gap-4">
            <span className="font-heading font-bold text-3xl text-[#2A2A2A]">{project.id}</span>
            <span className="font-body text-sm text-[#7B7D7E] uppercase tracking-wide">
              {project.category} · {project.year}
            </span>
          </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div>
            <p className="font-body text-[#7B7D7E] font-normal text-sm md:text-base mb-2">/the-problem</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#FFFFFF] tracking-tight leading-none mb-6">
              THE CHALLENGE
            </h2>
            <p className="font-body text-[#7B7D7E] text-base md:text-xl leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <p className="font-body text-[#7B7D7E] font-normal text-sm md:text-base mb-2">/what-we-built</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#FFFFFF] tracking-tight leading-none mb-6">
              THE SOLUTION
            </h2>
            <p className="font-body text-[#7B7D7E] text-base md:text-xl leading-relaxed">{project.solution}</p>
          </div>
        </div>
      </section>

      <PageDivider>What shipped.</PageDivider>

      <section className="relative w-full px-6 md:px-12 pt-32 pb-20 bg-background overflow-hidden">
        <SectionHeader
          label="/outcome"
          title="THE RESULT"
          description={project.outcome}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="border border-white/10 p-8 md:p-10">
            <p className="font-body text-xs text-[#7B7D7E] uppercase tracking-wide mb-3">Our Role</p>
            <p className="font-body text-[#FFFFFF] text-sm md:text-base leading-relaxed">{project.role}</p>
          </div>
          {project.deliverables.map((deliverable) => (
            <div key={deliverable} className="border border-white/10 p-8 md:p-10">
              <p className="font-body text-xs text-[#7B7D7E] uppercase tracking-wide mb-3">Deliverable</p>
              <p className="font-heading font-bold text-xl md:text-2xl text-[#FFFFFF] uppercase leading-tight">
                {deliverable}
              </p>
            </div>
          ))}
        </div>
      </section>

      {testimonial && (
        <>
          <PageDivider>From the client.</PageDivider>

          <section className="relative w-full px-6 md:px-12 py-32 bg-background overflow-hidden">
            <div className="w-full bg-[#1A1C1E] p-8 md:p-16 rounded-sm border border-white/5">
              <div className="flex justify-between items-start w-full mb-10">
                <div className="flex flex-col">
                  <h4 className="font-body text-[#FFFFFF] text-lg md:text-xl font-medium mb-1">{testimonial.name}</h4>
                  <p className="font-body text-[#7B7D7E] text-sm md:text-base">{testimonial.role}</p>
                </div>
                <span className="font-heading font-bold text-3xl md:text-4xl text-[#2A2A2A]">{testimonial.id}</span>
              </div>
              <p className="font-body text-[#FFFFFF] text-xl md:text-2xl leading-relaxed max-w-4xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          </section>
        </>
      )}

      <PageDivider>More work from Klaris.</PageDivider>

      <section className="relative w-full px-6 md:px-12 pt-32 pb-20 bg-background overflow-hidden">
        <SectionHeader
          label="/more-projects"
          title="OTHER PROJECTS"
          description="Explore more products we've shipped for real clients."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {relatedProjects.map((item) => (
            <Link key={item.id} href={`/work/${item.slug}`} className="w-full flex flex-col group">
              <div
                className="w-full relative overflow-hidden bg-[#111111] mb-6 md:mb-8 rounded-sm group/img cursor-none h-[250px] md:h-[450px]"
                onMouseMove={handleMouseMove}
              >
                <Image
                  src={item.image}
                  alt={item.title}
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

              <div className="flex flex-col items-start gap-2">
                <h3 className="font-heading font-bold text-[#FFFFFF] uppercase leading-none text-3xl">
                  {item.title}
                </h3>
                <p className="font-body font-medium text-[#fff]/40 text-sm leading-relaxed">{item.description}</p>
              </div>
            </Link>
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

export default ProjectPageContent;
