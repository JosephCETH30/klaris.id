'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

const brandItems = [
  { label: 'Halal Hero', src: '/halalheroidlogo-upscale 1.png' },
  { label: 'DotProjects', src: '/Gemini_Generated_Image_8dxcfa8dxcfa8dxc 1.png' },
  { label: 'QQ', src: '/Gemini_Generated_Image_smwenysmwenysmwe 1.png' },
];

const Brands = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0px)';
              }, i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    // TWEAK: Pastikan section terluar HANYA sebagai block container biasa (tanpa flex, tanpa px-6)
    <section
      ref={sectionRef}
      className="relative w-full mt-20 pt-24 border-t border-[#fff]/15 overflow-hidden"
    >
      
      {/* INNER WRAPPER: Di sinilah padding dan alignment tengah kita letakkan */}
      <div className="w-full px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center z-10">
        
        {/* Faded Background Text Effect */}
        <div className="relative w-full flex flex-col items-center justify-center mb-24 mt-12">
          <h2 className="font-heading text-4xl md:text-7xl font-bold text-primaryText opacity-5 absolute -top-8 md:-top-16 text-center w-full whitespace-nowrap">
            Brands That Shipped With Us
          </h2>
          <h2 className="font-heading text-4xl md:text-7xl font-bold text-primaryText opacity-20 absolute -top-4 md:-top-8 text-center w-full whitespace-nowrap">
            Brands That Shipped With Us
          </h2>
          <h2 className="font-heading text-4xl md:text-7xl font-bold text-primaryText relative z-10 text-center w-full">
            Brands That Shipped With Us
          </h2>
        </div>

        {/* Client Logos dengan Intersection Observer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 items-center justify-items-center w-full">
          {brandItems.map((brand, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="w-52 md:w-64 h-32 relative grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{
                opacity: 0,
                transform: 'translateY(36px)',
                transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <Image
                src={brand.src}
                alt={brand.label}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Separator / Divider - Karena Section block normal, w-full otomatis full screen presisi */}
      <div className="w-full h-[55px] mt-32 md:mt-40 border-y border-white/10 bg-[#16191B] flex items-center justify-center">
        <p className="font-body text-[18px] font-medium text-[#7B7D7E] text-center">
          Here's What We Actually Do.
        </p>
      </div>
    </section>
  );
};

export default Brands;