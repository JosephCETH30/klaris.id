import React from 'react';

const PageDivider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-[55px] border-y border-white/10 bg-[#16191B] flex items-center justify-center">
      <p className="font-body text-sm md:text-[18px] font-medium text-[#7B7D7E] text-center px-4">
        {children}
      </p>
    </div>
  );
};

export default PageDivider;
