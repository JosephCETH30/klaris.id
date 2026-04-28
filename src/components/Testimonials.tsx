import React from 'react';

const testimonials = [
  {
    id: '01',
    name: 'Gorbiyan Khurmaini',
    role: 'CEO, HalalHero.id',
    quote: '"Yosef finds solutions and ideas incredibly fast. We first met during a 2023 internship – and out of everyone, he was the one who actually built the website. Two years of working together, and it\'s been one of the most impactful partnerships we\'ve had. Worth every bit of it."',
  },
  {
    id: '02',
    name: 'Michela Vieri',
    role: 'Product Designer NUS',
    quote: '"He\'s fast – especially for someone at his level. I gave him a one-week deadline, and he finished ahead of schedule. Open to feedback, takes revisions well. So far, really helpful to work with."',
  },
  {
    id: '03',
    name: 'Yosef Rafael',
    role: 'CEO, Quesera.id',
    quote: '"I can\'t exactly review myself, can I? I built both Quesera.id and Klaris.id from scratch – solo. So instead of a testimonial, just go check the product. That\'s my review."',
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full px-6 md:px-12 pt-32 pb-32 bg-background overflow-hidden">
      <div className="w-full flex flex-col z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <p className="font-body text-[#7B7D7E] font-normal text-sm md:text-base mb-2">
              /testimonials
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#FFFFFF] tracking-tight leading-none uppercase">
              Testimonials
            </h2>
          </div>
          
          <div className="md:text-right">
            <p className="font-body text-[#7B7D7E] font-medium text-base md:text-xl md:max-w-md leading-relaxed">
              Don't Take Our Word For It. Hear it from the people we've actually worked with.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              // TWEAK: min-h-[400px] dan flex-col justify-between memastikan quote selalu di bawah
              className="w-full flex flex-col justify-between bg-[#1A1C1E] p-8 md:p-12 rounded-sm min-h-[400px] md:min-h-[480px] transition-colors hover:bg-white/[0.03]"
            >
              
              {/* Card Header: Name, Role & Number */}
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col">
                  <h4 className="font-body text-[#FFFFFF] text-lg font-medium mb-1">
                    {item.name}
                  </h4>
                  <p className="font-body text-[#7B7D7E] text-sm md:text-base">
                    {item.role}
                  </p>
                </div>
                
                {/* Background Number */}
                <span className="font-heading font-bold text-3xl md:text-4xl text-[#2A2A2A]">
                  {item.id}
                </span>
              </div>

              {/* Card Body: Quote */}
              <div className="mt-12 md:mt-0">
                <p className="font-body text-[#7B7D7E] text-base md:text-lg leading-relaxed">
                  {item.quote}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;