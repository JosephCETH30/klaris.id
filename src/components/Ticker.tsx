import React from 'react';

const segment = "Worldwide Payment Available   •   Based In Indonesia   •   Function over Aesthetics   •   ";
const tickerText = segment.repeat(6);

const Ticker = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-[#16191B] text-secondaryText overflow-hidden py-2 font-body text-xs md:text-sm font-medium tracking-wide">
      <div className="animate-marquee-slow whitespace-nowrap">
        {tickerText}
      </div>
    </div>
  );
};

export default Ticker;
