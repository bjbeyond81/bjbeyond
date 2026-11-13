/**
 * Official HackerNoon synthetic audio for BJ Beyond’s published stories.
 *
 * Each file is HackerNoon’s generated narration (Google Cloud WaveNet), hosted
 * on their public GCS bucket and linked from the story page as “Listen to this
 * story”. The default voice is the male track, which is the first `audioPath`
 * HackerNoon lists in the page payload.
 *
 * These files are not copied into this repository. A 2022 HackerNoon product
 * post said writers may “download the audio files of their stories to
 * repurpose as they wish”, but the User Terms (updated 19 May 2025) treat
 * company-created Site Content as HackerNoon’s, and the tracks can include a
 * short sponsor line. The site therefore links the official URL, with credit,
 * rather than rehosting the file.
 */
export const HN_AUDIO_CREDIT = 'Audio version by HackerNoon';

export interface HnAudioVoice {
  /** Public MP3 URL on HackerNoon’s audio host. */
  url: string;
  /** Byte length, from a verified HTTP 200 of the file. */
  bytes: number;
  /** Duration in seconds, measured with ffprobe. */
  durationSec: number;
  label: 'Male voice' | 'Female voice';
  voiceId: 'en-US-Wavenet-I' | 'en-US-Wavenet-H';
}

export interface HnAudioItem {
  slug: string;
  title: string;
  published: string;
  /** Canonical HackerNoon story URL. */
  articleUrl: string;
  /**
   * URLs that may appear as `<link>` in /feed.xml for this story: the
   * HackerNoon original, and the on-site page when one exists.
   */
  feedLinks: readonly string[];
  defaultVoice: 'male';
  voices: { male: HnAudioVoice; female: HnAudioVoice };
}

const gcs = (path: string) => `https://storage.googleapis.com/hackernoon/audios/${path}`;

