'use client';

import React, { useRef, useEffect } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const flows = svg.querySelectorAll<SVGGeometryElement>('[data-flow]');

    // Init stroke-dasharray per path length
    flows.forEach((el) => {
      let len = 0;
      try {
        len = el.getTotalLength();
      } catch {
        const x1 = parseFloat(el.getAttribute('x1') ?? '0');
        const y1 = parseFloat(el.getAttribute('y1') ?? '0');
        const x2 = parseFloat(el.getAttribute('x2') ?? '0');
        const y2 = parseFloat(el.getAttribute('y2') ?? '0');
        len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      }
      el.style.strokeDasharray = String(len);
      el.style.strokeDashoffset = String(len);
    });

    const onScroll = () => {
      const scrollY = window.scrollY;
      const heroH = containerRef.current?.offsetHeight ?? window.innerHeight;
      // Full animation completes at 55% through hero scroll
      const progress = Math.min(1, scrollY / (heroH * 0.55));

      flows.forEach((el, i) => {
        const stagger = (i / flows.length) * 0.45;
        const p = Math.min(1, Math.max(0, (progress - stagger) / (1 - stagger)));
        const len = parseFloat(el.style.strokeDasharray);
        el.style.strokeDashoffset = String(len * (1 - p));
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen pt-[220px] pb-12 px-6 md:px-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Top: Headline & Subheadline */}
      <div className="relative z-10 max-w-5xl">
        <h1
          ref={headlineRef}
          className="font-heading text-5xl md:text-[6rem] leading-[1.1] tracking-tight text-primaryText mb-4"
        >
          Less Talk, More Ship
        </h1>
        <p className="font-body text-xl md:text-2xl text-secondaryText">
          We build what others just <strong className="text-primaryText font-semibold">present</strong> in decks.
        </p>
      </div>

      {/* SVG Wireframe — inline for scroll-driven stroke animation */}
      <div className="hidden md:block absolute left-6 md:left-12 right-0 top-[440px] z-0 pointer-events-none">
        <div className="w-full max-w-[850px] h-[500px]">
          <svg
            ref={svgRef}
            viewBox="0 0 783 399"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* ── Base layer: dark "empty pipe" ── */}
            <ellipse cx="734" cy="159" rx="3" ry="0.5" fill="#2a2c2e" />
            <path d="M734 159V0.5L552 0.500015" stroke="#222426" />
            <line x1="143.5" y1="30.5" x2="143.5" y2="307.5" stroke="#222426" />
            <line x1="331.5" y1="30.5" x2="331.5" y2="307.5" stroke="#222426" />
            <line x1="0" y1="30" x2="519" y2="30" stroke="#222426" />
            <line x1="0" y1="169" x2="519" y2="169" stroke="#222426" />
            <line x1="549.354" y1="0.841957" x2="519.354" y2="30.842" stroke="#222426" />
            <line x1="764" y1="307" x2="686" y2="307" stroke="#222426" />
            <line x1="782" y1="151" x2="704" y2="151" stroke="#222426" />
            <line x1="764" y1="170" x2="686" y2="170" stroke="#222426" />
            <line x1="685.5" y1="307.5" x2="685.5" y2="169.5" stroke="#222426" />
            <line x1="763.5" y1="307.5" x2="763.5" y2="169.5" stroke="#222426" />
            <line x1="781.5" y1="288.5" x2="781.5" y2="150.5" stroke="#222426" />
            <line x1="704.342" y1="150.854" x2="685.342" y2="169.854" stroke="#222426" />
            <line x1="782.354" y1="150.854" x2="763.354" y2="169.854" stroke="#222426" />
            <line x1="782.354" y1="287.854" x2="763.354" y2="306.854" stroke="#222426" />
            <line x1="0" y1="307" x2="519" y2="307" stroke="#222426" />
            <line x1="519.5" y1="30.5" x2="519.5" y2="307.5" stroke="#222426" />
            <circle cx="65" cy="306.5" r="3" fill="#222426" />
            <circle cx="425" cy="306.5" r="3" fill="#222426" />
            <circle cx="237" cy="30.5" r="3" fill="#222426" />
            <path d="M600 399C600 394.2 681.667 334.833 723 306.5" stroke="#222426" />

            {/* ── Animated "water flow" overlay ── */}
            {/* Order = logical flow: top horizontal → diag → verticals → bottom horizontal → right cluster → curve */}
            <line data-flow="true" x1="0" y1="30" x2="519" y2="30" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="549.354" y1="0.841957" x2="519.354" y2="30.842" stroke="white" strokeOpacity="0.6" />
            <path data-flow="true" d="M734 159V0.5L552 0.500015" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="143.5" y1="30.5" x2="143.5" y2="307.5" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="331.5" y1="30.5" x2="331.5" y2="307.5" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="519.5" y1="30.5" x2="519.5" y2="307.5" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="0" y1="169" x2="519" y2="169" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="0" y1="307" x2="519" y2="307" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="782" y1="151" x2="704" y2="151" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="764" y1="170" x2="686" y2="170" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="764" y1="307" x2="686" y2="307" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="704.342" y1="150.854" x2="685.342" y2="169.854" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="782.354" y1="150.854" x2="763.354" y2="169.854" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="782.354" y1="287.854" x2="763.354" y2="306.854" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="685.5" y1="307.5" x2="685.5" y2="169.5" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="763.5" y1="307.5" x2="763.5" y2="169.5" stroke="white" strokeOpacity="0.75" />
            <line data-flow="true" x1="781.5" y1="288.5" x2="781.5" y2="150.5" stroke="white" strokeOpacity="0.75" />
            <path data-flow="true" d="M600 399C600 394.2 681.667 334.833 723 306.5" stroke="white" strokeOpacity="0.75" />
          </svg>
        </div>
      </div>

      {/* Bottom: Services List */}
      <div className="relative z-10 flex-1 flex flex-col justify-end items-end mt-32 md:mt-0 w-full pb-8 md:pb-16">
        <div className="w-full flex justify-center md:justify-between items-end relative">
          <div className="flex flex-col items-end gap-7 text-sm md:text-[20px] font-semibold text-secondaryText uppercase text-right ml-auto">
            <span className="hover:text-primaryText transition-colors cursor-default">UX Design</span>
            <span className="hover:text-primaryText transition-colors cursor-default">Website Development</span>
            <span className="hover:text-primaryText transition-colors cursor-default">Mobile App Development</span>
            <span className="hover:text-primaryText transition-colors cursor-default">AI Integration</span>
            <span className="hover:text-primaryText transition-colors cursor-default">QA Testing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
