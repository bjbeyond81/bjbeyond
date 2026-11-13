import { HN_AUDIO_CREDIT, formatDuration, type HnAudioItem, type HnAudioVoice } from '@/lib/hn-audio';

/**
 * Native HTML5 player for a HackerNoon story audio file.
 *
 * No autoplay, no preload, no analytics. The `src` is HackerNoon’s official
 * MP3 URL; the file is not served from this site.
 */
export function HnAudioPlayer({
  item,
  compact = false,
  showTitle = false,
  className,
}: {
  item: HnAudioItem;
  /** One player (default voice) instead of both voices. */
  compact?: boolean;
  showTitle?: boolean;
  className?: string;
}) {
  const voices: HnAudioVoice[] = compact
    ? [item.voices[item.defaultVoice]]
    : [item.voices.male, item.voices.female];

  return (
    <figure className={['hn-audio', className].filter(Boolean).join(' ')}>
      {showTitle ? <p className="hn-audio-title">{item.title}</p> : null}
      {voices.map((voice) => (
        <div key={voice.url} className="hn-audio-track">
          <figcaption className="u-label text-mist-400">
            {compact ? 'Listen' : voice.label}
            {' · '}
            {formatDuration(voice.durationSec)}
          </figcaption>
          <audio
            controls
            preload="none"
            src={voice.url}
            title={`${item.title} — ${voice.label}. ${HN_AUDIO_CREDIT}.`}
          >
            <a href={voice.url}>Open the MP3</a>
          </audio>
        </div>
      ))}
      <p className="hn-audio-credit text-meta text-mist-400">
        {HN_AUDIO_CREDIT}. Synthetic narration of the published story, hosted by HackerNoon.
        {compact ? (
          <>
            {' '}
            <a href={item.voices.female.url} className="text-mist-300 hover:text-amber-400">
              Female voice
            </a>
            {' · '}
          </>
        ) : (
          ' '
        )}
        <a href={item.articleUrl} target="_blank" rel="noopener noreferrer" className="text-mist-300 hover:text-amber-400">
          Listen on HackerNoon ↗
        </a>
      </p>
    </figure>
  );
}
