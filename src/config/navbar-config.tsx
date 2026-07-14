'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { BookOpen, Download, Factory, Map, Shield, Truck } from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'Every current Machinefall guide in one index.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description: 'First base, first route and campaign priorities.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Technology & eras',
          description: 'Advance from Stone Age to Space Age sustainably.',
          href: Routes.TechnologyEras,
          external: false,
          icon: <Factory className="size-4" />,
        },
      ],
    },
    {
      title: 'Logistics',
      href: Routes.DepotsLogistics,
      external: false,
      icon: <Truck className="size-4" />,
      items: [
        {
          title: 'Depots & logistics',
          description: 'Build and troubleshoot long-distance supply lines.',
          href: Routes.DepotsLogistics,
          external: false,
          icon: <Truck className="size-4" />,
        },
        {
          title: 'Workers & carts',
          description: 'Recruit people, assign drivers and move supplies.',
          href: Routes.WorkersCarts,
          external: false,
          icon: <Truck className="size-4" />,
        },
        {
          title: 'Naval transport',
          description: 'Use rafts, barges and a supplied beachhead.',
          href: Routes.NavalTransport,
          external: false,
          icon: <Map className="size-4" />,
        },
      ],
    },
    {
      title: 'Combat',
      href: Routes.BaseDefense,
      external: false,
      icon: <Shield className="size-4" />,
      items: [
        {
          title: 'Base defense',
          description: 'Walls, staffed towers, ammunition and reserves.',
          href: Routes.BaseDefense,
          external: false,
          icon: <Shield className="size-4" />,
        },
        {
          title: 'Army formations',
          description: 'Control melee, ranged, vehicles and support.',
          href: Routes.ArmyFormations,
          external: false,
          icon: <Shield className="size-4" />,
        },
        {
          title: 'Boss preparation',
          description: 'Supply the final push and fix a missing trigger.',
          href: Routes.BossPreparation,
          external: false,
          icon: <Shield className="size-4" />,
        },
      ],
    },
    {
      title: 'World',
      href: Routes.LairsWorldMap,
      external: false,
      icon: <Map className="size-4" />,
      items: [
        {
          title: 'Lairs & world map',
          description: 'Use the locate button and developer region clues.',
          href: Routes.LairsWorldMap,
          external: false,
          icon: <Map className="size-4" />,
        },
        {
          title: 'Cities & refugee camps',
          description: 'Recruit, automate and build a useful city network.',
          href: Routes.CitiesRefugeeCamps,
          external: false,
          icon: <Factory className="size-4" />,
        },
        {
          title: 'PC requirements',
          description: 'Official 32 GB minimum and performance context.',
          href: Routes.SystemRequirements,
          external: false,
          icon: <Factory className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Steam full game and free Demo without APK risk.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}
