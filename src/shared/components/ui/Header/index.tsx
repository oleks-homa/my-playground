import { Container } from '@/shared/components/ui/Container';
import { NavLinks } from '@/shared/components/ui/NavLinks';
import { MAIN_ROUTES } from '@/shared/constants/routes';
import { NavLink } from '@/shared/types/links';

const HomeLink: NavLink = { label: 'Home', href: MAIN_ROUTES.home };

interface Props {
  links: NavLink[];
  className?: string;
}
export const Header = ({ links, className = 'bg-slate-900' }: Props) => {
  const allLinks = [HomeLink, ...links];

  return (
    <header className={`w-full h-16 ${className}`}>
      <Container className="flex h-full items-center justify-between">
        <span className="text-slate-50 text-lg font-semibold">Sports World</span>
        <nav className="flex gap-4">
          <NavLinks
            links={allLinks}
            activeClassName="text-slate-50"
            inactiveClassName="text-slate-400"
          />
        </nav>
      </Container>
    </header>
  );
};
