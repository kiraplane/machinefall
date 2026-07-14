import Container from '@/components/layout/container';
import { FaqSection } from '@/components/machinefall/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/machinefall/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/machinefall/localized';
import { siteFacts } from '@/data/machinefall/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Factory,
  Map,
  RadioTower,
  Shield,
  ShieldCheck,
  Truck,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const startSteps = [
  {
    title: 'Stabilize one base',
    href: '/guides/beginner-guide',
    body: 'Choose Scenario Mode, keep spare labor and prove each production link.',
  },
  {
    title: 'Prove one supply route',
    href: '/guides/depots-logistics',
    body: 'Move one finished item between two depots before scaling globally.',
  },
  {
    title: 'Liberate for people',
    href: '/guides/cities-refugee-camps',
    body: 'Turn useful cities into recruiting, production and staging nodes.',
  },
  {
    title: 'Advance in supplied bounds',
    href: '/guides/lairs-world-map',
    body: 'Locate the objective, secure a forward city, then move the army.',
  },
] as const;

const hubs = [
  {
    title: 'Supply Network',
    icon: Truck,
    body: 'Fix empty depots, idle carts, worker shortages and cross-ocean routes.',
    links: [
      ['Depots & Logistics', '/guides/depots-logistics'],
      ['Workers & Carts', '/guides/workers-carts'],
      ['Naval Transport', '/guides/naval-transport'],
    ],
  },
  {
    title: 'Army & Defense',
    icon: Shield,
    body: 'Build supplied walls, organize formations and prepare the final push.',
    links: [
      ['Base Defense', '/guides/base-defense'],
      ['Army Formations', '/guides/army-formations'],
      ['Boss Preparation', '/guides/boss-preparation'],
    ],
  },
  {
    title: 'World & Progress',
    icon: Map,
    body: 'Choose technology for the next constraint and connect distant objectives.',
    links: [
      ['Technology & Eras', '/guides/technology-eras'],
      ['Lairs & World Map', '/guides/lairs-world-map'],
      ['Cities & Camps', '/guides/cities-refugee-camps'],
    ],
  },
  {
    title: 'Buy, Run & Install',
    icon: Factory,
    body: 'Check the high RAM target, current feature scope and official downloads.',
    links: [
      ['PC Requirements', '/system-requirements'],
      ['Should You Buy?', '/review'],
      ['Official Download', '/download'],
    ],
  },
] as const;

const homeTrailer = {
  id: '2MUH9Qw7fQY',
  title: 'Machinefall gameplay trailer',
  embedUrl: 'https://www.youtube-nocookie.com/embed/2MUH9Qw7fQY?rel=0',
  thumbnailUrl: 'https://i.ytimg.com/vi/2MUH9Qw7fQY/hqdefault.jpg',
};

