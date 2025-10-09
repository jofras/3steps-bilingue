// src/app/[locale]/news/page.js

import News from '../../../pageComponents/News';

// This is the component Next.js executes when a user visits /news
export default function NewsRoute() {
  return (
    <News />
  );
}