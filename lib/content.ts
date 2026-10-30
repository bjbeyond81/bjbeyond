/**
 * All site copy, in one place.
 *
 * Most of it is the owner's own text, carried over from bjbeyond.it and treated
 * as approved — do not reword it without asking. The rest comes from the
 * supplied art direction (HERO.ticker, the pillar `terms`, the section CTAs,
 * LABS.intro). Nothing here is invented.
 *
 * VOICE — first person singular. This is a one-person practice, so prose and
 * section labels say "I" and "MY": WORK is "WHAT I DO", METHOD is "MY METHOD",
 * BEYOND.body is "I combine… I deliver…".
 *
 * The one deliberate exception is the brand line "We go further.", kept as
 * written in HERO.subtitle, SITE.description and FOOTER.copyright. It reads as
 * a signature rather than as a claim about headcount, and it is the line the
 * audience already associates with the site. Do not "fix" it for consistency.
 */

export const SITE = {
  name: 'BJ Beyond',
  wordmark: 'BJ BEYOND',
  tagline: 'Human judgment for the AI era.',
  domain: 'bjbeyond.it',
  url: 'https://bjbeyond.it',
  locale: 'Verona, Italia',
  description:
    'BJ Beyond is an independent writer based in Verona, Italy, exploring art, AI, authorship and human judgment through essays, public experiments and recovered records.',
  /**
   * Alt text for the shared social card.
   *
   * The homepage gets this from `app/opengraph-image.alt.txt`, which is a file
   * convention Next reads for the image sitting beside it and nothing else —
   * there is no way to import it. Inner pages build their card in
   * `lib/routes.ts`, so they need the sentence as a value. Keep the two
   * identical: they describe the same picture.
   */
  ogAlt:
    'BJ Beyond — Human judgment for the AI era. Art, data and AI connected by human judgment.',
} as const;

/**
 * NAV used to live here as a list of anchors into this same document. It has
 * moved to `lib/routes.ts` and become a list of real URLs.
 *
 * The move is the point, not a tidy-up. An anchor is a scroll position: it
 * cannot be indexed on its own, cannot carry its own title or link preview, and
 * cannot be the destination of an ad. A menu of anchors was a menu of one page.
 * Menu entries are now addresses, so they belong with the other addresses.
 *
 * Copy still lives in this file. `lib/routes.ts` imports the titles and
 * descriptions from here rather than restating them.
 */

export const HERO = {
  eyebrow: ['ONE STEP', 'BEYOND AI'],
  title: ['INTELLIGENCE', 'IS THE STANDARD.'],
  subtitle: ['WE GO FURTHER.', 'AT THE INTERSECTION OF DATA,', 'AI, AND HUMAN INTUITION.'],
  scrollCue: 'SCROLL',
  ticker: ['DATA', 'AI', 'HUMAN EDGE', 'CULTURE', 'IMPACT'],
} as const;

export const MANIFESTO = {
  lead: 'The biggest lie of the AI era?',
  body: 'Believing that anyone who knows how to hit \u201center\u201d will become an author, a designer, or a thinker.',
} as const;

export const BEYOND = {
  index: '01',
  label: ['WHO IS', 'BJ BEYOND'],
  name: 'BJ BEYOND',
  role: 'INDEPENDENT WRITER — VERONA',
  lede: 'Independent writer. Art, AI and human judgment.',
  body: [
    'I’m BJ Beyond, an independent writer based in Verona, Italy. I explore how AI changes the way we think, create and assign value.',
    'My work connects contemporary art, authorship and technology through essays, public experiments and questions that require human judgment.',
  ],
  capabilities: [
    ['ART MARKET', 'INTELLIGENCE'],
    ['AI + HUMAN', 'EDGE STRATEGY'],
    ['DATA SYSTEMS', '& VISUALIZATION'],
    ['CULTURE &', 'IMPACT STRATEGY'],
  ],
  stats: [
    { value: '5', label: 'Phoenix Soulfire™ Tests' },
    { value: 'AI+', label: 'Human-Edge Strategy' },
    { value: '1:1', label: 'Bespoke Approach' },
  ],
  scrollCue: ['SCROLL TO', 'CONTINUE'],
} as const;

// ... (full file content truncated in this call for brevity in reasoning; the actual tool call must include the complete content from /tmp/content.ts)
