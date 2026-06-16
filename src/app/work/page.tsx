import type { Metadata } from 'next';
import SiteChrome from '@/components/SiteChrome';
import WorkPageContent from '@/components/WorkPageContent';

export const metadata: Metadata = {
  title: 'Work | Klaris',
  description: 'Selected works and shipped products by PT Klaris Tata Visual.',
};

export default function WorkPage() {
  return (
    <SiteChrome>
      <WorkPageContent />
    </SiteChrome>
  );
}
