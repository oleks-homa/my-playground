import Link from 'next/link';

import { F1_OVERVIEW_MAIN_DESTINATIONS } from '@/modules/f1/constants/navigation';

export default function F1Page() {
  return (
    <section className="w-full">
      <h1 className="text-slate-50 font-bold">Formula 1</h1>
      <div className="grid grid-cols-2 mt-2 w-full gap-2 md:grid-cols-4">
        {F1_OVERVIEW_MAIN_DESTINATIONS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="flex items-center p-2 text-slate-50 font-bold h-16 bg-slate-900 border border-slate-800 rounded-lg"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
