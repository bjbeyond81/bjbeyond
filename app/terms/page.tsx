import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { MEDIA } from '@/lib/media';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms governing use of bjbeyond.it and its public tools.',
  alternates: { canonical: '/terms/' },
  robots: { index: false, follow: true },
};

const sections = [
  ['Nature of the site', 'BJ Beyond is an independent writing and research project. It does not offer consulting, evaluations or other professional services, and nothing on this site is an offer to provide them.'],
  ['Use of the site', 'The site and its public tools are provided for information, research, experimentation and editorial enquiry. Do not use them unlawfully, to interfere with the service, or to misrepresent their outputs as verified facts.'],
  ['No professional guarantee', 'Art-market, data and AI materials are analytical and informational. They do not create a fiduciary, legal, financial, medical or investment relationship.'],
  ['AI and tool outputs', 'Automated outputs can be incomplete, wrong or context-sensitive. Human review remains required before any consequential decision.'],
  ['Third-party services', 'Some tools or links use third-party services such as Anthropic, Groq, HackerNoon, X or Authentia. Their own terms and privacy rules apply when you use those services.'],
  ['Intellectual property', 'Original BJ Beyond text, design, methods and site materials remain protected by applicable intellectual-property law unless a page explicitly states otherwise. Quotation and citation are welcome when attribution and context are preserved.'],
  ['Availability', 'The site may change, move, suspend or remove experimental tools without notice. No uninterrupted availability is promised.'],
  ['Linked store', 'Apps linked from this site are sold through bjbeyond.studio. Any purchase is made with that store and is governed by its own terms, seller details and policies.'],
  ['Governing law', 'These terms are governed by Italian law. Where a choice of court is permitted, the courts of Verona have jurisdiction. Mandatory consumer-protection rules are not affected.'],
] as const;

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="LEGAL"
      title={['TERMS', 'OF USE']}
      standfirst="Rules for using bjbeyond.it, its research pages and experimental tools."
      media={MEDIA.method[3]}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <p className="u-label text-mist-400">UPDATED 30 OCTOBER 2026</p>
        </Reveal>
        <div className="mt-10 border-t border-rule">
          {sections.map(([title, body]) => (
            <section key={title} className="grid grid-cols-1 gap-5 border-b border-rule py-8 lg:grid-cols-12 lg:gap-6">
              <h2 className="text-title font-extralight text-paper lg:col-span-4">{title}</h2>
              <p className="text-body font-light leading-relaxed text-mist-300 lg:col-span-7 lg:col-start-6">{body}</p>
            </section>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
