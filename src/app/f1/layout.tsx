import { Header } from '@/shared/components/ui/Header';

import { F1_NAV_LINKS } from '@/modules/f1';

export default function F1Layout({ children }: LayoutProps<'/f1'>) {
  return (
    <main className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black w-full gap-8 py-4 px-8">
      <Header links={F1_NAV_LINKS} />
      {children}
    </main>
  );
}
