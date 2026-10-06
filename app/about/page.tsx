import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Atmosphere } from '@/components/atmosphere/Atmosphere';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { BEYOND, CONTACT, FAQ, METHOD } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';
import { aboutPageSchema } from '@/lib/schema';

export const metadata: Metadata = metadataFor('/about/');

/**
 * 01 — WHO IS BJ BEYOND, as an address of its own.
 *
 * The homepage section is an entrance: sticky portrait, parallax backdrop. This
 * page is the destination a search result or a bio link points at, so it lays
 * the same material out at rest. Nothing here is authored — every string is
 * BEYOND in lib/content.ts, the copy already on the site.
 */
export default function AboutPage() {
  return (
    <PageShell
      index={BEYOND.index}
      eyebrow={BEYOND.role}
      title={BEYOND.label}
      standfirst={BEYOND.lede}
      media={MEDIA.backdrop}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema()) }}
      />

      <section className="u-gutter pb-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <Reveal distance={34}>
              <div className="u-portrait-fade relative mx-auto aspect-9/16 w-[min(72%,38vh)] lg:mx-0 lg:h-[80vh] lg:w-auto">
                <Atmosphere
                  media={MEDIA.portrait}
                  scrim="none"
                  informative
                  sizes="(max-width: 1024px) 66vw, 42vw"
                  className="h-full w-full"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-12 lg:col-span-4 lg:col-start-7 lg:mt-0 lg:pt-[8vh]">
            <Reveal delay={0.1}>
              <h2 className="text-headline font-extralight text-paper">{BEYOND.name}</h2>
              {BEYOND.body.map((paragraph) => (
                <p key={paragraph} className="mt-6 text-body font-light text-mist-300">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <RevealGroup delay={0.2} className="mt-12">
              <ul className="space-y-7">
                {BEYOND.capabilities.map((capability) => (
                  <RevealItem as="li" key={capability.join(' ')} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45em] block h-1 w-1 shrink-0 rounded-full bg-amber-400"
                    />
                    <span className="u-label text-mist-200">
                      {capability.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </span>
                  </RevealItem>
                ))}
              </ul>
            </RevealGroup>
          </div>
        </div>

        <RevealGroup className="mt-20 border-t border-rule lg:mt-24">
          <dl className="grid grid-cols-2 lg:grid-cols-3">
            {BEYOND.stats.map((stat) => (
              <RevealItem
                as="div"
                key={stat.label}
                className="flex flex-col-reverse border-b border-rule py-7 pr-6 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:pl-6 lg:first:pl-0"
              >
                <dt className="u-label mt-3 text-mist-300">{stat.label}</dt>
                <dd className="tabular text-[clamp(2rem,4vw,3rem)] font-extralight leading-none text-amber-400">
                  {stat.value}
                </dd>
              </RevealItem>
            ))}
          </dl>
        </RevealGroup>

        <section aria-labelledby="why-name" className="mt-20 border-t border-rule pt-14 lg:mt-24">
          <Reveal>
            <p className="u-label text-amber-400">WHY BJ BEYOND?</p>
            <h2 id="why-name" className="mt-5 max-w-3xl text-headline font-extralight text-paper">
              AI → BJ. Beyond begins where artificial intelligence stops being enough.
            </h2>
            <p className="mt-6 max-w-2xl text-body font-light text-mist-300">
              {FAQ.items[1].a}
            </p>
          </Reveal>
        </section>

        <section aria-labelledby="faq-heading" className="mt-20 border-t border-rule pt-14 lg:mt-24">
          <Reveal>
            <h2 id="faq-heading" className="u-label text-mist-300">
              {FAQ.label.join(' ')}
            </h2>
          </Reveal>
          <RevealGroup delay={0.1} className="mt-8">
            <dl className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
              {FAQ.items.map((item) => (
                <RevealItem as="div" key={item.q} className="border-b border-rule py-7">
                  <dt className="text-body font-light text-paper">{item.q}</dt>
                  <dd className="mt-3 text-body font-light text-mist-300">{item.a}</dd>
                </RevealItem>
              ))}
            </dl>
          </RevealGroup>
        </section>

        <Reveal delay={0.1} className="mt-14">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            <ArrowLink href="/method/">{`${METHOD.title}${METHOD.trademark} Method`}</ArrowLink>
            <ArrowLink href="/services/">Services</ArrowLink>
            <ArrowLink href="/contact/">{CONTACT.label.join(' ')}</ArrowLink>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
