"use client";
import { BlogPost } from "@/app/types/BlogPost";
import React from "react";

type Props = {
  props: BlogPost;
};

export default function Blog({ props }: Props) {
  return (
    <div className="flex justify-between items-center border-2 border-gray-400 px-2 py-1 bg-violet-200 rounded-lg w-full">
      <a href="/posts">
        <p className="text-violet-800 cursor-pointer font-bold hover:text-black">
          {props.title}
        </p>
      </a>
      <p className="text-sm text-violet-500  md:block">
        {props.publishedAt.toString().slice(0, 10)}
      </p>
    </div>
  );
}
