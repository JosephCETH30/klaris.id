'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = ['Work', 'About Us', 'Testimonials'];
const STRIP_COUNT = 5;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Mencegah scroll body saat menu overlay terbuka di Mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Navbar */}
      <header
        // TWEAK: px-4 untuk mobile, md:px-12 untuk desktop. top disesuaikan.
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-12 flex justify-between items-center py-4 transition-all duration-500 mt-8 md:mt-[36px] ${
          isScrolled
            ? 'bg-[#16191B]/1' // Tambahan backdrop-blur biar elegan pas discroll
            : ''
        }`}
      >
        <Link href="/" className="flex items-center z-50 hover:opacity-80 transition-opacity">
          <Image
            src="/logo_grid_white.png"
            alt="Klaris Logo"
            // TWEAK: Ukuran logo disesuaikan sedikit untuk mobile
            width={28} 
            height={28}
            className="object-contain md:w-[32px] md:h-[32px]"
            priority
          />
        </Link>

        <div className="flex items-center gap-4 md:gap-6 z-50">
          {/* TWEAK: Sembunyikan 'Lets Talk' di layar kecil (hidden md:flex) */}
          <Link
            href="#contact"
            className="cursor-pointer hidden md:flex items-center gap-2 font-body text-sm font-medium text-primaryText hover:text-secondaryText transition-colors"
          >
            Lets Talk
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <button
            onClick={toggleMenu}
            className="cursor-pointer flex items-center gap-3 group"
            aria-label="Toggle Menu"
          >
            {/* TWEAK: Teks "Menu/Close" disembunyikan di HP biar lebih clean, cuma icon aja */}
            <span className="hidden md:block cursor-pointer font-body text-sm font-medium text-primaryText group-hover:text-secondaryText transition-colors">
              {isMenuOpen ? 'Close' : 'Menu'}
            </span>

            {/* Animated hamburger → X (Ukurannya disesuaikan) */}
            <div className="relative w-5 h-[14px]">
              <span
                className="absolute left-0 block h-[2px] w-5 bg-primaryText origin-center transition-all duration-400"
                style={{
                  top: isMenuOpen ? '6px' : '0px',
                  transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'top 300ms ease, transform 300ms ease 150ms',
                }}
              />
              <span
                className="absolute left-0 top-[6px] block h-[2px] w-5 bg-primaryText transition-opacity duration-200"
                style={{ opacity: isMenuOpen ? 0 : 1 }}
              />
              <span
                className="absolute block h-[2px] bg-primaryText origin-center transition-all duration-400"
                style={{
                  right: isMenuOpen ? 'auto' : '0px',
                  left: isMenuOpen ? '0px' : 'auto',
                  bottom: isMenuOpen ? '6px' : '0px',
                  width: isMenuOpen ? '20px' : '12px',
                  transform: isMenuOpen ? 'rotate(-45deg)' : 'rotate(0deg)',
                  transition: 'bottom 300ms ease, width 200ms ease, left 200ms ease, right 200ms ease, transform 300ms ease 150ms',
                }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Wave strip overlay — 5 horizontal panels staggered */}
      <div className="fixed inset-0 z-40 overflow-hidden pointer-events-none">
        {Array.from({ length: STRIP_COUNT }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 w-full bg-[#181B1D]"
            style={{
              height: `${100 / STRIP_COUNT}%`,
              top: `${(100 / STRIP_COUNT) * i}%`,
              transform: isMenuOpen ? 'translateX(0%)' : 'translateX(105%)',
              transition: 'transform 750ms cubic-bezier(0.76, 0, 0.24, 1)',
              transitionDelay: isMenuOpen
                ? `${i * 55}ms`
                : `${(STRIP_COUNT - 1 - i) * 45}ms`,
              pointerEvents: isMenuOpen ? 'auto' : 'none',
            }}
          />
        ))}
      </div>

      {/* Menu content — fades in after strips settle */}
      <div
        className="fixed inset-0 z-[45] flex flex-col justify-center items-center px-4"
        style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
      >
        <nav className="flex flex-col text-center gap-8 md:gap-10">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsMenuOpen(false)}
              // TWEAK: Teks menu diperkecil untuk layar HP (text-4xl vs text-[5.5rem])
              className="font-heading text-4xl md:text-[5.5rem] font-bold text-primaryText hover:text-secondaryText tracking-tight"
              style={{
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateY(0px)' : 'translateY(28px)',
                transition: 'opacity 500ms ease, transform 500ms ease',
                transitionDelay: isMenuOpen
                  ? `${STRIP_COUNT * 55 + index * 90}ms`
                  : `${index * 30}ms`,
              }}
            >
              {item}
            </Link>
          ))}
          
          {/* TWEAK: Munculkan 'Lets Talk' di dalam menu HANYA untuk versi mobile */}
          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="md:hidden mt-8 flex items-center justify-center gap-2 font-body text-lg font-medium text-primaryText hover:text-secondaryText transition-colors"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? 'translateY(0px)' : 'translateY(28px)',
              transition: 'opacity 500ms ease, transform 500ms ease',
              transitionDelay: isMenuOpen
                ? `${STRIP_COUNT * 55 + NAV_ITEMS.length * 90}ms`
                : '0ms',
            }}
          >
            Lets Talk
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;