// src/app/[locale]/about/page.js (default about redirect)

import { redirect } from 'next/navigation';

export default function AboutDefaultPage({ params }) {
  const { locale } = params;
  redirect(`/${locale}/about/purpose`);
}