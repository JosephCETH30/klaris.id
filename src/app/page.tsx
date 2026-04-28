import Ticker from '@/components/Ticker';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import SelectedWorks from '@/components/SelectedWorks';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Ticker />
      <Navbar />
      <Hero />
      <Brands />
      <SelectedWorks />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}