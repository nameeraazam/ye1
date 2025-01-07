'use client'; // Add this line at the top

import React, { useState } from 'react';

interface Comment {
  id: number;
  text: string;
  author: string;
  date: string;
  postId: string; // Add postId to the Comment interface
}

interface CommentSectionProps {
  postId: string; // Ensure that the postId is passed correctly to the component
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      text: newComment,
      author: 'Anonymous User',
      date: new Date().toLocaleDateString(),
      postId: postId, // Associate the comment with the postId
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Comments</h3>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 border rounded-lg mb-2"
          placeholder="Add a comment..."
          rows={3}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          // Only display comments for the current postId
          comment.postId === postId && (
            <div key={comment.id} className="border p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{comment.author}</span>
                <span className="text-gray-500 text-sm">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.text}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
