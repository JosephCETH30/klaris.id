'use client'; // Wajib karena kita melacak pergerakan mouse

import React from 'react';

const services = [
  {
    id: '01',
    title: 'UI/UX DESIGN & RESEARCH',
    description: 'We study how your users think, then design interfaces that feel intuitive from the first tap. From wireframes to interactive prototypes – tested, validated, and ready for development.',
  },
  {
    id: '02',
    title: 'WEB DEVELOPMENT',
    description: 'High-performance web apps built with Next.js, React, and Tailwind CSS. Whether it’s a company profile, a complex dashboard, or a full SaaS platform – we build it fast and build it right.',
  },
  {
    id: '03',
    title: 'MOBILE APP DEVELOPMENT',
    description: 'Native-feeling apps for iOS and Android. Smooth navigation, stable performance, and the same quality experience your users expect from the web – now in their pocket.',
  },
  {
    id: '04',
    title: 'AI INTEGRATION',
    description: 'Smart chatbots, recommendation engines, predictive analytics, and natural language processing – plugged directly into your existing product to automate what used to take hours.',
  },
  {
    id: '05',
    title: 'QUALITY ASSURANCE & TESTING',
    description: 'Cross-platform testing, AI logic validation, and user acceptance testing before anything goes live. We catch the bugs so your users never have to.',
  }
];

const Services = () => {
  
  // Fungsi untuk menangkap kordinat mouse saat hover di dalam satu area service
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Kalkulasi nilai X dan Y menjadi angka -1 (kiri/atas mentok) sampai 1 (kanan/bawah mentok)
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

    // Lempar nilai ke CSS Variables
    e.currentTarget.style.setProperty('--mouse-x', `${x}`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}`);
  };

  // Kembalikan ke posisi awal (0) kalau mouse keluar dari area
  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--mouse-x', '0');
    e.currentTarget.style.setProperty('--mouse-y', '0');
  };

  return (
    <section id="services" className="relative w-full px-6 md:px-12 pt-32 pb-20 bg-background overflow-hidden">
      <div className="w-full flex flex-col z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="font-body text-[#7B7D7E] font-normal text-sm md:text-base mb-2">
              /services
            </p>
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
              className="group relative w-full border-t border-white/10 pt-12 pb-4 "
              // TWEAK: Panggil fungsi tracker mouse di setiap container service
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute top-0 right-0 md:right-8 -translate-y-1/2 z-20">
                <button className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-md bg-[#16191B] text-[#FFFFFF] font-body text-sm font-medium cursor-pointer">
                  I want this
                  <svg 
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="transform transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* CARD CONTENT */}
              <div className="flex flex-col md:flex-row justify-between items-start w-full relative z-10">
                
                {/* Left Side: Number & Text */}
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

                {/* GRAPHIC (Mouse Move Parallax Cards) */}
                <div className="hidden md:flex relative w-[120px] h-[100px] mt-8 md:mt-0 items-end justify-end pointer-events-none">
                  
                  {/* Kartu Belakang (Biru Tua) - Geraknya paling sedikit (dikali 15px) */}
                  <div 
                    className="absolute bottom-[-15px] right-[45px] w-[35px] h-[75px] bg-[#2563EB] rounded-t-md origin-bottom transition-transform duration-300 ease-out"
                    style={{ 
                      transform: 'translate(calc(var(--mouse-x, 0) * 10px), calc(var(--mouse-y, 0) * 10px)) rotate(-12deg)' 
                    }}
                  ></div>
                  
                  {/* Kartu Tengah (Biru Muda) - Geraknya sedang (dikali 25px) */}
                  <div 
                    className="absolute bottom-[-15px] right-[22px] w-[35px] h-[90px] bg-[#38BDF8] rounded-t-md origin-bottom transition-transform duration-300 ease-out"
                    style={{ 
                      transform: 'translate(calc(var(--mouse-x, 0) * 20px), calc(var(--mouse-y, 0) * 20px)) rotate(-6deg)' 
                    }}
                  ></div>
                  
                  {/* Kartu Depan (Putih) - Geraknya paling jauh (dikali 35px) */}
                  <div 
                    className="absolute bottom-[-15px] right-0 w-[35px] h-[105px] bg-[#FFFFFF] rounded-t-md origin-bottom transition-transform duration-300 ease-out"
                    style={{ 
                      transform: 'translate(calc(var(--mouse-x, 0) * 35px), calc(var(--mouse-y, 0) * 35px)) rotate(0deg)' 
                    }}
                  ></div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>    
      {/* Separator / Divider - Karena Section block normal, w-full otomatis full screen presisi */}
      <div className="w-full h-[55px] mt-24 md:mt-32 border-y border-white/10 bg-[#16191B] flex items-center justify-center">
        <p className="font-body text-[18px] font-medium text-[#7B7D7E] text-center">
         Enough About Us. Let Them Talk.
        </p>
      </div>
    </section>
  );
};

export default Services;