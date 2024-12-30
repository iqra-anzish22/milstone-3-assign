import React from "react";

import { Card, CardContent, CardTittle } from "../components/ui/card";
interface BlogCardProps {
  post: { id: string; tittle: string; description: string; imageUrl: string };
  isDarkBackground: boolean;
}

export default function BlogCard({ post }: BlogCardProps) {

  const isDarkBackground = true;

  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-neutral-800 text-white" : "text-slate-600"
      } rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={post.imageUrl}
        alt={post.tittle}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardTittle className="text-xl font-normal mt-4 text-center">
        {post.tittle}{" "}
      </CardTittle>
      <br />

      <CardContent className="text-center">
        <p> {post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <a
          href={`/post/${post.id}`}
          className={`w-6/12 px-12 text-white text-center bg-indigo-800 rounded hover:bg-indigo-600 ${
            isDarkBackground
              ? "bg-black hover:bg-red-500"
              : "bg-black hover:bg-red-500"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
