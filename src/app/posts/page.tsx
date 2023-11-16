"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Post from "@/components/Post";
import { BlogPost } from "../types/BlogPost";
import { getPosts } from "@/utils/sanity-utils";

type Props = {};

export default async function posts({}: Props) {
  const getBlogData: BlogPost[] = await getPosts();

  return (
    <div className="w-full h-full bg-violet-300">
      <Navbar />
      <div className="max-w-7xl min-h-screen mx-auto p-6 space-y-5">
        {getBlogData.map((b: BlogPost, index: number) => (
          <Post key={index} props={b} />
        ))}
      </div>
    </div>
  );
}
