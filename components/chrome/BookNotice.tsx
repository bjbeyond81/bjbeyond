'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useConsent } from './Consent';

/** One dismissal is enough. Change the key to show the notice again. */
const STORAGE_KEY = 'bjb-22-notice';

/**
 * A temporary cover notice on the homepage.
 *
 * It waits until the cookie banner has an answer, so two dialogs never sit on
 * the same screen. Closing it, or opening the book, stores the dismissal.
 */
export function BookNotice() {
  const pathname = usePathname();
  const { status, asking } = useConsent();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* Closed for this view even if the browser will not store it. */
    }
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;
    if (status === 'unknown' || asking) return;
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === '1') return;
    } catch {
      return;
    }
    const id = window.setTimeout(() => setOpen(true), 400);
    return () => window.clearTimeout(id);
  }, [pathname, status, asking]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismiss();
        return;
      }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>('a, button');
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[var(--z-notice)] flex items-end justify-center bg-ink-950/80 p-4 sm:items-center sm:p-8"
      onClick={dismiss}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="grid w-full max-w-3xl grid-cols-1 overflow-hidden border border-rule bg-ink-950 sm:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src="https://22.bjbeyond.it/22-Copertina-EN.png"
          alt="Cover of Twenty-Two by BJ Beyond. Seven months with a machine that always agreed with me."
          width={1024}
          height={1536}
          className="h-auto max-h-[46vh] w-full bg-black object-contain sm:max-h-[72vh]"
        />
        <div className="flex flex-col justify-between gap-8 p-6 sm:p-8">
          <div>
            <p className="u-label text-amber-400">Coming soon</p>
            <h2 id={titleId} className="mt-4 font-extralight text-title text-paper">
              Ventidue.
            </h2>
            <p className="mt-4 max-w-sm font-light text-lede text-mist-200">
              The part that never went on HackerNoon is the book. The first 22
              people to sign up get the eBook free at publication.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://22.bjbeyond.it/en/"
              onClick={dismiss}
              className="u-label inline-flex min-h-11 items-center justify-center bg-paper px-6 py-3 text-ink-950 transition-colors duration-200 hover:bg-amber-400"
            >
              The book
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={dismiss}
              className="u-label inline-flex min-h-11 items-center justify-center border border-rule-strong px-6 py-3 text-paper transition-colors duration-200 hover:border-paper"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
