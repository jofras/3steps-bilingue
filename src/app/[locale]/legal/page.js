// src/app/[locale]/legal/page.js

import { redirect } from 'next/navigation';

export default function LegalDefaultPage({ params }) {
  const { locale } = params;
  redirect(`/${locale}/legal/impressum`);
}