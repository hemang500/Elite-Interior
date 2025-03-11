import { Link } from 'react-router-dom';
import { useState } from 'react';
import { blogPosts } from '../data/blogData';
import BlogModal from './BlogModal';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Design Journal</h2>
            <p className="text-gray-600 max-w-2xl">
              Insights, inspiration, and updates from our design team
            </p>
          </div>
          <Link
            to="/blogs"
            className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            All Blogs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-serif text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="text-gray-900 font-medium hover:text-gray-700"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </section>
  );
};

export default Blog;