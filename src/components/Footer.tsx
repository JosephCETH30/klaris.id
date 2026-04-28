import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#16191B] flex flex-col overflow-hidden border-t border-white/10 mt-32 mb-4">
      
      {/* GRID LAYOUT: 
        Membagi layar menjadi 2 kolom di Desktop, 1 kolom di Mobile.
        Ada border vertikal di tengah khusus untuk desktop (md:border-r).
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        
        {/* === KOLOM KIRI === */}
        <div className="flex flex-col md:border-r border-white/10">
          
          {/* Main Content Kiri */}
          <div className="p-8 md:p-16 flex-1 flex flex-col justify-start">
            <div className="mb-16 md:mb-24">
              <Image 
                src="/logo_width_screen_White.png" 
                alt="Klaris Logo" 
                width={250} 
                height={30} 
                className="object-contain"
              />
            </div>
            
            <ul className="flex flex-col gap-6 font-body text-[#7B7D7E] text-xl md:text-2xl">
              <li><Link href="#work" className="hover:text-[#FFFFFF] transition-colors">Work</Link></li>
              <li><Link href="#about" className="hover:text-[#FFFFFF] transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-[#FFFFFF] transition-colors">Services</Link></li>
            </ul>
          </div>
          
          {/* Sub-footer Kiri (Bottom Note) */}
          <div className="p-6 flex items-center justify-center md:border-t border-white/10 border-t">
            <p className="font-body text-[#7B7D7E] text-sm tracking-wide">
              functionality over aesthetics
            </p>
          </div>
        </div>

        {/* === KOLOM KANAN === */}
        <div className="flex flex-col">
          
          {/* Main Content Kanan */}
          <div className="p-8 md:p-16 flex-1 flex flex-col justify-start">
            <p className="font-body text-[#7B7D7E] text-xl md:text-2xl mb-8">
              Contact
            </p>
            
            <p className="font-body text-[#FFFFFF] text-xl md:text-2xl leading-relaxed mb-16 md:mb-24 max-w-lg">
              Sentral Senayan I, Jl. Asia Afrika, RT.1/RW.3, Gelora,<br/>
              Tanah Abang, Central Jakarta City, Jakarta 10270
            </p>
            
            <div className="flex flex-col lg:flex-row justify-between w-full font-body text-[#FFFFFF] text-xl md:text-2xl max-w-lg gap-4 lg:gap-0">
              <a href="mailto:work@klaris.id" className="hover:text-[#7B7D7E] transition-colors">
                work@klaris.id
              </a>
              <a href="tel:+628121002126" className="hover:text-[#7B7D7E] transition-colors">
                +62 812 1002 126
              </a>
            </div>
          </div>
          
          {/* Sub-footer Kanan (Copyright) */}
          <div className="p-6 flex items-center justify-center border-t border-white/10">
            <p className="font-body text-[#7B7D7E] text-sm tracking-wide">
              2026 @ All Right Reserved - Klaris.id
            </p>
          </div>
        </div>

      </div>

      {/* GIANT FULL-WIDTH TEXT 
        Menggunakan unit vw (viewport width) agar ukurannya membesar otomatis 
        mengikuti lebar monitor. Margin bottom negatif (-mb) agar dasar hurufnya 
        terpotong rapi sesuai desain.
      */}
      <div className="w-full flex items-end justify-center overflow-hidden leading-none pt-10 md:pt-16 pb-0 select-none">
        <h1 className="font-heading font-bold text-[#FFFFFF] text-[26vw] md:text-[25vw] leading-[0.75] tracking-tighter -mb-[3vw] md:-mb-[4vw] whitespace-nowrap">
          KLARIS
        </h1>
      </div>

    </footer>
  );
};

export default Footer;