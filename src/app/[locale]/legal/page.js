// src/app/[locale]/legal/page.js

import { redirect } from 'next/navigation';

export default function LegalDefaultPage({ params : locale }) {
  redirect(`/${locale}/legal/impressum`);
}