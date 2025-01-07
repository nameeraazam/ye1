import React from 'react';
import BlogCard from "./BlogCard";

export default function Mega() {
    const posts = [
        {
            id: '1',
            title: "Connecting with Locals: The True Essence of Travel",
            description: "As I wandered through the bustling night market in Kuala Lumpur, I was immediately enveloped by a kaleidoscope of sights, sounds, and smells.",
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
        {
          id: '3',
          title: "Lessons from the Road: How Travel Changed My Perspective",
          description: "In many ways, travel has been the greatest teacher, providing me with lessons that no classroom or book could ever impart.",
          date: "2024-12-25",
          imageUrl: "/images/good3.webp",
      },
      {
          id: '4',
          title: "The Art of Slow Travel: Savoring Every Moment in Chiang Rai, Thailand",
          description: "When I did venture out to explore Chiang Rai, it was always at an unhurried pace. I'd spend entire days wandering the city's ancient temples and sacred sites, marveling at the intricate.",
          date: "2024-12-25",
          imageUrl: "/images/good4.webp",
      },
      {
        id: '5',
        title: "Embracing the Unexpected: When Travel Plans Go Awry",
        description:"As my type-A brain went into overdrive, weighing the pros and cons of waiting for the next available shuttle versus trying to navigate public transportation .",
        date: "2024-12-25",
        imageUrl: "/images/good5.webp",
      },
      {
        id: '6',
        title: "Dealing with Loneliness: The Realities of Solo Travel",
        description: "The loneliness can be particularly acute during holidays or special occasions when you're used to being surrounded by loved ones. I'll never forget the heart-wrenching pang .",
        date: "2024-12-25",
        imageUrl: "/images/good6.webp",
      },
      {
        id: '7',
        title: "The Digital Nomad Life: Working Remotely from Paradise",
        description: "One of the first gigs I landed was with a boutique travel company looking for someone to manage their blog and social media presence. It was the perfect fit.",
        date: "2024-12-25",
        imageUrl: "/images/good7.webp",
      },
      {
        id: '8',
        title: "Trekking the Himalayas: Pushing My Limits in Nepal",
        description: "As we trekked deeper into the Himalayas, the challenges only intensified. We navigated treacherous high-altitude passes blanketed in snow and ice.",
        date: "2024-12-25",
        imageUrl: "/images/good8.webp",
      },
      {
        id: '9',
        title: "Eating My Way Through Vietnam: A Culinary Adventure",
        description: "culinary experience came in a tiny alleyway in Ho Chi Minh City, where I stumbled upon a nondescript eatery specializing in com tam.",
        date: "2024-12-25",
        imageUrl: "/images/good9.webp",
      },
      {
        id: '10',
        title: "Saying Goodbye to the Cubicle: How I Quit My Corporate Job",
        description: "The long hours, endless meetings, and constant pressure to perform had taken its toll. I found myself becoming increasingly cynical.",
        date: "2024-12-25",
        imageUrl: "/images/hmmm.webp",
      },
      {
        id: '11',
        title: "Packing Light: The Art of Traveling with a Carry-On",
        description:"Hauling those heavy bags through airports, onto buses, up hostel stairs - it was a nightmare. I quickly learned that traveling",
        date: "2024-12-25",
        imageUrl: "/images/good11.webp",
      },
      {
        id: '12',
        title: "Overcoming Fear: My First Solo Trip Abroad",
        description: "to embrace this new life of travel after quitting my corporate job, I'd be lying if I said I wasn't absolutely terrified. Despite years of dreaming about exploring the world.",
        date: "2024-12-25",
        imageUrl: "/images/good12.webp",
      },
      {
        id: '13',
        title: "The Kindness of Strangers: Heartwarming Encounters on the Road",
        description: "One of the most beautiful aspects of travel has been the incredible kindness I've encountered from complete strangers. Time and again, I've been reminded that there is inherent goodness in people",
        date: "2024-12-25",
        imageUrl: "/images/good13.webp",
      },
      {
        id: '14',
        title: "Bali on a Budget: How to Experience the Island Without Breaking the Bank",
        description: "In fact, Bali ended up being one of the most affordable destinations during my year-long adventure. With some savvy planning and tips from seasoned backpackers",
        date: "2024-12-25",
        imageUrl: "/images/good14.webp",
      },
      {
        id: '15',
        title: "Getting Lost in Tokyo: Navigating the Organized Chaos",
        description: "At first, the disorientation was frustrating. I'm usually the type to meticulously plan every detail of my trips, but Tokyo seemed determined to thwart my best-laid plans.",
        date: "2024-12-25",
        imageUrl: "/images/good15.webp",
      },
        
    ];

    return (
        <div className="my-8">
            <h1 className="text-3xl font-bold text-center my-8 text-red-600">
                Focuses on the visual aspects of the website and what users interact with.
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <BlogCard 
                        key={post.id} 
                        post={post} 
                        isDarkBackground={index % 2 === 0} 
                    />
                ))}
            </div>
        </div>
    );
}
