'use client';

import React, { useRef, useEffect, useCallback } from 'react';

type SubPageHeroProps = {
  label: string;
  title: string;
  description: string;
};

const BASE_TILT_X = -10;
const AUTO_SPIN_SPEED = 0.18;
const DRAG_SENSITIVITY = 0.5;

const SubPageHero = ({ label, title, description }: SubPageHeroProps) => {
  const cubeInnerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: BASE_TILT_X, y: 0 });
  const isDraggingRef = useRef(false);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);

  const applyTransform = useCallback(() => {
    if (!cubeInnerRef.current) return;
    const { x, y } = rotationRef.current;
    cubeInnerRef.current.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
  }, []);

  useEffect(() => {
    const tick = () => {
      if (!isDraggingRef.current) {
        rotationRef.current.y += AUTO_SPIN_SPEED;
      }
      applyTransform();
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [applyTransform]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.style.cursor = 'grabbing';
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !lastPointerRef.current) return;

    const dx = e.clientX - lastPointerRef.current.x;
    const dy = e.clientY - lastPointerRef.current.y;
    lastPointerRef.current = { x: e.clientX, y: e.clientY };

    rotationRef.current.y += dx * DRAG_SENSITIVITY;
    rotationRef.current.x -= dy * DRAG_SENSITIVITY;
    applyTransform();
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    lastPointerRef.current = null;
    e.currentTarget.releasePointerCapture(e.pointerId);
    e.currentTarget.style.cursor = 'grab';
  };

  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[80vh] pt-[220px] pb-20 px-6 md:px-12 overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-start gap-8 md:gap-14 lg:gap-20 xl:gap-24 w-full max-w-6xl">
        <div className="max-w-2xl md:max-w-3xl">
          <p className="font-body text-[#7B7D7E] font-normal text-sm md:text-base mb-4">{label}</p>
          <h1 className="font-heading text-5xl md:text-[6rem] leading-[1.1] tracking-tight text-primaryText mb-6">
            {title}
          </h1>
          <p className="font-body text-xl md:text-2xl text-secondaryText max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        <div
          className="hidden md:flex shrink-0 items-start justify-center -mt-2 lg:-mt-4 w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] cursor-grab select-none touch-none"
          style={{ perspective: '900px' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          aria-label="Drag to spin 3D cube"
          role="img"
        >
          <div
            ref={cubeInnerRef}
            className="relative w-full h-full"
            style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            <div
              className="absolute inset-0 border border-white/20 bg-[#111111]"
              style={{ transform: 'translateZ(70px)' }}
            />
            <div
              className="absolute inset-0 border border-white/10 bg-[#16191B]"
              style={{ transform: 'translateZ(-70px) rotateY(180deg)' }}
            />
            <div
              className="absolute inset-0 border border-white/15 bg-[#1A1C1E]"
              style={{ transform: 'rotateY(-90deg) translateZ(70px)' }}
            />
            <div
              className="absolute inset-0 border border-white/15 bg-[#1A1C1E]"
              style={{ transform: 'rotateY(90deg) translateZ(70px)' }}
            />
            <div
              className="absolute inset-0 border border-white/20 bg-[#222426]"
              style={{ transform: 'rotateX(90deg) translateZ(70px)' }}
            />
            <div
              className="absolute inset-0 border border-white/10 bg-[#0D0D0D]"
              style={{ transform: 'rotateX(-90deg) translateZ(70px)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubPageHero;
