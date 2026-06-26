'use client';

import React from 'react';
import Image from 'next/image';
import SubPageHero from '@/components/SubPageHero';
import SectionHeader from '@/components/SectionHeader';
import PageDivider from '@/components/PageDivider';
import { testimonials, brandItems } from '@/lib/content';

const TestimonialsPageContent = () => {
  const featured = testimonials[0];

  return (
    <>
      <SubPageHero
        label="/testimonials"
        title="Testimonials"
        description="Don't take our word for it. Hear it from the people we've actually worked with."
      />

      <section className="relative w-full px-6 md:px-12 pb-20 bg-background overflow-hidden">
        <div className="w-full bg-[#1A1C1E] border border-white/10 p-8 md:p-16 rounded-sm">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <p className="font-body text-[#7B7D7E] text-sm md:text-base mb-2">Featured</p>
              <h3 className="font-body text-[#FFFFFF] text-xl md:text-2xl font-medium mb-1">
                {featured.name}
              </h3>
              <p className="font-body text-[#7B7D7E] text-sm md:text-base">{featured.role}</p>
            </div>
            <span className="font-heading font-bold text-5xl md:text-6xl text-[#2A2A2A]">{featured.id}</span>
          </div>
          <p className="font-body text-[#FFFFFF] text-xl md:text-3xl leading-relaxed max-w-4xl">
            &ldquo;{featured.quote}&rdquo;
          </p>
        </div>
      </section>

      <PageDivider>More from our clients.</PageDivider>

      <section className="relative w-full px-6 md:px-12 pt-32 pb-20 bg-background overflow-hidden">
        <SectionHeader
          label="/clients"
          title="WHAT THEY SAID"
          description="Honest feedback from founders, designers, and product leaders we've partnered with."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col justify-between bg-[#1A1C1E] p-8 md:p-12 rounded-sm min-h-[400px] md:min-h-[480px] transition-colors hover:bg-white/[0.03] border border-white/5"
            >
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <h4 className="font-body text-[#FFFFFF] text-lg font-medium mb-1">{item.name}</h4>
                  <p className="font-body text-[#7B7D7E] text-sm md:text-base">{item.role}</p>
                </div>
                <span className="font-heading font-bold text-3xl md:text-4xl text-[#2A2A2A]">{item.id}</span>
              </div>

              <div className="mt-12 md:mt-0">
                <p className="font-body text-[#7B7D7E] text-base md:text-lg leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageDivider>Trusted by teams who ship.</PageDivider>

      <section className="relative w-full px-6 md:px-12 py-32 bg-background overflow-hidden">
        <div className="relative w-full flex flex-col items-center justify-center mb-16 md:mb-24">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primaryText opacity-5 absolute -top-4 md:-top-12 text-center w-full leading-[1.1] text-balance">
            Brands That Shipped <span className="whitespace-nowrap">With Us</span>
          </h2>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primaryText opacity-20 absolute -top-2 md:-top-6 text-center w-full leading-[1.1] text-balance">
            Brands That Shipped <span className="whitespace-nowrap">With Us</span>
          </h2>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-primaryText relative z-10 text-center w-full leading-[1.1] text-balance">
            Brands That Shipped <span className="whitespace-nowrap">With Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-center justify-items-center">
          {brandItems.map((brand) => (
            <div
              key={brand.label}
              className="w-48 md:w-64 h-24 md:h-32 relative grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
            >
              <Image src={brand.src} alt={brand.label} fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      <section className="relative w-full px-6 md:px-12 pb-32 bg-background">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-white/10 pt-16">
          <div>
            <p className="font-body text-[#7B7D7E] text-sm md:text-base mb-2">/next-step</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] tracking-tight leading-none max-w-xl">
              Want results like these?
            </h2>
          </div>
          <a
            href="mailto:work@klaris.id"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 rounded-md bg-[#16191B] text-[#FFFFFF] font-body text-sm font-medium hover:border-white/30 transition-colors"
          >
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPageContent;
