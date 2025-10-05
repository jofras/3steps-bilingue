// src/pages/News.js

"use client";

import { useTranslations } from 'next-intl'; // 💡 NEW: Import useTranslations
import SectionBlock from '../components/SectionBlock';
import Link from 'next/link';
import { newsItems } from '../data/newsItems';

export default function News() {
  const t = useTranslations('multimedia.news'); // Use the 'multimedia.news' namespace

  return (
    <div className="max-w-4xl mx-auto py-12 -mt-4 md:mt-4 px-4">
      <SectionBlock 
        title={t('title')} // Refactored title
        bg="white" 
        padding="px-8 md:px-24"
      >
        <div className="space-y-6">
          {newsItems.map((post, i) => (
            <div key={i} className="p-4 rounded shadow bg-background">
              <Link 
                href={`/multimedia/news/${post.slug}`}
                className="font-heading text-xl text-primary hover:underline"
              >
                {post.title}
              </Link>
              {/* Date and Excerpt remain dynamic */}
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <div className="text-textdark">{post.excerpt}</div>
            </div>
          ))}
          
          {/* Fallback/No News Message */}
          {newsItems.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
                {t('noNews')}
            </p>
          )}
        </div>
      </SectionBlock>
    </div>
  );
}