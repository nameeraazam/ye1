import React from 'react';
import Image from 'next/image';

const AuthorCard: React.FC = () => {
  return (
    <div className="border rounded-lg p-6 flex items-center space-x-4">
      <div className="relative w-16 h-16">
        <Image
          src="/images/author.jpg" // Correct path for the image in the 'public' folder
          alt="Author"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <h4 className="text-xl font-semibold">John Doe</h4>
        <p className="text-gray-600">Travel Enthusiast & Writer</p>
        <p className="text-sm text-gray-500 mt-2">
          Passionate about exploring new cultures and sharing travel experiences.
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
