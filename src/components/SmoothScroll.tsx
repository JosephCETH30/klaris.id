'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import type LocomotiveScroll from 'locomotive-scroll';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;

    const init = async () => {
      const { default: LocomotiveScroll } = await import('locomotive-scroll');
      scroll = new LocomotiveScroll({
        // @ts-expect-error — v5 options are loosely typed
        lerp: 0.08,
        multiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });
      scrollRef.current = scroll;
    };

    init();

    return () => {
      scroll?.destroy();
      scrollRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const resetScroll = () => {
      const scroll = scrollRef.current;
      if (scroll) {
        scroll.scrollTo(0, { immediate: true });
        scroll.resize();
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Wait for the new page content to paint before recalculating scroll bounds.
    requestAnimationFrame(resetScroll);
  }, [pathname]);

  return <>{children}</>;
}
