import type { Metadata } from 'next';
import { LegalPage } from '@/components/legal/LegalPage';
import { PRIVACY } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy notice of Bj Beyond under Regulation (EU) 2016/679 (GDPR).',
  alternates: { canonical: '/privacy-policy/' },
  /* Legal pages stay reachable but out of search and AI indexes: the
     controller has to be named here by law, and that is the only reason. */
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return <LegalPage doc={PRIVACY} />;
}
