// src/app/about/page.js (The default redirect page)

import { redirect } from 'next/navigation';

// Next.js convention: redirect for a default path
export default function AboutDefaultPage() {
  // Your old index route was 'purpose', so we redirect there.
  redirect('/about/purpose');
}