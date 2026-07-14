import { Badge } from '@/components/ui/badge';
import { routeLabels } from '@/data/machinefall/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Download,
  Factory,
  Gamepad2,
  Map,
  Menu,
  Shield,
  Sparkles,
  Truck,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: Gamepad2,
    routes: ['/', '/guides', '/guides/beginner-guide', '/review'],
  },
  {
    title: 'Supply Network',
    icon: Truck,
    routes: [
      '/guides/depots-logistics',
      '/guides/workers-carts',
      '/guides/naval-transport',
    ],
  },
  {
    title: 'Army & Defense',
    icon: Shield,
    routes: [
      '/guides/base-defense',
      '/guides/army-formations',
      '/guides/boss-preparation',
    ],
  },
  {
    title: 'World & Progress',
    icon: Map,
    routes: [
      '/guides/technology-eras',
      '/guides/lairs-world-map',
      '/guides/cities-refugee-camps',
    ],
  },
  {
    title: 'Run & Install',
    icon: Factory,
    routes: ['/system-requirements', '/download', '/disclaimer'],
  },
] as const;

function isCurrentPath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function WikiLink({
  currentPath,
  href,
}: {
  currentPath?: string;
  href: string;
}) {
  const active = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex min-w-0 items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm leading-6 transition',
        active
          ? 'border-[#f2b84b] bg-[#f2b84b] font-semibold text-[#11160f]'
          : 'border-[#2a4434] bg-[#080d0b] text-[#a8b7aa] hover:border-[#8fcf78] hover:bg-[#18231c] hover:text-[#f4f1df]'
      )}
    >
      <span className="min-w-0 break-words">{routeLabels[href] ?? href}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          active ? 'text-[#11160f]' : 'text-[#8fcf78]'
        )}
      />
    </LocaleLink>
  );
}

function NavGroups({ currentPath }: { currentPath?: string }) {
  return wikiNavRoutes.map((group) => {
    const active = group.routes.some((route) =>
      isCurrentPath(currentPath, route)
    );

    return (
      <details
        key={group.title}
        open={active}
        className={cn(
          'group rounded-lg border p-3',
          active
            ? 'border-[#f2b84b]/70 bg-[#f2b84b]/8'
            : 'border-[#2a4434] bg-[#080d0b]'
        )}
      >
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#f4f1df] [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-2">
            <group.icon className="size-4 shrink-0 text-[#8fcf78]" />
            <span className="min-w-0 break-words">{group.title}</span>
          </span>
          <ChevronDown className="size-4 shrink-0 text-[#f2b84b] transition group-open:rotate-180" />
        </summary>
        <div className="mt-3 grid gap-2">
          {group.routes.map((route) => (
            <WikiLink key={route} currentPath={currentPath} href={route} />
          ))}
        </div>
      </details>
    );
  });
}

export function WikiRouteSidebar({
  children,
  currentPath,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <aside className="sticky top-24 hidden w-[272px] shrink-0 self-start space-y-4 lg:block">
      <div className="rounded-xl border border-[#2a4434] bg-[#111a15] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fcf78]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 font-display text-xl font-bold text-[#f4f1df]">
              Machinefall routes
            </h2>
          </div>
          <Compass className="size-5 text-[#f2b84b]" />
        </div>
        <div className="mt-4 space-y-3">
          <NavGroups currentPath={currentPath} />
        </div>
      </div>

      {sectionLinks.length > 0 ? (
        <details className="group rounded-xl border border-[#2a4434] bg-[#111a15] p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-2 font-display text-lg font-bold text-[#f4f1df]">
              <BookOpen className="size-4 text-[#8fcf78]" />
              On this page
            </span>
            <ChevronDown className="size-4 text-[#f2b84b] transition group-open:rotate-180" />
          </summary>
          <div className="mt-3 grid gap-2 border-[#2a4434] border-t pt-3">
            {sectionLinks.slice(0, 7).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="rounded-lg border border-[#2a4434] bg-[#080d0b] px-3 py-2 text-sm leading-6 text-[#a8b7aa] hover:border-[#8fcf78] hover:text-[#f4f1df]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </details>
      ) : null}

      {children}
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  return (
    <details className="group rounded-xl border border-[#2a4434] bg-[#080d0b] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex items-center gap-2 font-display text-lg font-bold text-[#f4f1df]">
          <Menu className="size-5 text-[#8fcf78]" />
          Wiki Menu
        </span>
        <Badge className="bg-[#f2b84b] text-[#11160f]">15 links</Badge>
      </summary>

      {sectionLinks.length > 0 ? (
        <div className="mt-4 border-[#2a4434] border-t pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fcf78]">
            On this page
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {sectionLinks.slice(0, 7).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-lg border border-[#2a4434] bg-[#111a15] px-3 py-2 text-sm text-[#a8b7aa]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-4 grid gap-3 border-[#2a4434] border-t pt-4">
        <NavGroups currentPath={currentPath} />
      </div>
    </details>
  );
}

export function QuickWikiLinks({ className }: { className?: string }) {
  const routes = [
    { href: '/guides/beginner-guide', label: 'Beginner', icon: BookOpen },
    { href: '/guides/depots-logistics', label: 'Logistics', icon: Truck },
    { href: '/guides/lairs-world-map', label: 'Lairs', icon: Map },
    { href: '/guides/base-defense', label: 'Defense', icon: Shield },
    { href: '/system-requirements', label: 'PC Specs', icon: Factory },
    { href: '/download', label: 'Download', icon: Download },
  ];

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {routes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#2a4434] bg-[#080d0b]/85 px-2.5 py-1.5 text-[#f4f1df] text-xs transition hover:border-[#8fcf78] hover:bg-[#18231c] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#8fcf78]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}
