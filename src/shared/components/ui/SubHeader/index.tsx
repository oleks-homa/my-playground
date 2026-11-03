import { Container } from '@/shared/components/ui/Container';
import { NavLinks } from '@/shared/components/ui/NavLinks';
import { NavLink } from '@/shared/types/links';

interface Props {
  links: NavLink[];
}

export const SubHeader = ({ links }: Props) => {
  return (
    <nav className="w-full h-12 bg-slate-800">
      <Container className="flex h-full items-center gap-4">
        <NavLinks
          links={links}
          activeClassName="text-slate-50 underline decoration-red-500 decoration-2 underline-offset-6"
          inactiveClassName="text-slate-400"
        />
      </Container>
    </nav>
  );
};
