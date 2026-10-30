import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { CONTACT, WORK } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';

export const metadata: Metadata = metadataFor('/services/');

export default function ServicesPage() {
  return (
    <PageShell
      index={WORK.index}
      eyebrow={WORK.label.join(' ')}
      title={[WORK.title]}
      standfirst={WORK.description}
      media={MEDIA.method[3]}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <RevealGroup>
          <ul className="grid grid-cols-1 gap-px border-t border-rule bg-rule lg:grid-cols-3">
            {WORK.services.map((service) => (
              <RevealItem
                as="li"
                key={service.number}
                className="flex flex-col bg-ink-950 px-0 py-10 lg:px-8 lg:py-12"
              >
                <span
                  aria-hidden="true"
                  className="tabular block text-[clamp(2.5rem,6vw,4rem)] font-extralight leading-[0.85] text-paper/12"
                >
                  {service.number}
                </span>

                <h2 id={`service-${service.number}`} className="mt-8 scroll-mt-28 text-title font-extralight leading-[1.05] text-paper">
                  {service.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                <p className="mt-5 text-body font-light text-mist-300">
                  {service.description}
                </p>

                <ul className="mt-8 border-t border-rule">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="u-rule-b py-3.5 text-meta text-mist-200"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {'link' in service ? (
                  <a
                    href={service.link.href}
                    className="mt-6 inline-block text-meta text-amber-400 underline-offset-4 hover:underline"
                  >
                    {service.link.label}
                  </a>
                ) : null}
              </RevealItem>
            ))}
          </ul>
        </RevealGroup>

        {/* Expanded detail section for SEO and clarity */}
        <Reveal delay={0.15} className="mt-20 max-w-3xl">
          <div className="space-y-10 text-body font-light text-mist-300">
            <div>
              <h3 className="text-title font-extralight text-paper">Art Market Intelligence</h3>
              <p className="mt-4">Evidence-based positioning and valuation support for artists, collectors and cultural organizations. The work stays with what the record can support.</p>
              <ul className="mt-4 list-disc space-y-1 pl-5">
                <li>Artist valuation and positioning models</li>
                <li>Comparable analysis and market context</li>
                <li>Phoenix Soulfire™ Human Judgment Review on works, statements or projects</li>
                <li>Private evaluation reports and competitive mapping</li>
                <li>Clear limits: no authentication, no market certification, no numeric scoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-title font-extralight text-paper">Data Systems & Visualization</h3>
              <p className="mt-4">Decision-focused systems built from a finance and Power BI background. Dashboards that help people choose, not just observe.</p>
              <ul className="mt-4 list-disc space-y-1 pl-5">
                <li>Decision-oriented analytics dashboards</li>
                <li>Automated data pipelines and data quality checks</li>
                <li>KPI and performance visibility for operators</li>
                <li>Executive-ready reporting that stays usable</li>
                <li>Systems remain tools; judgment stays human</li>
              </ul>
            </div>
            <div>
              <h3 className="text-title font-extralight text-paper">AI + Human Edge</h3>
              <p className="mt-4">AI adoption that keeps accountability inside the loop. Generation is easy; responsibility is not.</p>
              <ul className="mt-4 list-disc space-y-1 pl-5">
                <li>AI readiness and workflow assessment</li>
                <li>Human-in-the-Loop process design</li>
                <li>Collaboration systems with explicit ownership</li>
                <li>Judgment, accountability and adoption strategy</li>
                <li>Method: Phoenix Soulfire™ five-test judgment layer</li>
              </ul>
            </div>
            <p className="pt-4 text-meta text-mist-400">No pre-packaged packages. Each engagement is defined by the context and the evidence available.</p>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-14">
          <ArrowLink href="/contact/">{CONTACT.label.join(' ')}</ArrowLink>
        </Reveal>
      </section>
    </PageShell>
  );
}
