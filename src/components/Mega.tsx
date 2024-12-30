import React from 'react';

import BlogCard from './BlogCard';

export default function Mega() {
  const posts = [
    {
      id: '1',
      tittle: "Pixel Life",
      description:"explores the intersection of digital technology and everyday living. It examines how technology, particularly through screens, shapes our daily experiences, relationships, and mental well-being.",
      imageUrl: "../images/blog.webp",
    },

    {
      id: '2',
      tittle: "Time Hack",
      description:"Time Hack' focuses on practical strategies and tips to optimize your time and boost productivity. It’s about finding smarter ways to manage daily tasks and make the most of every moment.",
     
      imageUrl: "../images/blog2.jpg",
    },
    {
      id: '3',
      tittle: "Future Now",
      description:"Future Now delves into emerging technologies and trends that are shaping the world today. From AI and space exploration to sustainable innovations, it highlights how the future is unfolding right before our eyes.",
      
      imageUrl: "../images/blog3.jpg",
    },

    {
      id: '4',
      tittle: "Sound Waves",
      description:"Sound Waves explores the fascinating world of audio, from the science behind sound to its impact on our emotions, communication, and entertainment. It dives into topics like music, acoustics, and innovations in sound technology.",
 
      imageUrl: "../images/blog4.webp",
    },
    {
      id: '5',
      tittle: "Mind Reset",
      description:"Mind Reset focuses on techniques and practices to refresh your mindset, overcome stress, and boost mental clarity. It explores methods like mindfulness, meditation, and habit changes to help you start anew with a positive perspective.",
   
      imageUrl: "../images/blog5.jpg",
    },


    {
      id: '6',
      tittle: "Past Forward",
      description:"Past Forward delves into how lessons, innovations, and cultures from the past influence and shape our present and future. It’s about bridging history and modernity to uncover timeless insights and enduring legacies.",
    
      imageUrl: "../images/blog6.webp",
    },





  ];

  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold text-center my-8 text-red-500 animate-color-change'>
        Living in a Screen-Driven World
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
