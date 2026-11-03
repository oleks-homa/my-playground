import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Header } from '@/shared/components/ui/Header';

import { MAIN_NAV_LINKS } from './_constants/navigation';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: 'App homepage',
  description: 'This homepage leads to different pages',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${poppins.variable} font-main h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header links={MAIN_NAV_LINKS} />
        {children}
      </body>
    </html>
  );
}
