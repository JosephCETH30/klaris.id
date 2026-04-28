import type { Metadata } from 'next';
import { clashDisplay, monaSans } from '@/lib/fonts';
import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

export const metadata: Metadata = {
  title: 'Klaris | PT Klaris Tata Visual',
  description: 'Less Talk, More Ship. Worldwide Payment Available.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${monaSans.variable}`}>
      <body className="bg-background text-primaryText selection:bg-white selection:text-black">
        <SmoothScroll>
          <main>
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}