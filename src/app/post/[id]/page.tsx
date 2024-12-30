"use client";

import React from "react";
import CommentSection from "@/components/Comment";
import AuthorCard from "@/components/AuthorCard";

const posts = [
  {
    id: "1",
    tittle: "Pixel Life",
    description:
      "explores the intersection of digital technology and everyday living. It examines how technology, particularly through screens, shapes our daily experiences, relationships, and mental well-being. Introduction  In the modern era, our lives are intertwined with technology. From smartphones and laptops to smart homes and virtual assistants, we interact with screens more than ever. Pixel Life dives deep into this phenomenon, uncovering the subtle yet profound ways in which digital technology influences our daily routines, relationships, and mental well-being. The Digital ImpactEvery pixel on our screens tells a story — a notification, a video call, or a social media post. But have you ever paused to consider how these pixels collectively shape our experiences?Relationships Redefined: Technology has blurred the lines between physical and virtual connections. While it brings people closer across distances, it also raises questions about the authenticity of digital relationships.Work-Life Integration: Remote work and online collaboration tools have transformed how we approach productivity. While these tools increase efficiency, they also challenge the boundaries of work-life balance.Mental Well-being: Screen time has a direct impact on our mental health, influencing sleep patterns, focus, and even self-esteem.",
    image: "../images/blog.webp",
  },
  {
    id: "2",
    tittle: "Time Hack",
    description:
      "Time Hack' focuses on practical strategies and tips to optimize your time and boost productivity. It’s about finding smarter ways to manage daily tasks and make the most of every moment.",
    image: "../images/blog2.jpg",
  },
  {
    id: "3",
    tittle: "Future Now",
    description:
      "Future Now delves into emerging technologies and trends that are shaping the world today. From AI and space exploration to sustainable innovations, it highlights how the future is unfolding right before our eyes.",
    image: "../images/blog3.jpg",
  },
  {
    id: "4",
    tittle: "Sound Waves",
    description:
      "Sound Waves explores the fascinating world of audio, from the science behind sound to its impact on our emotions, communication, and entertainment. It dives into topics like music, acoustics, and innovations in sound technology.",
    image: "../images/blog4.webp",
  },
  {
    id: "5",
    tittle: "Mind Reset",
    description:
      "Mind Reset focuses on techniques and practices to refresh your mindset, overcome stress, and boost mental clarity. It explores methods like mindfulness, meditation, and habit changes to help you start anew with a positive perspective.",
    image: "../images/blog5.jpg",
  },
  {
    id: "6",
    tittle: "Past Forward",
    description:
      "Past Forward delves into how lessons, innovations, and cultures from the past influence and shape our present and future. It’s about bridging history and modernity to uncover timeless insights and enduring legacies.",
    image: "../images/blog6.webp",
  },
];

export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const [post, setPost] = React.useState<typeof posts[0] | null>(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        const { id } = await params; // Unwrap the promise
        const foundPost = posts.find((p) => p.id === id);
        if (foundPost) {
          setPost(foundPost);
        } else {
          setError(true);
        }
      } catch {
        setError(true);
      }
    })();
  }, [params]);

  if (error) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post not found</h2>
    );
  }

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Loading...</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-500 text-center">
        {post.tittle}
      </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.tittle}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}
