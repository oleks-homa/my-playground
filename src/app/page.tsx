import { MAIN_NAV_LINKS } from '@/app/_constants/navigation';

import { Button } from '@/shared/components/ui/Button';
import { Header } from '@/shared/components/ui/Header';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center gap-8 py-4 px-8 bg-white dark:bg-black">
        <Header links={MAIN_NAV_LINKS} />
        <span className="text-center text-amber-900">
          This app will be great and random, below is the set of basic buttons
        </span>
        <div className="flex flex-col gap-2 md:flex-row">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </main>
    </div>
  );
}
