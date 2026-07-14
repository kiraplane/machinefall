import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides } from './guides';
import { gameFacts, keywordMatrix, siteDescription } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  routeLabels: Record<string, string>;
  keywordRoutes: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export const routeLabels: Record<string, string> = {
  '/': 'Machinefall Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/depots-logistics': 'Depots & Logistics',
  '/guides/workers-carts': 'Workers & Carts',
  '/guides/base-defense': 'Base Defense',
  '/guides/technology-eras': 'Technology & Eras',
  '/guides/army-formations': 'Army Formations',
  '/guides/lairs-world-map': 'Lairs & World Map',
  '/guides/boss-preparation': 'Boss Preparation',
  '/guides/naval-transport': 'Naval Transport',
  '/guides/cities-refugee-camps': 'Cities & Refugee Camps',
  '/system-requirements': 'PC Requirements',
  '/review': 'Should You Buy?',
  '/download': 'Official Download',
  '/disclaimer': 'Disclaimer',
};

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const keywordRoutes = keywordMatrix
    .filter((item) => item.route !== 'none' && item.status === 'keep')
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route.split('#')[0]] ?? item.route,
      intent: item.intent,
    }));

  return {
    badge: 'Independent launch guide hub · Updated July 14, 2026',
    metadataTitle: 'Machinefall Wiki - Guides, Logistics, Lairs & Boss Help',
    title: 'Machinefall Wiki',
    intro:
      'Build a supply network that survives the machine swarm. Find practical help for your first base, depots, workers, formations, lairs, the final boss and PC performance.',
    primaryCta: 'Start the beginner guide',
    secondaryCta: 'Fix your logistics',
    scopeNote:
      'Released-build facts are separated from old Demo notes and community reports, so you can act without guessing which version a tip belongs to.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is Machinefall?',
        answer:
          'Machinefall is a single-player post-apocalyptic RTS by Jan Zizka. You rebuild settlements, connect global supply lines and command very large armies against machine-bug swarms on a playable Earth map.',
      },
      {
        question: 'Is Machinefall out now?',
        answer:
          'Yes. The full Windows game released on Steam on July 10, 2026. A separate free Demo is also available on Steam.',
      },
      {
        question: 'Does Machinefall have multiplayer or official mods?',
        answer:
          'No. The developer currently describes both multiplayer and official mod support as beyond the scope of this solo-developed game.',
      },
      {
        question: 'Which Machinefall guide should I read first?',
        answer:
          'Use the beginner guide for the campaign loop. If your base is producing but the front is starving, jump directly to Depots & Logistics, then Workers & Carts.',
      },
      {
        question: 'Are there Machinefall codes or a tier list?',
        answer:
          'No supported redeem-code system or stable tier-list evidence was found. This wiki does not invent code pages, unit ranks or best-build claims.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: '13 evidence-backed guides',
    title: 'Machinefall Guide Hub',
    intro:
      'Choose the problem in front of you: opening a campaign, feeding a remote army, finding lairs, building a defensive line, moving across water, preparing the boss push or deciding whether your PC is ready.',
    readGuide: 'Open guide',
    faq: [
      {
        question: 'Are these guides for the full release?',
        answer:
          'Yes. Full-version Steam announcements and current developer replies take priority. Older itch.io devlogs are used only when they still match released mechanics.',
      },
      {
        question: 'Why is there no unit database or interactive map yet?',
        answer:
          'The released game is only days old and no reliable complete dataset exists. A smaller accurate guide set is more useful than a large speculative database.',
      },
      {
        question: 'Do I need to conquer the whole world to finish?',
        answer:
          'No. The developer says the campaign asks you to destroy enemy strongholds and then defeat the final boss; total map conquest is optional.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Visual companion:',
    videoSuffix:
      'Use it to see the interface and battle scale; the written plan below remains the decision guide.',
    officialTitle: 'Check the released build first',
    officialBody:
      'Machinefall changed throughout its Demo. This page prioritizes the current Steam release, full-version announcements and recent developer answers. Old devlogs are treated as mechanic history, not automatic truth.',
    officialLinkLabel: 'Open Machinefall on Steam',
    faqTitle: 'Machinefall FAQ',
    categoryLabels: {
      Start: 'Start',
      Logistics: 'Logistics',
      Combat: 'Combat',
      Expansion: 'Expansion',
      Progression: 'Progression',
      Reference: 'Reference',
      Review: 'Review',
      Safety: 'Safety',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Reference: 'Reference',
      Status: 'Current status',
    },
  };
}
