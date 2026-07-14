import Container from '@/components/layout/container';
import { siteFacts } from '@/data/machinefall/sources';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Disclaimer | Machinefall Wiki',
    description:
      'Disclaimer for Machinefall Wiki, an independent game guide site.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080d0b] py-12 text-[#f4f1df]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#a8b7aa]">
          Machinefall Wiki is an independent guide site. It is not affiliated
          with, endorsed by, sponsored by or operated by Jan Zizka, Valve,
          Steam, Discord, YouTube or another official distribution platform.
        </p>
        <p className="leading-8 text-[#a8b7aa]">
          Machinefall, its artwork, music, game files and official materials
          belong to their respective rights holders. This site does not
          redistribute paid files, modified clients, APK mirrors, cracks,
          injectors or unsafe downloads.
        </p>
        <p className="leading-8 text-[#a8b7aa]">
          Guides distinguish the released build, current developer answers, old
          Demo notes and community reports. For live purchase and patch status,
          use the{' '}
          <a
            href={siteFacts.officialSteamUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#8fcf78] underline underline-offset-4"
          >
            official Machinefall Steam page
          </a>
          .
        </p>
      </Container>
    </div>
  );
}
