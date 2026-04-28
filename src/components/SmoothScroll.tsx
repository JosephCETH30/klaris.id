'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let scroll: { destroy: () => void } | null = null;

    const init = async () => {
      const { default: LocomotiveScroll } = await import('locomotive-scroll');
      scroll = new LocomotiveScroll({
        // @ts-expect-error — v5 options are loosely typed
        lerp: 0.08,
        multiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });
    };

    init();

    return () => {
      scroll?.destroy();
    };
  }, []);

  return <>{children}</>;
}
