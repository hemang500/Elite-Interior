import React from 'react';
import { X } from 'lucide-react';
import { BlogPost } from '../data/blogData';

interface BlogModalProps {
  post: BlogPost;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-serif text-gray-900">{post.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="text-sm text-gray-500 mb-4">{post.date}</div>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-gray-600 mb-4">{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;