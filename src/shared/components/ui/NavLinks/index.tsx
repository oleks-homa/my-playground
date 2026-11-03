'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavLink } from '@/shared/types/links';

interface Props {
  links: NavLink[];
  activeClassName: string;
  inactiveClassName: string;
}

export const NavLinks = ({ links, activeClassName, inactiveClassName }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link: NavLink) => (
        <Link
          key={link.href}
          href={link.href}
          className={`text-sm ${pathname === link.href ? activeClassName : inactiveClassName}`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};
