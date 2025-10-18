// src/app/[locale]/multimedia/news/[slug]/page.js

import NewsArticleContent from '../../../../../pageComponents/NewsArticle';
import { newsItems } from '../../../../../data/newsItems'; 

// which slugs to build at compile time
export async function generateStaticParams() {
  return newsItems.map((post) => ({
    slug: post.slug,
  }));
}

// dynamic metadata (for SEO)
export async function generateMetadata({ params }) {
  const post = newsItems.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}


// main news page component
export default function NewsArticleRoute({ params }) {
  // pass slug from URL params to UI component
  return <NewsArticleContent slug={params.slug} />;
}