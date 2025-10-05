// src/pages/NewsArticle.js (Renamed for modularity)

// 🛑 REMOVE: import { useParams } from 'react-router-dom';
import { newsItems } from '../data/newsItems';

// Component now accepts 'slug' directly as a prop, rather than using a hook.
// In the final Next.js route file, this prop will come from the route params.
export default function NewsArticleContent({ slug }) { 
  const post = newsItems.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-gray-50 min-h-screen w-full py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-8 rounded-lg shadow-md text-center text-red-600">
            Post not found.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen w-full py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="font-heading font-bold text-3xl mb-4 text-primary">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            {post.date} · {post.author || '3Steps Team'}
          </p>
          <div className="text-textdark text-base leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
}