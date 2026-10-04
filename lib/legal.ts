/**
 * Privacy and Cookie policy content, transcribed from the documents in
 * `public/docs/`. These are legal statements: nothing is reworded or softened
 * for tone, and the rebuild changed their presentation only.
 *
 * The site is English only. These statements keep the same facts and name
 * the Italian controller, the GDPR, and the Italian Privacy Code in English.
 *
 * WHERE THE COOKIE POLICY NOW DIVERGES FROM THE 2026 TRANSCRIPTION, and why a
 * document that is not to be reworded was nonetheless edited: it had stopped
 * describing the site. It named "Vercel Analytics o simili" while Google
 * Analytics 4 was what was actually running; it referred to a consent banner
 * "se presente" when there was none; and it stated in as many words that the
 * site used no advertising profiling cookies and shared no data with
 * advertisers — a sentence that a Meta pixel makes false the moment it is
 * switched on.
 *
 * A privacy policy that misdescribes the processing is not a lesser problem
 * than having no policy. So the cookie sections below are now derived from
 * `lib/analytics.ts` rather than written down beside it: the marketing rows
 * appear if and only if `META_PIXEL_ID` is set. The document cannot drift from
 * the site, because the same constant decides both.
 */

export type LegalBlock =
  | { kind: 'text'; value: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'pairs'; items: { term: string; detail: string }[] }
  | { kind: 'ordered'; items: string[] }
  | { kind: 'table'; head: string[]; rows: string[][] }
  /** A standalone emphasised statement. */
  | { kind: 'callout'; value: string };