export const HN_AUDIO: readonly HnAudioItem[] = [
  {
    slug: 'i-typed-my-name-to-grok-it-sent-me-a-phoenix-i-never-asked-for',
    title: 'I Typed My Name to Grok. It Sent Me a Phoenix I Never Asked For.',
    published: '2026-11-10',
    articleUrl: 'https://hackernoon.com/i-typed-my-name-to-grok-it-sent-me-a-phoenix-i-never-asked-for',
    feedLinks: ['https://hackernoon.com/i-typed-my-name-to-grok-it-sent-me-a-phoenix-i-never-asked-for'],
    defaultVoice: 'male',
    voices: {
      male: { url: gcs('6aef492f936b107142e40751-en-US-Wavenet-I-MALE--fc44cf6b9e516.mp3'), bytes: 6596352, durationSec: 824.544, label: 'Male voice', voiceId: 'en-US-Wavenet-I' },
      female: { url: gcs('6aef492f936b107142e40751-en-US-Wavenet-H-FEMALE--ce8caf7b80548.mp3'), bytes: 6481536, durationSec: 810.192, label: 'Female voice', voiceId: 'en-US-Wavenet-H' },
    },
  },
  {
    slug: 'pressing-enter-doesnt-make-you-a-creator',
    title: 'Pressing Enter Doesn’t Make You a Creator',
    published: '2026-11-08',
    articleUrl: 'https://hackernoon.com/pressing-enter-doesnt-make-you-a-creator',
    feedLinks: ['https://hackernoon.com/pressing-enter-doesnt-make-you-a-creator'],
    defaultVoice: 'male',
    voices: {
      male: { url: gcs('6ae7c59f58ff0202fdedb158-en-US-Wavenet-I-MALE--83d72d2e37f5b.mp3'), bytes: 5095872, durationSec: 636.984, label: 'Male voice', voiceId: 'en-US-Wavenet-I' },
      female: { url: gcs('6ae7c59f58ff0202fdedb158-en-US-Wavenet-H-FEMALE--32df7968464ca.mp3'), bytes: 5026752, durationSec: 628.344, label: 'Female voice', voiceId: 'en-US-Wavenet-H' },
    },
  },
  {
    slug: 'the-phoenix-experiment-what-the-recovered-x-archive-actually-shows',
    title: 'The Phoenix Experiment: What the Recovered X Archive Actually Shows',
    published: '2026-10-23',
    articleUrl: 'https://hackernoon.com/the-phoenix-experiment-what-the-recovered-x-archive-actually-shows',
    feedLinks: ['https://hackernoon.com/the-phoenix-experiment-what-the-recovered-x-archive-actually-shows'],
    defaultVoice: 'male',
    voices: {
      male: { url: gcs('6ac2950c177b312d6c435508-en-US-Wavenet-I-MALE--fa7793365d2be.mp3'), bytes: 7961088, durationSec: 995.136, label: 'Male voice', voiceId: 'en-US-Wavenet-I' },
      female: { url: gcs('6ac2950c177b312d6c435508-en-US-Wavenet-H-FEMALE--5f9a2f7eb0d75.mp3'), bytes: 7840704, durationSec: 980.088, label: 'Female voice', voiceId: 'en-US-Wavenet-H' },
    },
  },
  {
    slug: 'i-asked-claude-opus-5-to-beat-pangrams-ai-detector-it-failed-with-a-perfect-score',
    title: 'I Asked Claude Opus 5 to Beat Pangram’s AI Detector. It Failed With a Perfect Score',
    published: '2026-09-21',
    articleUrl: 'https://hackernoon.com/i-asked-claude-opus-5-to-beat-pangrams-ai-detector-it-failed-with-a-perfect-score',
    feedLinks: [
      'https://hackernoon.com/i-asked-claude-opus-5-to-beat-pangrams-ai-detector-it-failed-with-a-perfect-score',
      'https://bjbeyond.it/writing/claude-opus-5-vs-pangram/',
    ],
    defaultVoice: 'male',
    voices: {
      male: { url: gcs('6a9fdfb26ff9eea3fedfd1c1-en-US-Wavenet-I-MALE--893adeb3b00f3.mp3'), bytes: 5474496, durationSec: 684.312, label: 'Male voice', voiceId: 'en-US-Wavenet-I' },
      female: { url: gcs('6a9fdfb26ff9eea3fedfd1c1-en-US-Wavenet-H-FEMALE--beed13217df09.mp3'), bytes: 5375616, durationSec: 671.952, label: 'Female voice', voiceId: 'en-US-Wavenet-H' },
    },
  },
  {
    slug: 'the-2003-virtual-world-that-let-people-build-their-own-reality-before-the-metaverse-had-a-name',
    title: 'The 2003 Virtual World That Let People Build Their Own Reality Before the Metaverse Had a Name',
    published: '2026-09-17',
    articleUrl: 'https://hackernoon.com/the-2003-virtual-world-that-let-people-build-their-own-reality-before-the-metaverse-had-a-name',
    feedLinks: ['https://hackernoon.com/the-2003-virtual-world-that-let-people-build-their-own-reality-before-the-metaverse-had-a-name'],
    defaultVoice: 'male',
    voices: {
      male: { url: gcs('6aaaf04bbb190b93393dd43d-en-US-Wavenet-I-MALE--0e913a0f3088a.mp3'), bytes: 3110208, durationSec: 388.776, label: 'Male voice', voiceId: 'en-US-Wavenet-I' },
      female: { url: gcs('6aaaf04bbb190b93393dd43d-en-US-Wavenet-H-FEMALE--fc42a3dc8b6c.mp3'), bytes: 3051072, durationSec: 381.384, label: 'Female voice', voiceId: 'en-US-Wavenet-H' },
    },
  },
  {
    slug: 'system-zero-what-happens-when-ai-does-the-thinking-for-us',
    title: 'System Zero: What Happens When AI Does the Thinking for Us?',
    published: '2026-09-11',
    articleUrl: 'https://hackernoon.com/system-zero-what-happens-when-ai-does-the-thinking-for-us',
    feedLinks: ['https://hackernoon.com/system-zero-what-happens-when-ai-does-the-thinking-for-us'],
    defaultVoice: 'male',
    voices: {
      male: { url: gcs('6aa32d06bb190b93393b5250-en-US-Wavenet-I-MALE--413da01ff5aaf.mp3'), bytes: 1151424, durationSec: 143.928, label: 'Male voice', voiceId: 'en-US-Wavenet-I' },
      female: { url: gcs('6aa32d06bb190b93393b5250-en-US-Wavenet-H-FEMALE--1127cef81e95f.mp3'), bytes: 1121664, durationSec: 140.208, label: 'Female voice', voiceId: 'en-US-Wavenet-H' },
    },
  },
  {
    slug: 'when-the-system-flags-the-human-who-was-helping-it',
    title: 'When the System Flags the Human Who Was Helping It',
    published: '2026-08-27',
    articleUrl: 'https://hackernoon.com/when-the-system-flags-the-human-who-was-helping-it',
    feedLinks: ['https://hackernoon.com/when-the-system-flags-the-human-who-was-helping-it'],
    defaultVoice: 'male',
    voices: {
      male: { url: gcs('6a7a11f5bc4ba32e87044091-en-US-Wavenet-I-MALE--0f25a1c16cb86.mp3'), bytes: 3207360, durationSec: 400.92, label: 'Male voice', voiceId: 'en-US-Wavenet-I' },
      female: { url: gcs('6a7a11f5bc4ba32e87044091-en-US-Wavenet-H-FEMALE--867f8fdfa38bb.mp3'), bytes: 3146688, durationSec: 393.336, label: 'Female voice', voiceId: 'en-US-Wavenet-H' },
    },
  },
] as const;

export function audioBySlug(slug: string): HnAudioItem | undefined {
  return HN_AUDIO.find((item) => item.slug === slug);
}

export function enclosureForLink(link: string): { url: string; length: number; type: 'audio/mpeg'; durationSec: number } | undefined {
  const item = HN_AUDIO.find((entry) => entry.feedLinks.includes(link) || entry.articleUrl === link);
  if (!item) return undefined;
  const voice = item.voices[item.defaultVoice];
  return { url: voice.url, length: voice.bytes, type: 'audio/mpeg', durationSec: voice.durationSec };
}

/** Clock form for display and for `itunes:duration` (H:MM:SS or M:SS). */
export function formatDuration(seconds: number): string {
  const total = Math.round(seconds);
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  const mm = hours > 0 ? String(minutes).padStart(2, '0') : String(minutes);
  const ss = String(secs).padStart(2, '0');
  return hours > 0 ? `${hours}:${mm}:${ss}` : `${mm}:${ss}`;
}

export const HN_AUDIO_NEWEST_FIRST = [...HN_AUDIO].sort((a, b) => b.published.localeCompare(a.published));
