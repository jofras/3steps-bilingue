// src/pages/News.js

import SectionBlock from '../components/SectionBlock';
import Link from 'next/link'; // 💡 FIX: Use Next.js Link
import { newsItems } from '../data/newsItems';

export default function News() {
  return (
    <div className="max-w-4xl mx-auto py-12 -mt-4 md:mt-4 px-4">
      <SectionBlock title="News" bg="white" padding="px-8 md:px-24">
        <div className="space-y-6">
          {newsItems.map((post, i) => (
            <div key={i} className="p-4 rounded shadow bg-background">
              <Link 
                href={`/multimedia/news/${post.slug}`} // 💡 FIX: Use 'href' instead of 'to'
                className="font-heading text-xl text-primary hover:underline"
              >
                {post.title}
              </Link>
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <div className="text-textdark">{post.excerpt}</div>
            </div>
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}