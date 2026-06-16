import type { Metadata } from 'next';
import SiteChrome from '@/components/SiteChrome';
import TestimonialsPageContent from '@/components/TestimonialsPageContent';

export const metadata: Metadata = {
  title: 'Testimonials | Klaris',
  description: 'What clients say about working with Klaris.',
};

export default function TestimonialsPage() {
  return (
    <SiteChrome>
      <TestimonialsPageContent />
    </SiteChrome>
  );
}
