// src/app/multimedia/news/[slug]/page.js

import NewsArticleContent from '../../../../pages/NewsArticle';
import { newsItems } from '../../../../data/newsItems'; // You need this for metadata

// (Optional but highly recommended) Next.js function for static generation
// This tells Next.js which slugs to build at compile time.
export async function generateStaticParams() {
  return newsItems.map((post) => ({
    slug: post.slug,
  }));
}

// (Optional but recommended) Next.js function for dynamic metadata (SEO)
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


// The main page component that receives 'params' from Next.js
export default function NewsArticleRoute({ params }) {
  // Pass the slug from the URL params to the UI component
  return <NewsArticleContent slug={params.slug} />;
}