/**
 * The site's structured data, built from `lib/content.ts`.
 *
 * WHAT THIS REPLACES. There was a `public/schema.json` describing the
 * organisation, and nothing in the site ever referenced it — no
 * `<script type="application/ld+json">`, no `<link>`. A crawler had no way to
 * find it and no reason to look, so the file had been describing the site to
 * nobody since it was written. It had also drifted: it pointed at an
 * `og-image.jpg` that does not exist, still listed the Linktree the owner has
 * replaced, and used `contact`, which is not a schema.org property at all — the
 * spelling is `contactPoint`, and a term that is not in the vocabulary is
 * ignored rather than reported.
 *
 * WHY IT IS DERIVED RATHER THAN WRITTEN. Structured data is a second copy of
 * facts the site already states, which makes it the kind of file that is
 * correct on the day it is written and wrong within a year — the Linktree entry
 * is exactly that failure. Everything below reads `SITE`, `SOCIAL` and
 * `CONTACT`, so changing a social link in one place changes what Google is
 * told, and there is no second place to forget.
 *
 * WHAT IT BUYS. This is the vocabulary Google reads to decide that `Bj Beyond`
 * is an entity rather than a phrase: it is what a knowledge panel is assembled
 * from, and `sameAs` is how the accounts on X, TikTok, Threads, Reddit and
 * Substack get attached to the same entity instead of floating separately.
 *
 * NOT INCLUDED, deliberately: the owner's legal name. It appears in the privacy
 * policy because a data controller has to be named there, which is a different
 * act from publishing it as machine-readable metadata on every page of the
 * site. The `founder` Person node uses the brand pseudonym only.
 */
import { BEYOND, CONTACT, FAQ, SITE, SOCIAL } from './content';
import { absoluteUrl } from './routes';

/**
 * Stable `@id`s, so the two nodes can reference each other instead of repeating
 * themselves. A fragment on the site's own URL is the convention: it names the
 * thing without claiming the URL resolves to it.
 */
export const ORGANISATION_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const PERSON_ID = `${SITE.url}/#person`;

/**
 * The canonical brand paragraph (presence audit, 2026-10-04, section 9). Used
 * only in structured data; the visible meta description stays `SITE.description`.
 */
const ENTITY_DESCRIPTION =
  'Bj Beyond is an independent practice based in Verona, Italy, working at the intersection of data, AI and human intuition. It helps artists, collectors and companies with art market intelligence, Power BI dashboards and AI strategy, and created Phoenix Soulfire™, a five-test method for human judgment in the AI era. Official site: bjbeyond.it.';

/** The Journal, served from GitHub Pages and canonical to itself. */
const JOURNAL_URL = 'https://bjbeyond81.github.io/studio/';
const AMAZON_AUTHOR_URL = 'https://www.amazon.com/author/bjbeyond';
/* The owner's channel (@Bj_Beyond). NOT youtube.com/@bjbeyond, which is someone else's. */
const YOUTUBE_URL = 'https://www.youtube.com/@Bj_Beyond';

/**
 * One `@graph` rather than two script tags, which is how you say that these
 * nodes describe one site — `publisher` below is a reference to the node above
 * rather than a second copy of it.
 */
export function siteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        /* Dual type: Organisation for the entity graph, ProfessionalService for
           local/GEO signals (areaServed, Verona) without inventing a shopfront. */
        '@type': ['Organization', 'ProfessionalService'],
        '@id': ORGANISATION_ID,
        name: SITE.name,
        /* Every spelling the brand circulates under online. Without this, a
           crawler or an LLM treats "BJ Beyond", "Bj_Beyond" and "bjbeyond" as
           three unrelated strings instead of one entity. */
        alternateName: ['BJ Beyond', 'Bj_Beyond', 'BJ BEYOND', 'bjbeyond'],
        url: absoluteUrl('/'),
        description: ENTITY_DESCRIPTION,
        slogan: SITE.tagline,
        /* Google reads `logo` for the mark and `image` for a representative
           picture; they are different jobs and it wants both. */
        logo: absoluteUrl('/media/logo-512.webp'),
        image: absoluteUrl('/opengraph-image.jpg'),
        /* Pseudonymous founder node: brand name only, never the legal name. */
        founder: { '@id': PERSON_ID },
        email: CONTACT.emails[0].address.toLowerCase(),
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Verona',
          addressCountry: 'IT',
        },
        areaServed: [
          { '@type': 'City', name: 'Verona' },
          { '@type': 'Country', name: 'Italy' },
          { '@type': 'AdministrativeArea', name: 'European Union' },
        ],
        knowsAbout: [
          'art market intelligence',
          'AI strategy',
          'Power BI',
          'Phoenix Soulfire',
          'art authentication',
          'data systems',
        ],
        /*
          The only address. A former collaborator address is not a contact
          point of Bj Beyond and is not published here.
        */
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: CONTACT.emails[0].role.toLowerCase(),
          email: CONTACT.emails[0].address.toLowerCase(),
          areaServed: 'IT',
          availableLanguage: ['English', 'Italian'],
        },
        /* The whole point of the graph: these accounts and this organisation
           are one entity. Derived, so removing a platform removes it here. */
        sameAs: [
          ...SOCIAL.map((social) => social.href),
          /* Profiles that are not in the SOCIAL nav but belong to the same entity. */
          'https://www.wikidata.org/wiki/Q141600525',
          YOUTUBE_URL,
          AMAZON_AUTHOR_URL,
          JOURNAL_URL,
        ],
      },
      {
        /* The person behind the practice, under the brand pseudonym. No legal
           name, no photo: both are the owner's call to add. */
        '@type': 'Person',
        '@id': PERSON_ID,
        name: SITE.name,
        alternateName: ['BJ Beyond', 'Bj_Beyond', 'BJ'],
        url: absoluteUrl('/about/'),
        jobTitle: 'Founder',
        description: 'Founder of Bj Beyond and creator of the Phoenix Soulfire™ method.',
        worksFor: { '@id': ORGANISATION_ID },
        homeLocation: {
          '@type': 'Place',
          address: { '@type': 'PostalAddress', addressLocality: 'Verona', addressCountry: 'IT' },
        },
        sameAs: [
          'https://x.com/Bj_Beyond',
          'https://hackernoon.com/u/bj_beyond',
          'https://bjbeyond.substack.com',
          AMAZON_AUTHOR_URL,
          JOURNAL_URL,
        ],
      },
      {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        url: absoluteUrl('/'),
        name: SITE.name,
        description: SITE.description,
        publisher: { '@id': ORGANISATION_ID },
        inLanguage: 'en',
      },
    ],
  };
}

/**
 * `/about/` — an `AboutPage` whose subject is the Organization node above.
 *
 * Referenced by `@id`, never restated: the page says "this document is about
 * that entity", and the entity itself is defined once, in `siteSchema()`, which
 * the layout already embeds on this page. Same rule as the rest of this file —
 * no owner's legal name.
 */
export function aboutPageSchema() {
  const url = absoluteUrl('/about/');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${url}#webpage`,
        url,
        name: `Who is ${SITE.name}`,
        description: `${BEYOND.lede} ${BEYOND.body[0]}`,
        inLanguage: 'en',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORGANISATION_ID },
        mainEntity: { '@id': ORGANISATION_ID },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: absoluteUrl('/opengraph-image.jpg'),
          width: 1200,
          height: 630,
        },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE.name, item: SITE.url },
          { '@type': 'ListItem', position: 2, name: 'About', item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        url,
        inLanguage: 'en',
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORGANISATION_ID },
        mainEntity: FAQ.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}
