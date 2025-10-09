// src/app/[locale]/about/page.js (The default redirect page)

import { redirect } from 'next/navigation';

// Next.js convention: redirect for a default path
export default function AboutDefaultPage({ params : locale }) {
  redirect(`/${locale}/about/purpose`);
}