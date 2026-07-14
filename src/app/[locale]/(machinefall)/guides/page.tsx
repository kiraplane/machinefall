import Container from '@/components/layout/container';
import { FaqSection } from '@/components/machinefall/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/machinefall/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getGuideArticleUi,
  getGuidesIndexContent,
  getLocalizedGuides,
} from '@/data/machinefall/localized';
import { siteFacts } from '@/data/machinefall/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getGuidesIndexContent(locale);
  const guides = getLocalizedGuides(locale);

  return constructMetadata({
    title: 'Machinefall Guides - Logistics, Lairs, Boss & Base Help',
    description: content.intro,
    locale,
    pathname: '/guides',
    image: guides[0]?.coverImageUrl,
  });
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getGuidesIndexContent(locale);
  const guideUi = getGuideArticleUi(locale);
  const guides = getLocalizedGuides(locale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: content.title,
        numberOfItems: guides.length,
        itemListElement: guides.map((guide, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: guide.title,
          url: `${siteFacts.domain}${guide.path}`,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: siteFacts.siteName,
            item: siteFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: `${siteFacts.domain}/guides`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#080d0b] py-10 text-[#f4f1df]">
      <JsonLd data={jsonLd} />
      <Container className="px-4">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <div className="min-w-0 space-y-8">
            <header className="max-w-4xl space-y-4">
              <Badge className="bg-[#f2b84b] text-[#11160f]">
                {content.badge}
              </Badge>
              <h1 className="font-display text-4xl font-black md:text-6xl">
                {content.title}
              </h1>
              <p className="text-lg leading-8 text-[#a8b7aa]">
                {content.intro}
              </p>
              <MobileWikiNav currentPath="/guides" locale={locale} />
            </header>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {guides.map((guide) => (
                <article
                  key={guide.slug}
                  className="overflow-hidden rounded-xl border border-[#2a4434] bg-[#111a15]"
                >
                  <div className="relative aspect-video border-[#2a4434] border-b">
                    <Image
                      src={guide.coverImageUrl}
                      alt={`${guide.title} cover`}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d0b]/90 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-[#f2b84b] text-[#11160f]">
                      {guideUi.categoryLabels[guide.category]}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-[#8fcf78]/50 text-[#f4f1df]"
                      >
                        {guideUi.difficultyLabels[guide.difficulty]}
                      </Badge>
                      {guide.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-[#2a4434] text-[#f4f1df]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-bold">
                      {guide.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#a8b7aa]">
                      {guide.summary}
                    </p>
                    <Button
                      asChild
                      className="mt-5 h-auto whitespace-normal bg-[#f2b84b] text-[#11160f] hover:bg-[#8fcf78]"
                    >
                      <LocaleLink href={guide.path}>
                        {content.readGuide}
                      </LocaleLink>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <FaqSection items={content.faq} title={guideUi.faqTitle} />
          </div>

          <WikiRouteSidebar currentPath="/guides" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
