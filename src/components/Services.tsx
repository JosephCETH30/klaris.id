'use client';

import React from 'react';
import { services } from '@/lib/content';

const Services = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    e.currentTarget.style.setProperty('--mouse-x', `${x}`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--mouse-x', '0');
    e.currentTarget.style.setProperty('--mouse-y', '0');
  };

  return (
    <section id="services" className="relative w-full px-6 md:px-12 pt-32 pb-20 bg-background overflow-hidden">
      <div className="w-full flex flex-col z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="font-body text-[#7B7D7E] font-normal text-sm md:text-base mb-2">/services</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#FFFFFF] tracking-tight leading-none">
              WHAT WE DO
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="font-body text-[#7B7D7E] font-medium text-base md:text-xl md:max-w-md leading-relaxed">
              Five things we're obsessively good at.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-16 mt-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative w-full border-t border-white/10 pt-12 pb-4"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute top-0 right-0 md:right-8 -translate-y-1/2 z-20">
                <button className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-md bg-[#16191B] text-[#FFFFFF] font-body text-sm font-medium cursor-pointer">
                  I want this
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start w-full relative z-10">
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:w-2/3">
                  <div className="font-heading font-bold text-5xl md:text-[50px] text-[#2A2A2A] leading-none md:w-16 transition-colors group-hover:text-[#444444]">
                    {service.id}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-heading font-bold text-2xl md:text-[32px] text-[#FFFFFF] uppercase mb-4 tracking-wide leading-none">
                      {service.title}
                    </h3>
                    <p className="font-body font-normal text-[#7B7D7E] text-sm md:text-base leading-relaxed group-hover:text-[#999999] transition-colors max-w-xl pointer-events-none">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex relative w-[120px] h-[100px] mt-8 md:mt-0 items-end justify-end pointer-events-none">
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
      </div>

      <div className="w-full h-[55px] mt-24 md:mt-32 border-y border-white/10 bg-[#16191B] flex items-center justify-center">
        <p className="font-body text-[18px] font-medium text-[#7B7D7E] text-center">
          Enough About Us. Let Them Talk.
        </p>
      </div>
    </section>
  );
};

export default Services;
