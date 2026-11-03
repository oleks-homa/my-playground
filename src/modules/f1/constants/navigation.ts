import { NavLink } from '@/shared/types/links';

import { F1_ROUTES } from './routes';

export const F1_NAV_LINKS: NavLink[] = [{ label: 'Overview', href: F1_ROUTES.home }];

// TODO: Eventually replace this array with actual navigation links
export const F1_OVERVIEW_MAIN_DESTINATIONS: NavLink[] = [
  { label: 'Drivers', href: F1_ROUTES.home },
  { label: 'Teams', href: F1_ROUTES.home },
  { label: 'Races', href: F1_ROUTES.home },
  { label: 'Standings', href: F1_ROUTES.home },
];
