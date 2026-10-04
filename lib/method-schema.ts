/**
 * /method/ — the page's single JSON-LD graph, supplied by the owner verbatim.
 *
 * It replaces the generic site graph on this page (it restates the
 * Organization and WebSite nodes itself), so PageShell is handed this object
 * instead of `siteSchema()`. Do not edit the wording: it is copy, written for
 * search engines and assistants to quote as-is.
 */
export const METHOD_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": [
        "Organization",
        "ProfessionalService"
      ],
      "@id": "https://bjbeyond.it/#organization",
      "name": "Bj Beyond",
      "alternateName": [
        "BJ Beyond",
        "Bj_Beyond",
        "BJ BEYOND",
        "bjbeyond"
      ],
      "url": "https://bjbeyond.it",
      "description": "Bj Beyond helps artists, collectors and companies navigate the new creative economy at the intersection of data, AI and human intuition. Independent practice based in Verona.",
      "slogan": "Intelligence is the standard.",
      "logo": "https://bjbeyond.it/media/logo-512.webp",
      "image": "https://bjbeyond.it/opengraph-image.jpg",
      "email": "bj_beyond@tutamail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Verona",
        "addressCountry": "IT"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Verona"
        },
        {
          "@type": "Country",
          "name": "Italy"
        },
        {
          "@type": "AdministrativeArea",
          "name": "European Union"
        }
      ],
      "knowsAbout": [
        "art market intelligence",
        "AI strategy",
        "Power BI",
        "Phoenix Soulfire",
        "art authentication",
        "data systems"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "general & projects",
        "email": "bj_beyond@tutamail.com",
        "areaServed": "IT",
        "availableLanguage": [
          "English",
          "Italian"
        ]
      },
      "sameAs": [
        "https://x.com/Bj_Beyond",
        "https://www.instagram.com/bj_art_feed/",
        "https://www.tiktok.com/@bj_beyond",
        "https://www.threads.net/@bj_beyond",
        "https://www.reddit.com/user/Bj_Beyond",
        "https://hackernoon.com/u/bj_beyond",
        "https://bjbeyond.substack.com",
        "https://muckrack.com/bj_beyond",
        "https://www.wikidata.org/wiki/Q141600525",
        "https://www.amazon.com/author/bjbeyond",
        "https://bjbeyond81.github.io/studio/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://bjbeyond.it/#website",
      "url": "https://bjbeyond.it",
      "name": "Bj Beyond",
      "description": "Bj Beyond helps artists, collectors and companies navigate the new creative economy at the intersection of data, AI and human intuition. Independent practice based in Verona.",
      "publisher": {
        "@id": "https://bjbeyond.it/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "WebPage",
      "@id": "https://bjbeyond.it/method/#webpage",
      "url": "https://bjbeyond.it/method/",
      "name": "Phoenix Soulfire™: Five-Test Judgment Layer | Bj Beyond",
      "description": "Phoenix Soulfire™ is the five-test human judgment layer by Bj Beyond (Verona): Soul, Edge, Clarity, Impact, Legacy. Not an art scorecard.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://bjbeyond.it/#website"
      },
      "about": {
        "@id": "https://bjbeyond.it/method/#phoenix-soulfire"
      },
      "mainEntity": {
        "@id": "https://bjbeyond.it/method/#phoenix-soulfire"
      },
      "breadcrumb": {
        "@id": "https://bjbeyond.it/method/#breadcrumb"
      },
      "publisher": {
        "@id": "https://bjbeyond.it/#organization"
      },
      "dateModified": "2026-10-04"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://bjbeyond.it/method/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Bj Beyond",
          "item": "https://bjbeyond.it/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Phoenix Soulfire™ Method",
          "item": "https://bjbeyond.it/method/"
        }
      ]
    },
    {
      "@type": "DefinedTermSet",
      "@id": "https://bjbeyond.it/method/#phoenix-soulfire",
      "name": "Phoenix Soulfire™",
      "alternateName": [
        "Phoenix Soulfire",
        "Phoenix Soulfire method",
        "Phoenix Soulfire judgment layer"
      ],
      "description": "Phoenix Soulfire™ is the five-test human judgment layer created by Bj Beyond (Verona, Italy) to check whether a text, a work or a plan holds up beyond what AI can generate.",
      "url": "https://bjbeyond.it/method/",
      "inLanguage": "en",
      "creator": {
        "@id": "https://bjbeyond.it/#organization"
      },
      "publisher": {
        "@id": "https://bjbeyond.it/#organization"
      },
      "keywords": "Soul, Edge, Clarity, Impact, Legacy, judgment layer, human judgment, AI",
      "mentions": [
        {
          "@type": "WebApplication",
          "name": "PhoenixSoulfire Judgment Layer",
          "url": "https://phoenixsoulfire.bjbeyond.it/",
          "applicationCategory": "UtilitiesApplication",
          "isAccessibleForFree": true,
          "creator": {
            "@id": "https://bjbeyond.it/#organization"
          }
        }
      ],
      "hasDefinedTerm": [
        {
          "@type": "DefinedTerm",
          "@id": "https://bjbeyond.it/method/#soul",
          "name": "Soul",
          "termCode": "01",
          "description": "The residual human core. Fail signal: the text could be anyone's. Purpose · Alignment · Vision.",
          "url": "https://bjbeyond.it/method/#soul",
          "inDefinedTermSet": {
            "@id": "https://bjbeyond.it/method/#phoenix-soulfire"
          }
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://bjbeyond.it/method/#edge",
          "name": "Edge",
          "termCode": "02",
          "description": "What a model cannot copy. Fail signal: fluent, interchangeable. Market · Advantage · Disruption.",
          "url": "https://bjbeyond.it/method/#edge",
          "inDefinedTermSet": {
            "@id": "https://bjbeyond.it/method/#phoenix-soulfire"
          }
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://bjbeyond.it/method/#clarity",
          "name": "Clarity",
          "termCode": "03",
          "description": "Complexity cut to a claim. Fail signal: atmosphere instead of a sentence. Data · Insight · Truth.",
          "url": "https://bjbeyond.it/method/#clarity",
          "inDefinedTermSet": {
            "@id": "https://bjbeyond.it/method/#phoenix-soulfire"
          }
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://bjbeyond.it/method/#impact",
          "name": "Impact",
          "termCode": "04",
          "description": "A result you can check. Fail signal: intention with no trace. Strategy · Execution · Results.",
          "url": "https://bjbeyond.it/method/#impact",
          "inDefinedTermSet": {
            "@id": "https://bjbeyond.it/method/#phoenix-soulfire"
          }
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://bjbeyond.it/method/#legacy",
          "name": "Legacy",
          "termCode": "05",
          "description": "What remains after the feed moves. Fail signal: built to be posted, not to last. Sustainability · Influence · Enduring Value.",
          "url": "https://bjbeyond.it/method/#legacy",
          "inDefinedTermSet": {
            "@id": "https://bjbeyond.it/method/#phoenix-soulfire"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://bjbeyond.it/method/#faq",
      "inLanguage": "en",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Phoenix Soulfire™?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Phoenix Soulfire™ is the five-test human judgment layer created by Bj Beyond (Verona, Italy) to check whether a text, a work or a plan holds up beyond what AI can generate. The five tests are Soul, Edge, Clarity, Impact and Legacy."
          }
        },
        {
          "@type": "Question",
          "name": "Who created Phoenix Soulfire™?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bj Beyond, an independent practice in Verona, Italy, working at the intersection of data, AI and human intuition. The official page of the method is bjbeyond.it/method/."
          }
        },
        {
          "@type": "Question",
          "name": "Is Phoenix Soulfire™ an art scorecard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Phoenix Soulfire™ is a judgment layer, not an art scorecard and not a numeric rating. Each test ends in a human judgment with a clear fail signal. Bj Beyond's private artist evaluations are a separate service."
          }
        },
        {
          "@type": "Question",
          "name": "What is the PhoenixSoulfire Judgment Layer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A free public tool by Bj Beyond at phoenixsoulfire.bjbeyond.it that shows how machine-like a pasted text feels. It is the machine pass that tests the surface; the five Phoenix Soulfire™ tests are the human pass after it."
          }
        },
        {
          "@type": "Question",
          "name": "Can Phoenix Soulfire™ be applied to artworks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The tests apply to a text, a work or a plan, and an artwork is a work. Soul asks whether it could be anyone's; Legacy asks what remains after the feed moves. It is a human judgment, not a valuation or an authentication."
          }
        },
        {
          "@type": "Question",
          "name": "Is Phoenix Soulfire™ related to phoenixsoulfire.com?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. phoenixsoulfire.com is an unrelated website with a similar name. Phoenix Soulfire™ belongs to Bj Beyond, and its official page is bjbeyond.it/method/."
          }
        },
        {
          "@type": "Question",
          "name": "Is Phoenix Soulfire™ the Phoenix Simulator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Phoenix Simulator at bjbeyond.it/phoenix/ is a separate Bj Beyond Labs tool that simulates X's For You algorithm. It is not the Phoenix Soulfire™ method."
          }
        },
        {
          "@type": "Question",
          "name": "How can I work with Bj Beyond on Phoenix Soulfire™?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use the contact page at bjbeyond.it/contact/ and see the services at bjbeyond.it/services/. Each engagement is one to one, and terms are on request."
          }
        }
      ]
    }
  ]
} as const;
