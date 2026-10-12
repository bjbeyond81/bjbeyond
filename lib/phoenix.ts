/** Shared framing for the author's recovered-archive report. Publication is pending. */
export const PHOENIX = {
  title: 'The Phoenix Experiment: What the Recovered X Archive Actually Shows',
  status: 'Submitted to HackerNoon — awaiting editorial review',
  description: 'A recovered-archive case study of Human Edge, Phoenix Soulfire, Grok reliability tests and Phoenix image replies across contextual exchanges, beginning with a text-only reply.',
  caveat: 'The archive can document the sequence. It cannot tell us why the model chose to generate the image.',
  question: 'What can we verify when an AI explains its own surprising response?',
  profile: 'https://hackernoon.com/u/bj_beyond',
  video: 'https://youtube.com/shorts/eGTaV1wOXBU',
  earlierArticle: 'https://hackernoon.com/when-the-system-flags-the-human-who-was-helping-it',
} as const;

export const PHOENIX_TIMELINE = [
  { date: '07–14 MAR 2026', title: 'Human Edge: judgment and collaboration', body: 'The cited posts discuss contextual intuition, accountability and creative selection. The March 14 post frames the edge as collaboration rather than replacement.', ids: '2030076011002700079 · 2032876158262378668', anchor: 'march' },
  { date: '24 MAR 2026', title: 'Phoenix, soul and curation', body: 'Phoenix imagery becomes a way to explore the human contribution: choosing an image, giving it a story and deciding what to share.', ids: '2036500369988268538', anchor: 'march' },
  { date: '06–08 APR 2026', title: 'Phoenix Soulfire becomes a named series', body: 'Human Edge Lab: Episode 3 credits Grok visuals and original music by BJ Beyond. A later post describes a multimodal Human-in-the-Loop experiment. The early reports are self-documentation, not validated performance measurements.', ids: '2041129633865773476 · 2041240386832629772', anchor: 'april' },
  { date: '23–26 MAY 2026', title: 'Testing text against visual evidence', body: 'The report describes red-monochrome and attribution tests. A preserved private round on May 25 correctly recognises the near-blank image as off-white while retaining the red-monochrome framing. Outcomes must be assessed round by round; the selected media do not reproduce every public model reply.', ids: '2058322707045908565 · 2058312842122559846 · 2058971871287161300 · 2059158154059882875', anchor: 'may' },
  { date: '02 AUG 2026 / 22:31:48 UTC', title: 'A text-only call to Grok', body: 'The recovered text-only reply contains no explicit image-generation command. It replies to BJ Beyond’s earlier post containing a short video, so the thread already has context. The message was posted on August 3 at 00:31:48 in Italy (CEST).', ids: 'Reply: 2084044521751429180 · Parent: 2084016658813718969', anchor: 'august' },
  { date: '03 AUG 2026', title: 'Three preserved image-reply screenshots', body: 'The archive preserves a quote post and a further reply between the reported image responses. A later summary post carries three screenshots. These are records of successive exchanges, not evidence of three outputs from a single input without intervening messages; gallery numbers do not establish generation order.', ids: 'Quote: 2084334503267373318 · Reply: 2084361067300262379 · Summary: 2084400587357990996', anchor: 'august' },
  { date: '06–07 AUG 2026', title: 'Asking for one comparable public example', body: 'BJ Beyond asks Grok to identify another matching public case. The report describes differing public and private answers. A private-chat screenshot shared on August 7 shows Grok saying it cannot provide the requested link. That response does not establish uniqueness.', ids: '2085244348157821035 · 2085247056021512523 · 2085504306216591591 · 2085508017890496830 · 2085518874049495217', anchor: 'questions' },
  { date: 'SEPTEMBER 2026', title: 'Returning to the question on video', body: 'The report links a screen recording published as “5 Settembre 2026”, revisiting the request for a number and a comparable case. This recording is a later source, outside the August 16 export.', ids: 'Separate source: linked screen recording', anchor: 'later-record' },
] as const;
