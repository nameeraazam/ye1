'use client'; 

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from "@/components/ui/card";

// Define the types for the BlogPost and BlogCardProps interfaces.
interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string; // Optional image URL
}

interface BlogCardProps {
  post: BlogPost; // Expecting a BlogPost object as the prop
  isDarkBackground?: boolean; // Optional prop to toggle dark background style
}

export default function BlogCard({ post, isDarkBackground = false }: BlogCardProps) {
  // Fallback UI for the case when post is not available
  if (!post) {
    return (
      <Card className="p-4 bg-red-50 border-red-200">
        <CardContent>
          <p className="text-red-600">Loading...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`
        overflow-hidden
        ${isDarkBackground ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'}
        rounded-lg shadow-lg hover:shadow-xl transition-all duration-300
      `}
    >
      {/* Conditional rendering for image if it exists */}
      {post.imageUrl && post.imageUrl.length > 0 ? (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title || 'Blog post image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-gray-200 flex justify-center items-center">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}

      <div className="p-4">
        {/* Blog title */}
        <CardTitle className="text-xl font-semibold mb-4">
          {post.title || 'Untitled Post'}
        </CardTitle>

        {/* Blog description */}
        <CardContent className="p-0 mb-4">
          <p className="text-sm">
            {post.description || 'No description available'}
          </p>
        </CardContent>

        <div className="space-y-4">
          {/* Publication date */}
          <p className={`text-sm ${isDarkBackground ? 'text-slate-400' : 'text-slate-600'}`}>
            Published: {post.date ? new Date(post.date).toLocaleDateString() : 'Date not available'}
          </p>

          {/* Link to read more */}
          <Link 
            href={`/posts/${post.id}`}
            className={`
              block w-full py-2 text-center text-white
              ${isDarkBackground ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'}
              rounded-md transition-colors duration-200
            `}
          >
            Read More
          </Link>
        </div>
      </div>
    </Card>
  );
}
