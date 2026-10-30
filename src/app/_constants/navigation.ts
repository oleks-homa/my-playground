import { MAIN_ROUTES } from '@/shared/constants/routes';
import { NavLink } from '@/shared/types/links';

import { F1_ROUTES } from '@/modules/f1';

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'Home', href: MAIN_ROUTES.home },
  { label: 'F1', href: F1_ROUTES.home },
];
