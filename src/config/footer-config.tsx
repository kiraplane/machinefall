'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
        { title: 'Guide Hub', href: Routes.Guides, external: false },
        { title: 'Should You Buy?', href: Routes.Review, external: false },
      ],
    },
    {
      title: 'Logistics',
      items: [
        { title: 'Depots', href: Routes.DepotsLogistics, external: false },
        {
          title: 'Workers & Carts',
          href: Routes.WorkersCarts,
          external: false,
        },
        {
          title: 'Naval Transport',
          href: Routes.NavalTransport,
          external: false,
        },
      ],
    },
    {
      title: 'Combat',
      items: [
        { title: 'Base Defense', href: Routes.BaseDefense, external: false },
        {
          title: 'Army Formations',
          href: Routes.ArmyFormations,
          external: false,
        },
        {
          title: 'Boss Preparation',
          href: Routes.BossPreparation,
          external: false,
        },
      ],
    },
    {
      title: 'World',
      items: [
        { title: 'Technology', href: Routes.TechnologyEras, external: false },
        { title: 'Lairs & Map', href: Routes.LairsWorldMap, external: false },
        {
          title: 'Cities & Camps',
          href: Routes.CitiesRefugeeCamps,
          external: false,
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        { title: 'Privacy', href: Routes.PrivacyPolicy, external: false },
        { title: 'Terms', href: Routes.TermsOfService, external: false },
        { title: 'Cookies', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}
