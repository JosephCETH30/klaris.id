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
    <section
      ref={sectionRef}
      className="relative w-full mt-12 md:mt-20 pt-16 md:pt-24 border-t border-[#fff]/15 overflow-hidden"
    >
      <div className="w-full px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center z-10">
        
        {/* Faded Background Text Effect */}
        <div className="relative w-full flex flex-col items-center justify-center mb-16 md:mb-24 mt-12 md:mt-16 px-4">
          
          {/* TWEAK: 
              - Hapus whitespace-nowrap.
              - Tambah leading-[1.1] agar spasi antar baris rapat saat jadi 2 baris di HP.
              - Tambah <br className="md:hidden" /> untuk memastikan teks patah rapi di HP tapi tetap sebaris di Desktop.
              - Top margin disesuaikan (-top-4, -top-2).
          */}
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primaryText opacity-5 absolute -top-4 md:-top-12 lg:-top-16 text-center w-full leading-[1.1]">
            Brands That Shipped <br className="md:hidden" /> With Us
          </h2>
          
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primaryText opacity-20 absolute -top-2 md:-top-6 lg:-top-8 text-center w-full leading-[1.1]">
            Brands That Shipped <br className="md:hidden" /> With Us
          </h2>
          
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primaryText relative z-10 text-center w-full leading-[1.1]">
            Brands That Shipped <br className="md:hidden" /> With Us
          </h2>

        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 items-center justify-items-center w-full">
          {brandItems.map((brand, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="w-48 md:w-64 h-24 md:h-32 relative grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500 cursor-pointer"
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

      {/* Separator / Divider */}
      <div className="w-full h-[55px] mt-24 md:mt-40 border-y border-white/10 bg-[#16191B] flex items-center justify-center">
        <p className="font-body text-sm md:text-[18px] font-medium text-[#7B7D7E] text-center px-4">
          Here's What We Actually Do.
        </p>
      </div>
    </section>
  );
};

export default Brands;