export interface LegalSection {
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

export interface LegalDocument {
  index: string;
  eyebrow: string;
  title: string[];
  updated: string;
  intro: string;
  sections: LegalSection[];
  closing: string;
  /** Path the previous site served this document from. Kept working. */
  legacyPath: string;
}

import { META_PIXEL_ID } from './analytics';

const EMAIL = 'bj_beyond@tutamail.com';
const X_HANDLE = '@BJ_Beyond';
const X_URL = 'https://x.com/BJ_Beyond';

export const CONTACT_LINKS = { email: EMAIL, xHandle: X_HANDLE, xUrl: X_URL } as const;

export const PRIVACY: LegalDocument = {
  index: '01',
  eyebrow: 'LEGAL',
  title: ['PRIVACY', 'POLICY'],
  updated: '4 October 2026',
  legacyPath: '/pages/privacy-policy.html',
  intro:
    'Bj Beyond protects your privacy. This notice describes how personal data is collected, used, and protected under Regulation (EU) 2016/679 (GDPR), Legislative Decree 196/2003 (Italian Privacy Code), and the EDPB Guidelines.',
  sections: [
    {
      id: 'titolare',
      heading: 'Controller',
      blocks: [
        {
          kind: 'pairs',
          items: [
            { term: 'Controller', detail: 'Matteo Zanetti – Bj Beyond' },
            { term: 'Seat', detail: 'Verona, Italy' },
            { term: 'Email', detail: EMAIL },
            { term: 'X', detail: X_HANDLE },
          ],
        },
      ],
    },
    {
      id: 'dati-raccolti',
      heading: 'Data collected',
      blocks: [
        {
          kind: 'pairs',
          items: [
            {
              term: 'Browsing data',
              detail:
                'IP address, browser type, device, pages visited, and time on page, through hosting logs or anonymous analytics.',
            },
            {
              term: 'Phoenix Simulator data',
              detail:
                'Post text you paste is processed locally or through an API (Claude/Groq) and is not stored permanently on our server.',
            },
            {
              term: 'Contact data',
              detail: 'Name, email, and message if you write via the form or email.',
            },
          ],
        },
        {
          kind: 'callout',
          value: 'We do not collect special-category data and we do not sell data to third parties.',
        },
      ],
    },
    {
      id: 'finalita',
      heading: 'Purposes and legal basis',
      blocks: [
        {
          kind: 'ordered',
          items: [
            'Providing the service you ask for, including the Phoenix Simulator — GDPR art. 6.1.b.',
            'Improving the site and measuring use in anonymous form — legitimate interest.',
            'Replying to contact requests — consent or legitimate interest.',
            'Complying with legal obligations.',
          ],
        },
      ],
    },
    {
      id: 'trasferimenti',
      heading: 'Transfers outside the EU',
      blocks: [
        {
          kind: 'text',
          value: META_PIXEL_ID
            ? 'We use processors (hosting, Anthropic, Groq, Google Ireland Ltd., Meta Platforms Ireland Ltd.) under Standard Contractual Clauses or an adequacy decision. Google and Meta may transfer data to the United States under the EU-US Data Privacy Framework.'
            : 'We use processors (hosting, Anthropic, Groq, Google Ireland Ltd.) under Standard Contractual Clauses or an adequacy decision. Google may transfer data to the United States under the EU-US Data Privacy Framework.',
        },
      ],
    },
    {
      id: 'diritti',
      heading: 'Your rights (GDPR)',
      blocks: [
        { kind: 'text', value: 'You can, at any time:' },
        {
          kind: 'list',
          items: [
            'Access, rectify, erase, restrict, or object to processing',
            'Ask for portability',
            'Withdraw consent',
          ],
        },
        {
          kind: 'text',
          value: `Write to ${EMAIL}. I reply within 30 days.`,
        },
      ],
    },
    {
      id: 'conservazione',
      heading: 'Retention',
      blocks: [
        {
          kind: 'text',
          value:
            'Data is kept only as long as needed: browsing logs for 12–24 months at most, contact data until the request is closed.',
        },
      ],
    },
    {
      id: 'modifiche',
      heading: 'Changes',
      blocks: [
        {
          kind: 'text',
          value: 'Updates are published on this page with a new date.',
        },
      ],
    },
  ],
  closing:
    'Questions: write on X or by email. One step beyond AI — with respect for your privacy.',
};

export const COOKIES: LegalDocument = {
  index: '02',
  eyebrow: 'LEGAL',
  title: ['COOKIE', 'POLICY'],
  updated: '21 Luglio 2026',
  legacyPath: '/pages/cookie-policy.html',
  intro:
    'This Cookie Policy supplements the Privacy Policy and explains how Bj Beyond uses cookies on bjbeyond.it.',
  sections: [
    {
      id: 'cosa-sono',
      heading: 'What cookies are',
      blocks: [
        {
          kind: 'text',
          value:
            'Cookies are small text files the site stores on your device to remember preferences and keep the site working.',
        },
      ],
    },
    {
      id: 'tipi',
      heading: 'Cookies used',
      blocks: [
        {
          kind: 'table',
          head: ['Type', 'Description', 'Duration', 'Control'],
          rows: [
            [
              'Strictly necessary',
              'Required for navigation and site functions, including the simulator',
              'Session / 1 year',
              'Required — cannot be switched off',
            ],
            ['Preferences', 'Remember choices such as consent', '6 months', 'You can manage them'],
            [
              'Analytics',
              'Google Analytics 4 (Google Ireland Ltd.): visit statistics, pages viewed, traffic source. Set only after your consent.',
              '13 months',
              'You can refuse',
            ],
            ...(META_PIXEL_ID
              ? [
                  [
                    'Marketing',
                    'Meta Pixel (Meta Platforms Ireland Ltd.): measurement of Facebook and Instagram campaigns and custom audiences. Set only after your consent.',
                    '3 months',
                    'Puoi rifiutare',
                  ],
                ]
              : []),
            ['Functional', 'For tools such as Phoenix Simulator', 'Session', 'Required'],
          ],
        },
        {
          kind: 'callout',
          value: META_PIXEL_ID
            ? 'No analytics or marketing cookie is set before your consent. If you refuse, or if you ignore the banner, Google and Meta scripts are not loaded.'
            : 'No analytics cookie is set before your consent. If you refuse, or if you ignore the banner, Google scripts are not loaded. This site does not currently use advertising profiling cookies.',
        },
      ],
    },
    {
      id: 'gestione',
      heading: 'How to manage cookies',
      blocks: [
        {
          kind: 'list',
          items: [
            'On the first visit a banner asks you to accept non-essential cookies. Until you choose, none of them are set.',
            'You can change that choice at any time from the COOKIE PREFERENCES link at the bottom of every page.',
            'You can delete or block them in your browser settings (Chrome, Firefox, Safari, and others).',
            'Per istruzioni dettagliate: aboutcookies.org',
          ],
        },
        {
          kind: 'text',
          value:
            'If you disable some cookies, parts of the site, including the simulator, may not work fully.',
        },
      ],
    },
    {
      id: 'aggiornamenti',
      heading: 'Updates',
      blocks: [
        {
          kind: 'text',
          value:
            'This policy can change. Check the update date.',
        },
      ],
    },
  ],
  closing: 'Questions: write by email or on X.',
};
