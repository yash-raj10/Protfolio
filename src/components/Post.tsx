"use client";
import { PortableText } from "@portabletext/react";
import { BlogPost } from "@/app/types/BlogPost";
import Link from "next/link";
import React from "react";

type Props = {
  props: BlogPost;
};

export default function Post({ props }: Props) {
  return (
    <div>
      <Link
        href={props.link}
        className="flex flex-col lg:flex-row md:flex-row : items-center border-2 border-violet-400 hover:scale-105 duration-500 space-x-4 space-y-4 bg-violet-100 rounded-lg shadow-lg shadow-gray-300 p-3"
      >
        <div className="lg:w-[40%] md:w-[40%] sm:h-[40%]">
          <img
            src={props.mainImage}
            alt="blogImg"
            className="w-full object-cover rounded-lg"
            height={100}
            width={100}
          />
        </div>
        <div className="lg:w-[60%] md:w-[60%] sm:h-[60%] flex flex-col items-start">
          <h1 className="font-bold text-xl">
            <PortableText value={props.body} />
          </h1>

          <div className="w-full flex items-center justify-between space-x-1 text-violet-500">
            <p className="text-sm">
              {props.publishedAt.toString().slice(0, 10)}
            </p>
            <p className="font-bold text-xs">Click to read more</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
