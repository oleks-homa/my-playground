'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { MAIN_ROUTES } from '@/shared/constants/routes';
import { NavLink } from '@/shared/types/links';

const HomeLink: NavLink = { label: 'Home', href: MAIN_ROUTES.home };

interface Props {
  links: NavLink[];
  bgColor?: string;
}
export const Header = ({ links, bgColor = 'bg-blue-400' }: Props) => {
  const pathname = usePathname();
  const allLinks = pathname === MAIN_ROUTES.home ? links : [HomeLink, ...links];

  return (
    <header className={`flex w-full h-10 rounded-lg items-center justify-center ${bgColor}`}>
      <nav className="flex gap-4">
        {allLinks.map((link: NavLink) => (
          <Link key={link.href} href={link.href} className="text-lg font-semibold">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
