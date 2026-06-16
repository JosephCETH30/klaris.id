'use client';

import React from 'react';
import Image from 'next/image';
import SubPageHero from '@/components/SubPageHero';
import SectionHeader from '@/components/SectionHeader';
import PageDivider from '@/components/PageDivider';
import { values, services, brandItems } from '@/lib/content';

const AboutPageContent = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    e.currentTarget.style.setProperty('--mouse-x', String(x));
    e.currentTarget.style.setProperty('--mouse-y', String(y));
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--mouse-x', '0');
    e.currentTarget.style.setProperty('--mouse-y', '0');
  };

  return (
    <>
      <SubPageHero
        label="/about-us"
        title="About Us"
        description="PT Klaris Tata Visual — a product studio based in Jakarta that ships digital products, not slide decks."
      />

      <section className="relative w-full px-6 md:px-12 pb-20 bg-background overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div>
            <p className="font-body text-[#7B7D7E] font-normal text-sm md:text-base mb-2">/who-we-are</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#FFFFFF] tracking-tight leading-none mb-8">
              LESS TALK,
              <br />
              MORE SHIP
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-body text-[#7B7D7E] text-base md:text-xl leading-relaxed">
              We started Klaris because too many agencies sell presentations instead of products. Our team
              builds web platforms, mobile apps, and AI integrations — end to end, from research to
              production deployment.
            </p>
            <p className="font-body text-[#7B7D7E] text-base md:text-xl leading-relaxed">
              Based in Central Jakarta, we work with clients across Indonesia and internationally.
              Worldwide payment available. Function over aesthetics — always.
            </p>
          </div>
        </div>
      </section>

      <PageDivider>What we stand for.</PageDivider>

      <section className="relative w-full px-6 md:px-12 pt-32 pb-20 bg-background overflow-hidden">
        <SectionHeader
          label="/values"
          title="OUR PRINCIPLES"
          description="Four rules we don't bend on — no matter the project size."
        />

        <div className="flex flex-col gap-0">
          {values.map((value) => (
            <div
              key={value.id}
              className="group relative w-full border-t border-white/10 pt-12 pb-12"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col md:flex-row justify-between items-start w-full gap-6">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:w-2/3">
                  <div className="font-heading font-bold text-5xl md:text-[50px] text-[#2A2A2A] leading-none md:w-16 transition-colors group-hover:text-[#444444]">
                    {value.id}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-heading font-bold text-2xl md:text-[32px] text-[#FFFFFF] uppercase mb-4 tracking-wide leading-none">
                      {value.title}
                    </h3>
                    <p className="font-body font-normal text-[#7B7D7E] text-sm md:text-base leading-relaxed group-hover:text-[#999999] transition-colors max-w-xl">
                      {value.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex relative w-[120px] h-[100px] items-end justify-end pointer-events-none">
                  <div
                    className="absolute bottom-[-15px] right-[45px] w-[35px] h-[75px] bg-[#2563EB] rounded-t-md origin-bottom transition-transform duration-300 ease-out"
                    style={{
                      transform:
                        'translate(calc(var(--mouse-x, 0) * 10px), calc(var(--mouse-y, 0) * 10px)) rotate(-12deg)',
                    }}
                  />
                  <div
                    className="absolute bottom-[-15px] right-[22px] w-[35px] h-[90px] bg-[#38BDF8] rounded-t-md origin-bottom transition-transform duration-300 ease-out"
                    style={{
                      transform:
                        'translate(calc(var(--mouse-x, 0) * 20px), calc(var(--mouse-y, 0) * 20px)) rotate(-6deg)',
                    }}
                  />
                  <div
                    className="absolute bottom-[-15px] right-0 w-[35px] h-[105px] bg-[#FFFFFF] rounded-t-md origin-bottom transition-transform duration-300 ease-out"
                    style={{
                      transform:
                        'translate(calc(var(--mouse-x, 0) * 35px), calc(var(--mouse-y, 0) * 35px)) rotate(0deg)',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageDivider>What we actually do.</PageDivider>

      <section className="relative w-full px-6 md:px-12 pt-32 pb-20 bg-background overflow-hidden">
        <SectionHeader label="/capabilities" title="WHAT WE DO" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full bg-[#1A1C1E] p-8 md:p-10 rounded-sm border border-white/5 hover:border-white/10 transition-colors min-h-[220px] flex flex-col justify-between"
            >
              <span className="font-heading font-bold text-3xl text-[#2A2A2A]">{service.id}</span>
              <div>
                <h3 className="font-heading font-bold text-lg md:text-xl text-[#FFFFFF] uppercase mb-3 tracking-wide leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-[#7B7D7E] text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageDivider>Brands that shipped with us.</PageDivider>

      <section className="relative w-full px-6 md:px-12 py-32 bg-background overflow-hidden">
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
        <div className="border border-white/10 p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-2">3+</p>
            <p className="font-body text-[#7B7D7E] text-sm md:text-base">Products shipped to production</p>
          </div>
          <div>
            <p className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-2">5</p>
            <p className="font-body text-[#7B7D7E] text-sm md:text-base">Core service areas</p>
          </div>
          <div>
            <p className="font-heading text-4xl md:text-5xl font-bold text-[#FFFFFF] mb-2">JKT</p>
            <p className="font-body text-[#7B7D7E] text-sm md:text-base">Based in Central Jakarta, Indonesia</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageContent;
