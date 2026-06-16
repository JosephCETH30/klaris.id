import type { Metadata } from 'next';
import SiteChrome from '@/components/SiteChrome';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Us | Klaris',
  description: 'PT Klaris Tata Visual — a Jakarta-based product studio that ships digital products.',
};

export default function AboutUsPage() {
  return (
    <SiteChrome>
      <AboutPageContent />
    </SiteChrome>
  );
}
