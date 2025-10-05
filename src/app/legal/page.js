// src/app/legal/page.js (Redirects /legal to /legal/impressum)

import { redirect } from 'next/navigation';

export default function LegalDefaultPage() {
  redirect('/legal/impressum');
}