import React from 'react';

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'right';
};

const SectionHeader = ({ label, title, description, align = 'left' }: SectionHeaderProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 ${
        align === 'right' ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      <div>
        <p className="font-body text-[#7B7D7E] font-normal text-sm md:text-base mb-2">{label}</p>
        <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#FFFFFF] tracking-tight leading-none">
          {title}
        </h2>
      </div>
      {description && (
        <p className="font-body text-[#7B7D7E] font-medium text-base md:text-xl md:max-w-md leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
