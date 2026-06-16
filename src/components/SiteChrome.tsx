import React from 'react';
import Ticker from '@/components/Ticker';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SiteChrome = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Ticker />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default SiteChrome;
