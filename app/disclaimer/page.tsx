import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { MEDIA } from '@/lib/media';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Scope and limits of BJ Beyond research, AI experiments, art-market content and wellness tools.',
  alternates: { canonical: '/disclaimer/' },
  robots: { index: false, follow: true },
};

const items = [
  ['Evidence and interpretation', 'Where BJ Beyond publishes archive-based investigations, primary records, preserved media, contemporaneous reporting and later interpretation should not be treated as equivalent. Claims about hidden model reasoning, memory, consciousness, agency or platform-wide rarity require evidence beyond the archive itself.'],
  ['Art market', 'Art-market research is informational and analytical. It is not a guarantee of authenticity, future value, liquidity or investment performance. Independent legal, tax, provenance and conservation advice may be appropriate for consequential transactions.'],
  ['AI systems', 'AI outputs can hallucinate, overfit prompts, miss context and reproduce errors. No model output should replace human review where legal, financial, reputational, safety or authorship consequences matter.'],
  ['Frequency Studio', 'Frequency, binaural, chakra and wellness associations are presented for relaxation, cultural context or personal exploration. They are not established clinical effects and the tool is not a medical device.'],
  ['External sources', 'Links to external platforms are provided for context and navigation. BJ Beyond does not control their availability, policies or subsequent edits.'],
] as const;

export default function DisclaimerPage() {
  return (
    <PageShell
      eyebrow="LEGAL"
      title={['SCOPE', '& LIMITS']}
      standfirst="What BJ Beyond material can support — and what it should not be used to claim."
      media={MEDIA.method[2]}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <div className="border-t border-rule">
          {items.map(([title, body]) => (
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
