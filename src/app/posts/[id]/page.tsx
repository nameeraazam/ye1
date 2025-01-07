'use client'

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Post {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  date: string;
}

interface PageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

const posts: Post[] = [
  {
    id: '1',
    title: "Connecting with Locals: The True Essence of Travel",
    description: "As I wandered through the bustling night market in Kuala Lumpur...",
    date: "2024-12-25",
    imageUrl: "/images/good2.webp",
  },
  {
    id: '2',
    title: "Sustainable Travel: Reducing Your Footprint on the Road",
    description: "The more I travel, the more I have come to realize the importance of being a conscious traveler. Towering trees draped in vines created a dense canopy overhead.",
    date: "2024-12-25",
    imageUrl: "/images/good1.webp",
  },
  // ... other posts remain the same
];

// Simulated comments data
const commentsData: Comment[] = [
  {
    id: '1',
    postId: '1',
    author: 'John Doe',
    content: 'Great post! Really enjoyed reading about your experiences.',
    date: '2024-12-26'
  },
];

const CommentSection = ({ postId }: { postId: string }) => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [newComment, setNewComment] = React.useState('');
  const [authorName, setAuthorName] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    const postComments = commentsData.filter(comment => comment.postId === postId);
    setComments(postComments);
  }, [postId]);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !authorName.trim()) return;

    setIsSubmitting(true);
    try {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        postId,
        author: authorName,
        content: newComment,
        date: new Date().toISOString().split('T')[0]
      };

      setComments(prev => [...prev, newCommentObj]);
      setNewComment('');
      setAuthorName('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Comments</h2>
      
      <form onSubmit={handleSubmitComment} className="space-y-4">
        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="author"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            id="comment"
            rows={4}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="rounded-lg bg-gray-50 p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-medium text-gray-900">{comment.author}</h3>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-gray-500 text-center">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

const AuthorCard = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <Image
            src="/images/author-avatar.jpg"
            alt="Author"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">Jane Smith</h3>
          <p className="text-gray-600">Travel Enthusiast & Writer</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">
        Passionate about exploring new cultures and sharing travel experiences with fellow adventurers.
      </p>
    </div>
  );
};

export default function Post({ params, searchParams }: PageProps) {
  const { id } = params;
  
  React.useEffect(() => {
    if (!id || !posts.find(p => p.id === id)) {
      notFound();
    }
  }, [id]);

  const post = posts.find((p) => p.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Post Not Found</h1>
          <p className="text-gray-600">The post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const renderParagraph = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify text-gray-700 leading-relaxed">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center mb-6">
        {post.title}
      </h1>

      <div className="relative w-full h-[400px] mb-6">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="rounded-lg object-cover"
          priority
        />
      </div>

      <div className="mt-6 text-lg">
        {renderParagraph(post.description)}
      </div>

      <div className="mt-12">
        <AuthorCard />
      </div>

      <div className="mt-12">
        <CommentSection postId={id} />
      </div>
    </div>
  );
}
