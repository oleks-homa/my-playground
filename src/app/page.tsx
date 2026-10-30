import Link from 'next/link';

import { MAIN_NAV_LINKS } from '@/app/_constants/navigation';

import { Button } from '@/shared/components/ui/Button';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-8 py-4 px-8 bg-white dark:bg-black">
        <div className="flex gap-4 bg-blue-400 w-full h-10 rounded-lg items-center justify-center">
          {/** TODO: replace with a shared Header component that accepts an array of links and some styles */}
          {MAIN_NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-lg font-semibold">
              {link.label}
            </Link>
          ))}
        </div>
        <span className="text-center text-amber-900">
          This app will be great and random, below is the set of basic buttons
        </span>
        <div className="flex gap-2">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </main>
    </div>
  );
}
