'use client'; 

import React, { MouseEvent, useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: '01',
    title: 'HALAL HERO',
    description: 'Thousands of UMKM now get halal certified without the paperwork nightmare.',
    image: '/Halalhero_Projects_3.png', 
  },
  {
    id: '02',
    title: 'DOT PROJECTS',
    description: 'A Singapore consultancy finally has a digital presence that matches their 10 years of expertise.',
    image: '/DotProjects_Projects_2.png',
  },
  {
    id: '03',
    title: 'QUESERA SKRIPSI',
    description: 'Students stop procrastinating and actually finish their thesis, one chapter at a time.',
    image: '/Quesera_Projects_1.png',
  }
];

const SelectedWorks = () => {
  // State untuk melacak mode tampilan saat ini
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="work" className="relative w-full px-6 md:px-12 pt-32 pb-20 bg-background overflow-hidden transition-all duration-500">
      <div className="w-full flex flex-col z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div>
            <p className="font-body text-[#7B7D7E] font-normal text-sm md:text-base mb-2">
              /our-projects
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-semibold text-[#FFFFFF] tracking-tight">
              SELECTED WORKS
            </h2>
          </div>
          
          {/* View Toggle */}
          {/* <div className="flex border border-white/10 rounded-md p-1 bg-[#111111]">
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-[#1A1A1A] text-[#FFFFFF]' : 'text-[#7B7D7E] hover:text-[#FFFFFF]'}`}
              aria-label="List View"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-[#1A1A1A] text-[#FFFFFF]' : 'text-[#7B7D7E] hover:text-[#FFFFFF]'}`}
              aria-label="Grid View"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </button>
          </div> */}
        </div>

        {/* Projects Stack - Berubah dinamis sesuai State */}
        <div className={`transition-all duration-500 w-full ${viewMode === 'list' ? 'flex flex-col gap-24 md:gap-32' : 'grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16'}`}>
          {projects.map((project) => (
            <div key={project.id} className="w-full flex flex-col cursor-pointer group">
              
              {/* Image Container */}
              <div 
                // Tinggi gambar disesuaikan: Lebih pendek di mode grid agar proporsional
                className={`w-full relative overflow-hidden bg-[#111111] mb-6 md:mb-8 rounded-sm group/img cursor-none transition-all duration-500 ${viewMode === 'list' ? 'h-[300px] md:h-[650px]' : 'h-[250px] md:h-[450px]'}`}
                onMouseMove={handleMouseMove}
              >
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-body text-sm z-0">
                  {project.image}
                </div>
                
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover/img:scale-105 z-10"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>

                {/* MAGNETIC ECLIPSE CURSOR */}
                <div 
                  className="pointer-events-none absolute left-0 top-0 z-30 opacity-0 group-hover/img:opacity-100"
                  style={{
                    transform: 'translate(var(--mouse-x, 50%), var(--mouse-y, 50%))',
                    transition: 'transform 0.15s ease-out, opacity 0.3s ease-out'
                  }}
                >
                  <div className="w-28 h-28 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex flex-col items-center justify-center scale-50 group-hover/img:scale-100 transition-transform duration-[0.6s] ease-[0.16,1,0.3,1]">
                    <span className="font-heading text-xs md:text-sm font-bold text-[#0D0D0D] uppercase tracking-wider text-center leading-tight">
                      View<br />Project
                    </span>
                  </div>
                </div>

              </div>

              {/* Title & Description Layout - Berubah orientasinya di mode grid */}
              <div className={`flex ${viewMode === 'list' ? 'flex-col md:flex-row justify-between items-start' : 'flex-col items-start gap-2'} gap-4`}>
                <h3 className={`font-heading font-bold text-[#FFFFFF] uppercase leading-none transition-all duration-500 ${viewMode === 'list' ? 'text-[40px] max-w-md' : 'text-3xl max-w-full'}`}>
                  {project.title}
                </h3>
                <p className={`font-body font-medium text-[#fff]/40 leading-relaxed mt-2 md:mt-0 transition-all duration-500 ${viewMode === 'list' ? 'text-sm md:text-[18px] md:text-right max-w-md' : 'text-sm text-left max-w-full'}`}>
                  {project.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Separator / Divider - Karena Section block normal, w-full otomatis full screen presisi */}
      <div className="w-full h-[55px] mt-24 md:mt-32 border-y border-white/10 bg-[#16191B] flex items-center justify-center">
        <p className="font-body text-[18px] font-medium text-[#7B7D7E] text-center">
          Now Imagine What We Can Build For You.
        </p>
      </div>
    </section>
  );
};

export default SelectedWorks;