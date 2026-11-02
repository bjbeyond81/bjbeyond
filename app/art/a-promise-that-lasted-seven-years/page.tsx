import type { Metadata } from 'next';
import { metadataFor } from '@/lib/routes';
import { PageShell } from '@/components/chrome/PageShell';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { MEDIA } from '@/lib/media';

export const metadata: Metadata = metadataFor('/art/a-promise-that-lasted-seven-years/');

export default function APromiseThatLastedSevenYearsPage() {
  const sections: [string, string[]][] = [
    ["Padova, November 2019", [
      "My girlfriend and I are visiting ArtePadova, the modern and contemporary art fair.",
      "We walk through the stands, look at dozens of works, stop in front of some and move on. We have been going to fairs and exhibitions for some time, and we know that, among the many works we see, only a few continue to stay with us after the visit.",
      "Then we enter the Contemporary Art Talent Show, the space dedicated to emerging artists. And there we really stop.",
      "In front of us is a large painting, dominated by red, with a mark in the centre. No landscape, no figure, no recognisable subject. Only that red and a form that seems to have produced itself with its own energy.",
      "I do not remember the exact words we exchanged. I do remember the feeling: that work had struck both of us, at the same moment. We liked it without yet knowing how to explain why.",
      "We later discovered that the author was Julian T., the artistic name of Julian Tiscione, originator of the IMPACT project. That mark had not been painted with a brush. It was the trace of an impact: the result of a physical action, designed by the artist and, in its final form, also entrusted to the forces of matter.",
      "We did not buy the painting. But we said something that, over the years, would become almost a refrain: sooner or later we will buy one. And, sooner or later, we will buy exactly that red."
    ]],
    ["Before us: the IMPACT gesture", [
      "To understand why that painting had stopped us, it is worth going back to 2007, before our encounter. It is the year of the 52nd Venice Biennale, to which one of the most emblematic actions of Julian T.’s research is linked: a performance with a dirigible and the fall of colour.",
      "The idea of IMPACT does not consist in painting an image and then making it appear spontaneous. It consists in preparing the conditions so that an image is born from a collision. The artist chooses the materials, the surface, the conditions of the action. But he does not draw every contour of the mark that will result.",
      "Gravity, speed, the density of the colour, the resistance of the surface: all these variables participate in the birth of the work. The result is not exactly replicable.",
      "IMPACT is the gesture; what remains on the surface is its material testimony.",
      "In the 2007 performance the gesture is taken high, until the fall is transformed into an event. Painting is no longer only something observed after the fact: it becomes an occurrence, with a preparation, a waiting, a trajectory and a concluding moment.",
      "It is a substantial difference. Julian T. does not try to imitate chance: he introduces it concretely into the process.",
      "He does not renounce his own artistic intention; he decides where that intention must stop, allowing the rest to happen.",
      "When we found ourselves in front of the red painting, in 2019, we did not yet know all this history. Knowledge came after the emotion. And this is perhaps the most sincere way one can meet a work."
    ]]
  ];

  return (
    <PageShell
      eyebrow="ART & CULTURE / TAMAGO-ZINE"
      title={["A Promise", "That Lasted", "Seven Years"]}
      standfirst="From a red IMPACT at ArtePadova in 2019 to a white one linked to the Tanzania Pavilion project in 2026: seven years of a shared promise and the gesture that held it."
      media={MEDIA.method[3]}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <p className="text-meta text-mist-300">
          English edition · Originally published by Matteo Zanetti in Tamago-Zine on 2 November 2026.
        </p>
        <div className="mt-5 flex flex-wrap gap-6">
          <ArrowLink href="https://tamagozine.org/2026/11/02/una-promessa-durata-sette-anni/" external>
            Read the Italian original
          </ArrowLink>
          <ArrowLink href="/writing/">All writing</ArrowLink>
        </div>
        <div className="mt-12 max-w-3xl space-y-12">
          {sections.map(([heading, paragraphs]) => (
            <article key={heading}>
              <h2 className="mb-6 text-title font-extralight text-paper">{heading}</h2>
              {paragraphs.map((p, i) => (
                <p key={i} className="mb-5 text-body leading-relaxed text-mist-300">{p}</p>
              ))}
            </article>
          ))}
        </div>
        <p className="mt-12 text-meta text-mist-400">
          Complete English translation of the Italian original, preserving its structure and qualifications.
        </p>
      </section>
    </PageShell>
  );
}
