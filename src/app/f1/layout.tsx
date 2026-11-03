import { Container } from '@/shared/components/ui/Container';
import { SubHeader } from '@/shared/components/ui/SubHeader';

import { F1_NAV_LINKS } from '@/modules/f1';

export default function F1Layout({ children }: LayoutProps<'/f1'>) {
  return (
    <main className="flex flex-col flex-1 items-center font-sans w-full bg-slate-950">
      <SubHeader links={F1_NAV_LINKS} />
      <Container className="flex flex-col flex-1 items-center gap-8 py-4">{children}</Container>
    </main>
  );
}