export function MachinefallHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featuredGuides = getLocalizedFeaturedGuides(locale);
  const gameFacts = getLocalizedGameFacts(locale);
  const siteDescription = getLocalizedSiteDescription(locale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteFacts.domain}/#website`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        '@id': `${siteFacts.domain}/#organization`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/logo.svg`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: { '@type': 'Person', name: siteFacts.creator },
        publisher: { '@type': 'Person', name: siteFacts.publisher },
        applicationCategory: 'Game',
        genre: ['Real-time strategy', 'Base building', 'Resource management'],
        gamePlatform: ['Windows', 'Steam'],
        releaseDate: '2026-07-10',
        url: siteFacts.officialSteamUrl,
        sameAs: [
          siteFacts.officialSteamUrl,
          siteFacts.officialCommunityUrl,
          siteFacts.officialYouTubeUrl,
          siteFacts.officialDiscordUrl,
        ],
      },
      {
        '@type': 'VideoObject',
        name: homeTrailer.title,
        thumbnailUrl: homeTrailer.thumbnailUrl,
        embedUrl: homeTrailer.embedUrl,
        uploadDate: '2026-06-01',
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#080d0b] text-[#f4f1df]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#2a4434] border-b">
        <Image
          src="/machinefall/screenshots/5.jpg"
          alt="Machinefall army advancing across a ruined city"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,13,11,0.98)_0%,rgba(8,13,11,0.82)_48%,rgba(8,13,11,0.55)_100%)]" />
        <Container className="relative px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.78fr)]">
            <div className="min-w-0">
              <Badge className="bg-[#f2b84b] text-[#11160f]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.03] md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#c0cbbd] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto whitespace-normal bg-[#f2b84b] px-4 py-3 text-[#11160f] hover:bg-[#8fcf78]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto whitespace-normal border-[#8fcf78] bg-[#080d0b]/60 px-4 py-3 text-[#f4f1df] hover:bg-[#8fcf78] hover:text-[#11160f]"
                >
                  <LocaleLink href="/guides/depots-logistics">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-5" />
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#91a395]">
                {content.scopeNote}
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#2a4434] bg-black shadow-2xl shadow-black/40">
              <iframe
                className="aspect-video w-full"
                src={homeTrailer.embedUrl}
                title={homeTrailer.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <p className="bg-[#111a15] px-4 py-3 text-sm text-[#a8b7aa]">
                Official gameplay trailer from the Steam-linked Facteroids
                channel.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8 lg:py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-8">
            <MobileWikiNav currentPath="/" locale={locale} />

            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {gameFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-[#2a4434] bg-[#111a15] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fcf78]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#a8b7aa]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f2b84b]">
                    First stable campaign
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Start in this order
                  </h2>
                </div>
                <BookOpen className="size-6 text-[#8fcf78]" />
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-4">
                {startSteps.map((step, index) => (
                  <LocaleLink
                    key={step.href}
                    href={step.href}
                    className="group rounded-xl border border-[#2a4434] bg-[#111a15] p-4 transition hover:-translate-y-0.5 hover:border-[#8fcf78]"
                  >
                    <span className="inline-flex size-7 items-center justify-center rounded-lg bg-[#f2b84b] text-sm font-black text-[#11160f]">
                      {index + 1}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#a8b7aa]">
                      {step.body}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              {hubs.map((hub) => (
                <div
                  key={hub.title}
                  className="rounded-xl border border-[#2a4434] bg-[#111a15] p-5"
                >
                  <div className="flex gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#18231c] text-[#8fcf78]">
                      <hub.icon className="size-5" />
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-bold">
                        {hub.title}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-[#a8b7aa]">
                        {hub.body}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {hub.links.map(([label, href]) => (
                      <LocaleLink
                        key={href}
                        href={href}
                        className="rounded-lg border border-[#2a4434] bg-[#080d0b] px-3 py-2 text-sm transition hover:border-[#f2b84b] hover:text-[#8fcf78]"
                      >
                        {label}
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="rounded-xl border border-[#2a4434] bg-[#111a15] p-5 md:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fcf78]">
                    Current guide set
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Solve the system that is blocking you
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#2a4434] bg-[#080d0b] text-[#f4f1df] hover:border-[#8fcf78] hover:bg-[#18231c]"
                >
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={guide.path}
                    className="group overflow-hidden rounded-xl border border-[#2a4434] bg-[#080d0b] transition hover:border-[#8fcf78]"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 300px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080d0b] via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <Badge className="bg-[#f2b84b] text-[#11160f]">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#a8b7aa]">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              <div className="relative min-h-72 overflow-hidden rounded-xl border border-[#2a4434] md:col-span-2">
                <Image
                  src="/machinefall/screenshots/2.jpg"
                  alt="Machinefall global map and regional settlements"
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d0b] via-[#080d0b]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fcf78]">
                    Four campaign lairs
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Find the marker. Build the route. Then attack.
                  </h2>
                  <LocaleLink
                    href="/guides/lairs-world-map"
                    className="mt-3 inline-flex items-center gap-1 text-[#f2b84b] text-sm font-semibold"
                  >
                    Open lair locations
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </div>
              </div>
              <div className="rounded-xl border border-[#2a4434] bg-[#111a15] p-5">
                <RadioTower className="size-6 text-[#8fcf78]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#f2b84b]">
                  Version discipline
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold">
                  Released build first
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#a8b7aa]">
                  Current Steam announcements and developer replies outrank old
                  Demo devlogs. Community performance reports stay labeled as
                  reports.
                </p>
              </div>
            </section>

            <section className="rounded-xl border border-[#2a4434] bg-[#111a15] p-5 md:p-6">
              <div className="flex gap-3">
                <UsersRound className="mt-1 size-5 shrink-0 text-[#8fcf78]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f2b84b]">
                    Topic finder
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Supported Machinefall search routes
                  </h2>
                </div>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {content.keywordRoutes.map((item) => (
                  <LocaleLink
                    key={`${item.keyword}-${item.route}`}
                    href={item.route}
                    className="min-w-0 rounded-xl border border-[#2a4434] bg-[#080d0b] p-4 transition hover:border-[#8fcf78]"
                  >
                    <span className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="min-w-0 break-words font-semibold">
                        {item.keyword}
                      </span>
                      <span className="text-[#8fcf78]">{item.label}</span>
                    </span>
                    <p className="mt-2 text-sm leading-6 text-[#91a395]">
                      {item.intent}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[#2a4434] bg-[#111a15] p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 size-5 text-[#8fcf78]" />
                  <div>
                    <h2 className="font-display text-2xl font-bold">
                      Official storefronts only
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#a8b7aa]">
                      Use Steam App 3213120 for the full game or 3436640 for the
                      free Demo. There is no official mobile APK.
                    </p>
                    <LocaleLink
                      href="/download"
                      className="mt-3 inline-flex items-center gap-1 text-[#8fcf78] text-sm underline underline-offset-4"
                    >
                      Safe download links
                      <ArrowRight className="size-3" />
                    </LocaleLink>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-[#2a4434] bg-[#111a15] p-5">
                <div className="flex gap-3">
                  <Factory className="mt-1 size-5 text-[#f2b84b]" />
                  <div>
                    <h2 className="font-display text-2xl font-bold">
                      32 GB RAM minimum
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#a8b7aa]">
                      The global simulation has a much higher memory target than
                      its 1 GB storage size suggests. Check before buying.
                    </p>
                    <LocaleLink
                      href="/system-requirements"
                      className="mt-3 inline-flex items-center gap-1 text-[#8fcf78] text-sm underline underline-offset-4"
                    >
                      Read the PC guide
                      <ArrowRight className="size-3" />
                    </LocaleLink>
                  </div>
                </div>
              </div>
            </section>

            <FaqSection items={content.faq} title="Machinefall FAQ" />
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
