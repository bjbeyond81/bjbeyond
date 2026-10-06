import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { COOKIES } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How BJ Beyond uses cookies on bjbeyond.it.',
  alternates: { canonical: '/cookie-policy/' },
  /* Legal pages stay reachable but out of search and AI indexes: the
     controller has to be named here by law, and that is the only reason. */
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return <LegalPage doc={COOKIES} />;
}
